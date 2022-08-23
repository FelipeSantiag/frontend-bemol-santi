import React from 'react';
import { Formik, Field, Form } from 'formik';


//import { Footer } from "../Footer/footer";
//import { Header } from "../Header/header";
import './App.css';


function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('endereo', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          nome: '',
          dataNasc: '',
          genero: '',
          idcpf: '',
          telefone: '',
          email: '',
          senha: '',
          complemento: '',
          cep: '',
          endereço: '',
          bairro: '',
          cidade: '',
          uf: '',
          refencia: '',
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Nome</label>
              <Field name="nome_completo" type="text" />
            </div>
            <div className="form-control-group">
              <label>DataNascimento</label>
              <Field name="nascimento" type="text" />
            </div>
            <div className="form-control-group">
              <label>Genero</label>
              <Field name="genero" type="text" />
            </div>
            <div className="form-control-group">
              <label>CPF</label>
              <Field name="cpf" type="text" />
            </div>
            <div className="form-control-group">
              <label>Telefone</label>
              <Field name="telefone" type="text" />
            </div>
            <div className="form-control-group">
              <label>Email</label>
              <Field name="email" type="text" />
            </div>
            <div className="form-control-group">
              <label>Senha</label>
              <Field name="senha" type="text" />
            </div>
            <div className="form-control-group">
              <label>TipoDomicilio</label>
              <Field name="tipo-domicilio" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cep</label>
              <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
            </div>
            <div className="form-control-group">
              <label>Endereco</label>
              <Field name="endereco" type="text" />
            </div>
            <div className="form-control-group">
              <label>bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field component="select" name="uf">
                <option value={null}>Selecione o Estado</option>
                <option value="AM">Amazonas</option>
                <option value="PA">Pará</option>
              </Field>
            </div>
            <div className="form-control-group">
              <label>Referencia</label>
              <Field name="referencia" type="text" />
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;