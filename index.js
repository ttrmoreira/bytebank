import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';
import {Conta} from './Conta.js';

const cliente1 = new Cliente( "Ricardo",11122233309);


const contaCorrente1 = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, contaCorrente1, 1001);
const contaSalario = new ContaSalario(cliente1);

console.log(contaCorrente1);
console.log(contaPoupanca);
console.log(contaSalario);
console.log(conta);

