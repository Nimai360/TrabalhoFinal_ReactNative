import axios, { AxiosResponse } from "axios";

export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

const users = axios.create({
    baseURL: 'http://www.bots2.me/_botsConfig/serratec/react_native/'
});

export function getUsuarioAPI(email: string, password: string): Promise<any> {
    
    const url = `index.php?email=${email}&senha=${password}`;

    return users.get(url)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function getMapaAPI(): Promise<any> {    
    const url = `mapa1.json`;

    return users.get(url)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function getUsuariosNoMapaAPI(idMapa: number): Promise<any> {
    
    const url = `index.php?indexMapa=${idMapa}`;

    return users.get(url)
        .then(response => {
            console.log('getUsuariosNoMapaAPI');
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function getFotoPersonagensAPI(): Promise<any> {    
    const url = `characters.json`;

    return users.get(url)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function postUsuarioAPI(username: string, email: string, password: string): Promise<any> {
    const usuario = {
        username: username,
        email: email,
        password: password
    };

    const url = 'index.php';

    return users.post(url, usuario)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function putUsuarioAPI(email: string, conectado: boolean, indexMapa: number): Promise<any> {
    const usuario = {
        email: email,
        conectado: conectado,
        indexMapa: indexMapa
    };

    const url = 'index.php';

    return users.put(url, usuario)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}