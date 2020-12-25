import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculadora from './components/Calculadora';

describe('Calculadora', () => {

  it('Deve redenrizar o compoenente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Deve limpar o campo', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('Deve fazer uma soma', () =>{
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('4');
  });

  it('Deve fazer uma subtração', () =>{
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('Deve fazer uma divisão', () =>{
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('1');
  });

  it('Deve fazer uma multiplicação', () =>{
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('4');
  });

  it('Deve fazer uma soma com ponto', () =>{
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('4.4');
  });
});