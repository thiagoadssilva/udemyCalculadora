import React from 'react';
import ReacDom from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('teste da calculadora', () => {
    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

    it('Deve garantir que 1 + 4 = 5.', () =>{
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Deve garatir que 4 - 1 = 3.', () => {
        let subtracao = calcular(4, 1, SUBTRACAO);
        expect(subtracao).toEqual(3);
    });

    it('Deve garatir que 4 / 2 = 2.', () => {
        let divisao = calcular(4, 2, DIVISAO);
        expect(divisao).toEqual(2);
    });

    it('Deve garatir que 4 * 2 = 8.', () => {
        let multiplicacao = calcular(4, 2, MULTIPLICACAO);
        expect(multiplicacao).toEqual(8);
    });

    it('Deve retorno 0 quando a operação for invalida', () => {
        let operacaoInvalida = calcular(1, 1, '#');
        expect(operacaoInvalida).toEqual(0);
    });
}); 