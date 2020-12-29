/*
    Ser autenticável significa ter a propriedade  "senha"
 */

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        console.log(autenticavel);
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}