import { useState } from "react";
import { Api } from "../../api/api";

import "./Create.css";

export function Create(props) {

    const handleSubmit = async event => {
        event.preventDefault();

        const cliente = event.json();
       

        const dados = cliente;

        const resultado = await Api.buildApiPostRequest(Api.createUrl(), dados);

        const jsonResultado = await resultado.json();

    };

    const updatePreview = event => {
        setPreviewImage(event.target.value);
    };

    return 
}