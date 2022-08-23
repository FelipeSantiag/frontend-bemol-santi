import { useEffect, useState } from "react";
import { Api } from "../../api/api";



export function Update(props) {
    const id = props.match.params.id;

    const [item, setItem] = useState("");


    useEffect(() => {
        if (!item) {
            getItemData();
        }
    });

    const getItemData = async () => {
        const resultado = await Api.buildApiGetRequest(Api.readSingleUrl(id));

        const dados = await resultado.json();

        setItem(dados);

    };

    const handleSubmit = async event => {
        event.preventDefault();

        const cliente = event.json();


        const resultado = await Api.buildApiPutRequest(
            Api.updateUrl(id),
            cliente
        );

        const jsonResultado = await resultado.json();

        props.history.push(`/view/${jsonResultado._id}`);
    };

    return
}