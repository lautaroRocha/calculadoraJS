class Calculator {
    constructor(numeroAnterior, numeroNuevo){
        this.numeroAnterior = numeroAnterior;
        this.numeroNuevo = numeroNuevo;
    }
        clear(){
            this.numeroAnterior.innerText = "";
            this.numeroNuevo.innerText = "";
            this.operation = undefined;
        }
        appendNumber(numero){
          this.numeroNuevo.innerText = this.numeroNuevo.innerText + numero.toString();
        }
        elegirOperacion(operation){
              this.operation = operation ;
        }
        calcular(){
        let resultado;
        const  oldNum = parseInt(this.numeroAnterior.innerText);
        const newNum = parseInt(this.numeroNuevo.innerText);

        switch(this.operation){
               case "+":
                   resultado = oldNum + newNum; 
                   break;
                case "-":
                    resultado = oldNum - newNum;
                    break;
                case "*":
                    resultado = oldNum * newNum;
                    break;
                case "/":
                    resultado = oldNum / newNum;
                    break;
           } 
           this.numeroNuevo.textContent = resultado.toString();
           this.numeroAnterior.innerText = "";
        }
        updateDisplay(){
            this.numeroAnterior.innerText = this.numeroNuevo.innerText;
            this.numeroNuevo.innerText = " ";
        }
    
    }



const numeroBoton = document.querySelectorAll('[data-number]');
const operadorBoton = document.querySelectorAll('[data-operation]');
const igualBoton = document.querySelector('[data-equal]')
const borrarBoton = document.querySelector('#borrar')
const pantalla = document.querySelector('.display')
const numeroAnterior = document.querySelector('[data-viejo]');
const numeroNuevo = document.querySelector('[data-nuevo]');


const calculadora = new Calculator(numeroAnterior, numeroNuevo);

operadorBoton.forEach(button => {
    button.addEventListener('click', ()=>{
        calculadora.appendNumber(button.innerText);
        calculadora.elegirOperacion(button.innerText);
        calculadora.updateDisplay();
    })
})


numeroBoton.forEach  (button =>{
    button.addEventListener('click', () => {
        calculadora.numeroNuevo.textContent="";
        calculadora.appendNumber(button.textContent);
    })
})

borrarBoton.addEventListener('click', () =>{
    calculadora.clear();
});

igualBoton.addEventListener('click', ()=>{
    calculadora.calcular();
});