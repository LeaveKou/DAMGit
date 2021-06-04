// JavaScript source code
let continuar, Numeros, Total = undefined;
do {
    continuar = confirm("Desea ingresar un numero");
    if (continuar) {
        Numeros = window.prompt("Ingrese Numero");
        if (Numeros <= 0 && Numeros != "" || Numeros > 0 && Numeros != "") {
            Total = Total + Numeros;
        }
        else {
            alert("Ingresaste texto/valor invalido o cancelo la accion, ingrese numeros en futuros intentos");
            Numeros = "";
        }
    }
} while (continuar);
if (Numeros != undefined && Total != undefined) {
    alert(Total);
}