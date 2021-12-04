import axios from "axios";
import React, {useEffect, useState} from "react";
import useDynamicRefs from 'use-dynamic-refs';
import { Button, Container, Dropdown, Form, Input, Label, Modal, Select, Tab, Table } from "semantic-ui-react";
import apiClientes from "../../service/individuals/apiClientes";
import { useHistory } from "react-router";

const VendaCadastro = () => {
    const history = useHistory();
    const [mercadorias, setMercadorias] = useState([]);
    // Modal
    const [open, setOpen] = useState(false);

    // Pesquisa de itnes
    const opcoesPesquisa = [
        {key: 'nome', text: 'Nome', value: 'nome'},
        {key: 'codigo', text: 'Código', value: 'codigo'}
    ]
    const [opcaoPesquisa, setOpcaoPesquisa] = useState(opcoesPesquisa[0].value);

    const [clientes, setClientes] = useState([]);
    const [clienteId, setClienteId] = useState(-1);
    useEffect(()=>{
        apiClientes.getAll()
        .then((response) => {
            const data = response.content.map((c) => {
                return {key: c.id, value: c.id, text: `${c.cpf} - ${c.nome} ${c.sobrenome}`}
            })
            setClientes(data);
        })
        .catch((error) => console.log(error));
    },  [])

    useEffect(()=>{
        axios.get('http://localhost:8080/itens_estocados/list')
        .then((response) => {
            const data = response.data.map(m => {
                return {...m, solicitada: 0}
            });
            setMercadorias(data);
        })
        .catch((error) => console.log(error));
    }, []);

    function adicionarMercadoria(event)  {
        const mercadoriasTmp = mercadorias.slice(0);
        mercadoriasTmp.forEach((m) => {
            if(m.id == event.target.id) {
                const inputElement = document.getElementById(`i_${event.target.id}`);
                const input = inputElement.value;
                if(input > m.quantidade ) {
                    alert("Quantidade maior do que a estocada !!!");
                } else if(input <= 0 || input == NaN || input == '')  {
                    alert("Quantidade inválida")
                }
                else {
                    m.quantidade = Number.parseInt(m.quantidade) - Number.parseInt(input);
                    m.solicitada += Number.parseInt(input);
                    inputElement.value = 0;
                }
                
                
            }
        })
        setMercadorias(mercadoriasTmp);
        console.log(mercadorias);
    }
    function removerMercadoria(event) {
        const mercadoriasTmp = mercadorias.slice(0);
        mercadoriasTmp.forEach((m) => {
            if(m.id == event.target.id) {
                m.quantidade += m.solicitada;
                m.solicitada = 0;
            }
        })
        setMercadorias(mercadoriasTmp);
    }

    function realizarVenda() {
        let valor = 0;
        const itensVendidos = mercadorias.filter((m) => {
            return m.solicitada != 0;
        })
        .map((m) => {
            valor += m.precoVenda * m.solicitada;
            return {itemEstocadoId: m.id, quantidade: m.solicitada}
        })
        console.log(itensVendidos, valor);
        if(clienteId == -1) {
            alert("Selecione um Cliente");
        } else if(itensVendidos.length == 0) {
            alert("Venda Vazia");
        } else {
            axios.post('http://localhost:8080/vendas', {itensVendidos: itensVendidos, clienteId: clienteId, valor: valor});
            history.push('/vendas');
        }
    }

    function handleInput(event) {
        const index = event.target.id;
        console.log(index);

        // setMercadorias([...mercadorias, mercadorias[index]);
        // (e) => setMercadorias([...mercadorias, mercadorias[e.target.dataset.index].input = e.target.value])
    }
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() =>  setOpen(true)}
                trigger={<Button primary>Adicionar Mercadoria</Button>}
            >
                <Modal.Header>Adicionar Mercadorias</Modal.Header>
                {/* <Modal.Content> */}
                    {/* <Input placeholder='10299203' /> */}
                    {/* <Select compact options={opcoesPesquisa} defaultValue={opcoesPesquisa[0].value} /> */}
                    {/* <Button primary>Pesquisar Mercadorais</Button> */}
                {/* </Modal.Content> */}
                <Modal.Description>
                    <Table celled textAlign="center">
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell  width='3'>Código</Table.Cell>
                                <Table.Cell width='6'>Nome</Table.Cell>
                                <Table.Cell width='3'>Preço de Venda</Table.Cell>
                                <Table.Cell width='2'>Quantidade Selecionada</Table.Cell>
                                <Table.Cell width='2'>Opções</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {mercadorias.map((m) => <Table.Row key={m.id}>
                                <Table.Cell>{m.codigo}</Table.Cell>
                                <Table.Cell>{m.nome}</Table.Cell>
                                <Table.Cell>{m.precoVenda}</Table.Cell>
                                <Table.Cell>{m.quantidade}</Table.Cell>
                                <Table.Cell>
                                    <Input  id={`i_${m.id}`}  onChange={(event) => event.target.value=event.target.value.replace(/[^0-9]/g,'') } />
                                    <Button id={m.id} onClick={adicionarMercadoria}>Adicionar</Button>
                                </Table.Cell>
                            </Table.Row>)}
                        </Table.Body>
                    </Table>
                    
                </Modal.Description>
                <Modal.Actions>
                    <Button primary onClick={() => setOpen(false)}>Fechar</Button>
                </Modal.Actions>
            </Modal>
            <Form> 
                <Form.Field >
                <label >Selecione um Cliente</label>
                <Dropdown 
                    search 
                    options={clientes}
                    selection
                    onChange={(event, data) => {
                        setClienteId(data.value);
                    }}
                />
                </Form.Field>
            </Form>
            

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell  width='4'>Código</Table.Cell>
                        <Table.Cell width='8'>Nome</Table.Cell>
                        <Table.Cell width='2'>Quantidade Estocada</Table.Cell>
                        <Table.Cell width='2'>Preço Total</Table.Cell>
                        <Table.Cell width='2'>Opções</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {mercadorias.map((m) => 
                        {
                            if (m.solicitada != 0) {
                                return <Table.Row>
                                    <Table.Cell>{m.codigo}</Table.Cell>
                                    <Table.Cell>{m.nome}</Table.Cell>
                                    <Table.Cell>{m.solicitada}</Table.Cell>
                                    <Table.Cell>{(m.solicitada * m.precoVenda).toFixed(2)}</Table.Cell>
                                    <Table.Cell>
                                        <Button id={m.id} onClick={removerMercadoria}>Remover</Button>
                                    </Table.Cell>
                                </Table.Row>
                            }
                        }
                    )}
                </Table.Body>
            </Table>
            <Button onClick={realizarVenda}>Fechar Venda</Button>
            
        </React.Fragment>
    );
}


export default VendaCadastro;