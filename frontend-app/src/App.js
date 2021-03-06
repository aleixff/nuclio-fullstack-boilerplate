import React from 'react';
import './App.css';
import {ButtonNumber, CleanButtonDEL, CleanButtonAC, OperationButton, ResultButton} from './calcButton';



function App(){

    //-------------DISPLAY UPDATE

    //-------------ADD NUMBERS AND OPERATORS
    let arrayNumber = [], arrayOperator = [];
    let newValue;


    //NUMBERS
    const addNumber = n => {
        let indexNumber,Value;

        indexNumber = arrayNumber.length - 1;

        //Add data to array
        if(arrayNumber.length > arrayOperator.length){

            Value = String(arrayNumber[indexNumber][0]);
            newValue = Value + String(n);
            arrayNumber[indexNumber][0] = newValue;


        }else if (arrayNumber.length === arrayOperator.length){
            arrayNumber.push([String(n)]);
            if(arrayNumber.length === 1) {
                Value = String(arrayNumber[0][0]);
            }else{
                Value = String(arrayNumber[arrayNumber.length - 1][0]);
            }
            newValue = Value;
        }

        document.getElementById("2").value = newValue;

        console.log(arrayNumber);

    };


    //OPERATORS
    const addOperator = n => {

        if(arrayNumber.length === 0){
            alert("Es necesario insertar un número");
        }else if(arrayNumber.length > arrayOperator.length){
            arrayOperator.push(n);
        }else if(arrayNumber.length === arrayOperator.length){
            arrayOperator.pop();
            arrayOperator.push(n);
        }

         console.log(arrayOperator);
    };


    //-------------DELETE

    //TOTAL DELETE
    const totalDelete = () => {
        arrayNumber = [];
        arrayOperator = [];
        newValue = "";

        document.getElementById("2").value = newValue;
        console.log(arrayNumber);

    };

    //PARTIAL DELETE
    const partialDelete = () => {
        let indexNumberPD, ValuePD;
        indexNumberPD = arrayNumber.length - 1;

        ValuePD = String(arrayNumber[indexNumberPD][0].slice(0, -1));
        arrayNumber[indexNumberPD][0] = ValuePD;
        newValue = ValuePD;

        document.getElementById("2").value = newValue;
        console.log(arrayNumber);

    };

    //RESULT
    const calResult = () => {
        let result;
        result = '';
        //indexArrays = arrayNumber -1;
        for(let i=0; i < arrayNumber.length; i++){
            result += arrayNumber[i][0];
            if(i < arrayNumber.length - 1) {
                result += arrayOperator[i];
            }
        }
        result = eval(result);
        newValue = result;

        document.getElementById("2").value = newValue;

    };



    return (
        <div className="App">
            <header className="App-header">
                <div className={"calculator"}>
                    <div className={"display"}>
                        <output id="2" name="display" className="result">''</output>
                    </div>

                    <div className={'clean-buttons'}>
                        <CleanButtonDEL value={"DEL"} onClick={partialDelete} />
                        <CleanButtonAC value={"AC"} onClick={totalDelete} />
                    </div>

                    <div className={"buttons"}>
                        <ButtonNumber value={7} onClick={addNumber} />
                        <ButtonNumber value={8} onClick={addNumber}/>
                        <ButtonNumber value={9} onClick={addNumber}/>
                        <OperationButton value={"+"} onClick={addOperator} />

                        <ButtonNumber value={4} onClick={addNumber}/>
                        <ButtonNumber value={5} onClick={addNumber}/>
                        <ButtonNumber value={6} onClick={addNumber}/>
                        <OperationButton value={"-"} onClick={addOperator}/>

                        <ButtonNumber value={1} onClick={addNumber}/>
                        <ButtonNumber value={2} onClick={addNumber}/>
                        <ButtonNumber value={3} onClick={addNumber}/>
                        <OperationButton value={"*"} onClick={addOperator} />

                        <ButtonNumber value={0} onClick={addNumber}/>
                        <ButtonNumber value={"."} onClick={addNumber} />
                        <ResultButton value={"="} onClick={calResult} />
                        <OperationButton value={"/"} onClick={addOperator} />
                    </div>
                </div>
            </header>
        </div>
    );
}


export default App;
