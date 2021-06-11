// JavaScript source code
let tamanio = window.prompt("Introduzca el tamaño de la piramide"), array = [];
let contador = tamanio - 1;
if (tamanio > 0 && tamanio != "" && tamanio != NaN) {
    for (let bucle = tamanio; bucle >= 1; bucle--) {
        array[contador] = "";
        for (let bucle2 = bucle; bucle2 >= 1; bucle2--) {
            array[contador] = array[contador] + "" + bucle;
        }
        console.log(array[contador])
        contador--;
    }
}