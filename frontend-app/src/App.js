import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    var operadorP, operadorS, clickOperador, resultado, visualizacion;

    operadorP = '';
    operadorS = '';
    clickOperador = '';
    resultado = '';
    visualizacion = '';


    function valor0() {
        if(clickOperador === ''){
            operadorP += '0';
        }else{
            operadorS += '0';
        }
    }

    function valor1() {
        if(clickOperador === ''){
            operadorP += '1';
        }else{
            operadorS += '1';
        }
    }

    function valor2() {
        if(clickOperador === ''){
            operadorP += '2';
            console.log(operadorP);
        }else{
            operadorS += '2';
            console.log(operadorS);
        }
    }

    function valor3() {
        if(clickOperador === ''){
            operadorP += '3';
        }else{
            operadorS += '3';
        }
    }

    function valor4() {
        if(clickOperador === ''){
            operadorP += '4';
        }else{
            operadorS += '4';
        }
    }

    function valor5() {
        if(clickOperador === ''){
            operadorP += '5';
        }else{
            operadorS += '5';
        }
    }

    function valor6() {
        if(clickOperador === ''){
            operadorP += '6';
        }else{
            operadorS += '6';
        }
    }

    function valor7() {
        if(clickOperador === ''){
            operadorP += '7';
        }else{
            operadorS += '7';
        }
    }

    function valor8() {
        if (clickOperador === '') {
            operadorP += '8';
        } else {
            operadorS += '8';
        }
    }


    function valor9() {
        if(clickOperador === ''){
            operadorP += '9';
        }else{
            operadorS += '9';
        }
    }

    function punto() {
        if(clickOperador === ''){
            operadorP += '.';
        }else{
            operadorS += '.';
        }
    }

    function resta() {
        if(clickOperador === ''){
            clickOperador = '-';
        }else{
            alert('No pueden haber dos operadores');
        }
    }

    function sumar() {
        if(clickOperador === ''){
            clickOperador = '+';
        }else{
            alert('No pueden haber dos operadores');
        }
    }

    function multi() {
        if(clickOperador === ''){
            clickOperador = '*';
        }else{
            alert('No pueden haber dos operadores');
        }
    }

    function div() {
        if(clickOperador === ''){
            clickOperador = '/';
        }else{
            alert('No pueden haber dos operadores');
        }
    }

    function limpiar() {
        operadorP = '';
        operadorS = '';
        clickOperador = '';
    }

    function calc() {

        operadorP = Number(operadorP);
        operadorS = Number(operadorS);

        resultado = eval(operadorP + ' ' + clickOperador + ' ' + operadorS);
        console.log(operadorP);
        console.log(operadorS);
        console.log(clickOperador);


        console.log(resultado);

        visualizacion = resultado;

    }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>CALCULADORA</h2>
        <div className={"calculadora"}>
            <button onClick={limpiar} className={"button c"}>C</button>
            <output name="visualizacion" For="visualizaciong" className={"resultado"}>{visualizacion}</output>
            <button onClick={valor7} className={"button"}>7</button>
            <button onClick={valor8} className={"button"}>8</button>
            <button onClick={valor9} className={"button"}>9</button>
            <button onClick={sumar} className={"button"}>+</button>
            <button onClick={valor4} className={"button"}>4</button>
            <button onClick={valor5} className={"button"}>5</button>
            <button onClick={valor6} className={"button"}>6</button>
            <button onClick={resta} className={"button"}>-</button>
            <button onClick={valor1} className={"button"}>1</button>
            <button onClick={valor2} className={"button"}>2</button>
            <button onClick={valor3} className={"button"}>3</button>
            <button onClick={multi} className={"button"}>*</button>
            <button onClick={valor0} className={"button"}>0</button>
            <button onClick={punto} className={"button"}>.</button>
            <button onClick={calc} className={"button"}>=</button>
            <button onClick={div} className={"button"}>/</button>
        </div>
      </header>
    </div>
  );
}

export default App;
