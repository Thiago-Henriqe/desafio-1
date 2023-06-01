import { jogadores } from "./listaJogadores.js";
import { logado } from "./index.js";

//apagar jogador da lista de jogadores
export default function apagarJogador (nomeApagarJogador){
    if (logado == 1){
    const acharPraApagar = jogadores.findIndex(jogadorApagado => jogadorApagado.Nome === nomeApagarJogador);
    if (acharPraApagar == -1){
        console.log("Nenhum jogador encontrado come este nome")
        return false;
    }
    jogadores.splice(acharPraApagar, 1);
    console.log(`Jogador ${nomeApagarJogador} apagado com sucesso`)
    return true;
    
    }
    console.log("Você não tem acesso, favor logar em uma conta")
}