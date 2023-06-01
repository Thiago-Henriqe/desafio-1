import { jogadores } from "./listaJogadores.js";
import { logado } from "./index.js";

// adicionar jogador
export default function novoJogador (nome, time) {
    if (logado == 1){
    if  (time == "Azul" || time == "Vermelho"){
        const jogadorNovo = {
            "Nome": nome,
            "Time": time
            }
        jogadores.push(jogadorNovo);
        console.log('Jogador adicionado com sucesso')
        return true;   
    }
    console.log('Não existe nenhum time com essa cor')
    return false;
    }
    console.log("Você não tem acesso, favor logar em uma conta")
}