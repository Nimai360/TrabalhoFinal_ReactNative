import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { getAsyncStorage } from '../../services/asyncStorage';

interface CharacterContextType {
    qtPontos: number;
    setQtPontos: Dispatch<SetStateAction<number>>;
}

interface CharacterProviderProps {
    children: ReactNode;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

function loadUserFromAsync() {
    return getAsyncStorage("user")
        .then(value => {
            value = value + '';
            const parsedValue = JSON.parse(value);

            return loadUserPointsFromAsync(parsedValue['email']);
        })
        .then(points => {
            // console.log('points: ' + points);
            return points;
        })
        .catch(e => {
            console.error('ContextUser - Erro ao recuperar os dados:', e);
            throw e; // Propagar o erro para que seja tratado externamente, se necessário
        });
}

function loadUserPointsFromAsync(email) {
    return getAsyncStorage(`${email}-Pontos`)
        .then(value => {
            value = value + '';
            const parsedValue = JSON.parse(value);
            console.log('ContextPoints - ' + parsedValue);

            return parsedValue;
        })
        .catch(e => {
            console.error('ContextPoints - Erro ao recuperar os dados:', e);
            throw e; // Propagar o erro para que seja tratado externamente, se necessário
        });
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [qtPontos, setQtPontos] = useState(0);

    useEffect(() => {
        loadUserFromAsync()
            .then(points => {
                setQtPontos(Number(points));
            })
            .catch(error => {
                // Trate o erro conforme necessário
            });
    }, []);

    return (
        <CharacterContext.Provider value={{
            qtPontos, setQtPontos
        }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacterContext = (): CharacterContextType => {
    const context = useContext(CharacterContext);
    if (!context) {
        throw new Error('useCharacterContext deve ser usado dentro de um CharacterProvider');
    }
    return context;
};
