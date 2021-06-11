// JavaScript source code
let array = [], contador=0;
for (let bucle = 1; bucle < 31; bucle++){
    array[contador] = "";
    for (let bucle2 = 0; bucle2 < bucle; bucle2++) {
        array[contador] = array[contador]+""+bucle;
    }
    console.log(array[contador]);
    contador++;
}