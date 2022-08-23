export const Api = {
    baseUrl: "http://localhost:3000/clientes",

    createUrl: () => Api.baseUrl,

    readAllUrl: () => Api.baseUrl,
    readSingleUrl: id => Api.baseUrl + "/" + id,

    updateUrl: id => Api.baseUrl + "/" + id,

    deleteUrl: id => Api.baseUrl + "/" + id,


    // Cadastrar Cliente
    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        });
    },

    // Listagem de Clientes (All)
    buildApiGetRequest: url => {
        return fetch(url, {
            method: "GET",
        });
    },

    // AtualizaById
    buildApiPutRequest: (url, body) => {
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        });
    },
    // Apagar cadastro de cliente
    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: "DELETE",
        });
    },
};