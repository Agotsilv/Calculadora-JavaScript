    function calculadora() {
        const operacao = Number(prompt("Informe a operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão Real (/) \n 5- Divisão Inteira (%)\n 6- Potenciação (**)"));

        if (!operacao || operacao >= 7) {
            alert(`Numero invalido!`)
            calculadora();
        } else {
            let n1 = Number(prompt('Informe primeiro numero:'))
            let n2 = Number(prompt('Informe segundo numero:'))
            let resultado;


            if (!n1 || !n2) {
                alert(`Erro - informe um numero`)
                calculadora();
            } else {
                function soma() {
                    resultado = n1 + n2;
                    alert(`${n1} + ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function subtracao() {
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function multiplicacao() {
                    resultado = n1 * n2;
                    alert(`${n1} * ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function divisaoReal() {
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function divisaoInteira() {
                    resultado = n1 % n2;
                    alert(`${n1} % ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function potenciacao() {
                    resultado = n1 ** n2;
                    alert(`${n1} ** ${n2} = ${resultado}`)
                    novaOperacao();
                }

                function novaOperacao() {
                    let opc = Number(prompt("Deseja fazer uma nova operação?\n 1 - Sim\n 2  - Não"))
                    if (opc == 1) {
                        calculadora();
                    } else if (opc == 2) {
                        alert("Até mais");
                    } else {
                        alert("Informe uma opção valida")
                        novaOperacao();
                    }
                }
            }
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
    calculadora()