import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import { Form, Dropdown } from "semantic-ui-react";
import FormularioHeader from "../../components/Formulario/FormularioHeader/FormularioHeader";
import { InputInfoNome } from "../../domain_files/Setor/SetorInputInfo";

import apiLocais from '../../service/individuals/apiLocais';
import apiSetores from "../../service/individuals/apiSetores";

const SetorCadastro = () => {
    const history = useHistory();
    const [locais, setLocais] = useState([]);
    const [setor, setSetor] = useState({
        nome: '',
        localId: -1
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        apiSetores.post({...setor})
          .then(response => console.log(response));
        history.push('/setores');
      }

    useEffect(() => {
        apiLocais.getAll()
        .then(response => {
            const data = response.content.map(local => ({value: local.id, text: local.nome}));
            console.log(data);
            setLocais(data);
        })
    }, []);


    return (
        <React.Fragment>
        <Form>
        <FormularioHeader
            icon='sitemap'
            header='Adicionar Setores'
            subheader='Adicionar Setores a Localização'
        />
        <Form.Field>
            <label>Fornecedores</label>
            <Dropdown 
                placeholder='Selecione um Local'
                search
                selection
                options={locais}
                onChange={(event, data) => {
                    setSetor({...setor, localId:data.value});
                }}
            />
        </Form.Field>
        <Form.Input 
            name='nome'
            label={InputInfoNome}
            value={setor.nome}
            disabled={false}
            onChange={event => setSetor({...setor, nome:event.target.value})}
        />
        <Form.Button primary onClick={handleSubmit}>Cadastrar Marcas</Form.Button>
        </Form>
        </React.Fragment>
    );
}

export default SetorCadastro;