import { jogadores } from "./listaJogadores.js";
import { logado } from "./index.js";

//achar lista de jogadores de um certo time
export default function acharTime (corTime){
    if (logado == 1){
    let acharJogador = jogadores.filter(jogadorAchado => jogadorAchado.Time === corTime);
    console.log(acharJogador)
    }
    console.log("Você não tem acesso, favor logar em uma conta")
}