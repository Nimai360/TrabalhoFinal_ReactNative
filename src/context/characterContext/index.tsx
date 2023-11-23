import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CharacterContextType {
    qtPontos: number;
    setQtPontos: Dispatch<SetStateAction<number>>;
}

interface CharacterProviderProps {
    children: ReactNode;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [qtPontos, setQtPontos] = useState(5);

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
