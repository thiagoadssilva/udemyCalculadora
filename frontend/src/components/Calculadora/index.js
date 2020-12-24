import React, {useState} from 'react';

import { 
    ContainerStyled,
    TitleCalculadora 
} from './styled';
//- Importando os camponentes do Bootstrap
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';


export default () => {
    const [txtNumeros, setTxtNumeros] = useState('0');

    function adicionarNumeros(numero){
        setTxtNumeros(txtNumeros + numero);
    }

    return (
        <ContainerStyled>
            <TitleCalculadora>CALCULADORA</TitleCalculadora>
            <Jumbotron style={{
                background: 'transparent !important',
                backgroundColor: '#00b4d8',
                padding: '5px',
                margin: '5px',
                width: '400px'
            }}>
                <Container>
                    <Row>
                        <Col xs='3'>
                            <Button variant="danger" onClick={() => setTxtNumeros(0)}>C</Button>
                        </Col>
                        <Col xs='9'>
                            <Form.Control
                                type='text'
                                name='txtNumeros'
                                className='text-right'
                                readOnly='readonly'
                                value={txtNumeros}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('7')}>7</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('8')}>8</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('9')}>9</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">/</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('4')}>4</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('5')}>5</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('6')}>6</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">*</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('1')}>1</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('2')}>2</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('3')}>3</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">-</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('0')}>0</Button>
                        </Col>
                        <Col>
                            <Button variant="light" onClick={() => adicionarNumeros('.')}>.</Button>
                        </Col>
                        <Col>
                            <Button variant="success">=</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">+</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </ContainerStyled>
    );
}