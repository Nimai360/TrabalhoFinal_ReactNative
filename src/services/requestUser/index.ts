import axios, { AxiosResponse } from "axios";

export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

const users = axios.create({
    baseURL: 'http://www.bots2.me/_botsConfig/serratec/react_native/'
});

// export function getUsuarioAPI(email: string, password: string) {
//     const url = `index.php?email=${email}&senha=${password}`;

//     return users.get(url);
// }

export function getUsuarioAPI(email: string, password: string): Promise<any> {
    
    const url = `index.php?email=${email}&senha=${password}`;

    return users.get(url)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}

export function setUsuarioAPI(username: string, email: string, password: string): Promise<any> {
    const usuario = {
        username: username,
        email: email,
        password: password
    };

    const url = 'index.php';

    return users.post(url, usuario)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Retornar null em caso de erro
            console.error('Erro ao enviar solicitação:', error);
            return null;
        });
}