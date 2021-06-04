// JavaScript source code
let continuar, Cadena, CadenaFinal = undefined;
do {
    continuar = confirm("Desea ingresar texto?");
    if (continuar) {
        Cadena = window.prompt("Ingrese Texto");
        if (Cadena <= 0 || Cadena > 0 || Cadena == NaN || Cadena == undefined || Cadena == "") {
            alert("Ingresaste numero/valor invalido o cancelo la accion, ingrese texto en futuros intentos");
            Cadena = "";
        }
        else {
            if (CadenaFinal == undefined) { CadenaFinal = Cadena; }
            else { CadenaFinal = CadenaFinal + " - " + Cadena; }
        }
    }
} while (continuar);
if (Cadena != undefined || CadenaFinal != undefined) {
    alert(CadenaFinal);
}
