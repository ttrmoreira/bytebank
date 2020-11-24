import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';
import {Conta} from './Conta.js';

const cliente1 = new Cliente( "Ricardo",11122233309);


const contaCorrente1 = new ContaCorrente(0, cliente1, 1001);
contaCorrente1.depositar(346);
contaCorrente1.sacar(50);



const contaPoupanca = new ContaPoupanca(50, contaCorrente1, 1001);

console.log(contaCorrente1);
console.log(contaPoupanca);
console.log(ContaCorrente.numeroDeContas);

