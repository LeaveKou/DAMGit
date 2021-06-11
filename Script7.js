// JavaScript source code
let resto,copiador,bucle;
for (bucle = 1; bucle < 101; bucle++) {
    copiador = bucle;
    resto = copiador % 4;
    if (resto == 0) { copiador = copiador + " Es  multiplo de 4. " }
    resto = copiador % 9;
    if (resto == 0) { copiador = copiador + " Es  multiplo de 9. " }
    console.log(copiador);
    resto = bucle % 5;
    if (resto == 0) { console.log("---------------------" + "\n")}
    
    console.log("\n");
}