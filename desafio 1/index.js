import apagarJogador from "./apagarJogador.js";
import acharTime from "./listaPorTime.js";
import novoJogador from "./adicionarJogador.js";
import atualizarJogador from "./atualizarJogador.js";
import logando from "./logado.js";
import { jogadores } from "./listaJogadores.js";
import { admistradores } from "./listaAdministradores.js";

export let logado = 0;


// lista inicial de jogadores

console.log(jogadores)

logado = logando("ahoy","ahoy123")

novoJogador("Jockos", "Verde")
novoJogador("Jockos", "Azul")
acharTime("Azul")
apagarJogador("Zeca");
atualizarJogador("Jockos", "Vermelho")

console.log(jogadores)

console.log(admistradores)

console.log(logado)