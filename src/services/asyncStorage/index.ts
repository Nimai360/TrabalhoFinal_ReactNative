import AsyncStorage from '@react-native-async-storage/async-storage';

export function setAsyncStorage(key: string, value: any) {
    const storeData = () => {
        const valueString = JSON.stringify(value);
        AsyncStorage.setItem(key, valueString)
            .then(() => console.log('Dados salvos com sucesso!'))
            .catch(e => console.error('Erro ao salvar os dados:', e));
    };
    storeData();
}

export function getAsyncStorage(key: string) {
    const retrieveData = () => {
        return AsyncStorage.getItem(key)
            .then(value => {
                if (value !== null) {
                    return value;
                }
            })
            .catch(e => console.error('Erro ao recuperar os dados:', e));
    };
    return retrieveData();
}

// COMO CHAMAR A FUNÇÃO getAsyncStorage
//  getAsyncStorage("my-key")
//  .then(value => {
//    console.log(value);
//  })
//  .catch(e => console.error('Erro ao recuperar os dados:', e));