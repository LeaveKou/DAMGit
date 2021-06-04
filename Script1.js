// JavaScript source code
let Nota = window.prompt("Ingrese su nota (0-10)");
if (Nota > 10 || Nota < 0 || Nota == NaN) {
    alert("Ingreso un dato erroneo");
}
else {
    if (Nota < 3 && Nota > -1) { alert("Muy Deficiente"); }
    if (Nota < 5 && Nota > 2) { alert("Insuficiente"); }
    if (Nota < 7 && Nota > 4) { alert("Suficiente"); }
    if (Nota < 8 && Nota > 6) { alert("Bien"); }
    if (Nota < 9 && Nota > 7) { alert("Notable"); }
    if (Nota < 11 && Nota > 8) { alert("Sobresaliente"); }
}