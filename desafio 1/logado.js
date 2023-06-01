import { admistradores } from "./listaAdministradores.js";
import { logado } from "./index.js";

export default function logando (usuario, senha){

    if (usuario == admistradores.Usuario && senha == admistradores.Senha){
       let logado = 1;
        console.log("Login confirmado")
        return logado;
    }
    let logado = 0;
  console.log("Login ou senha incorretos")
   return logado;

}