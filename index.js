import {Cliente} from './Cliente.js'
import {Gerente} from './Funcionario/Gerente.js'
import {Diretor} from './Funcionario/Diretor.js'
import {SistemaAutenticacao} from './SistemaAutenticacao.js'

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123");

const estalogadoDiretor = SistemaAutenticacao.login(diretor, "123456789");
const estalogadoGerente = SistemaAutenticacao.login(gerente, "123");

console.log(estalogadoDiretor);
console.log(estalogadoGerente);
