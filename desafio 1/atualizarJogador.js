import { jogadores } from "./listaJogadores.js";
import { logado } from "./index.js";

//atualizar time do jogador por nome
export default function atualizarJogador (nomeAtualizarJogador, timeAtualizado){
    if (logado == 1){
    const acharPraAtualizar = jogadores.findIndex(jogadorAtualizado => jogadorAtualizado.Nome === nomeAtualizarJogador);
    if (acharPraAtualizar == -1){
        console.log("Nenhum jogador encontrado come este nome")
        return false;
    }else {
            if  (timeAtualizado == "Azul" || timeAtualizado == "Vermelho"){
            jogadores[acharPraAtualizar] = {
            "Nome": nomeAtualizarJogador,
            "Time": timeAtualizado 
            }       
            console.log('Jogador atualizado com sucesso')
            return true;   
            }
            console.log('Não existe nenhum time com essa cor, atualização cancelada')
            return false;
           }
    return true;
    }
    console.log("Você não tem acesso, favor logar em uma conta")
}