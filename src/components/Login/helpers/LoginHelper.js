export const isUserAuthenticated = () => {
    if (localStorage.getItem("token")){
        return true;
    }
    return false;
}
 //Este código es una función de JavaScript
//que se exporta mediante export const y se llama 
//isUserAuthenticated. Su propósito es comprobar si el usuario ha 
//iniciado sesión en la aplicación.


//la función comprueba si hay un "token"
// almacenado en el localStorage del navegador. 
//Si existe un "token", la función devuelve true, 
//lo que indica que el usuario está autenticado. De lo contrario, 
//si no hay un "token" almacenado, la función devuelve false, 
//lo que indica que el usuario no está autenticado.


