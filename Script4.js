// JavaScript source code
let continuar, numeros = undefined, Total = undefined, LetraDni;
do {
    continuar = confirm("Desea obtener la letra de su DNI?");
    if (continuar) {
        numeros = window.prompt("Ingrese su DNI");
        if (numeros >= 0 && numeros != "" && numeros < 100000000) {
            total = numeros % 23;
            if (total == 0) { LetraDni = "T" } if (total == 12) { LetraDni = "N" }
            if (total == 1) { LetraDni = "R" } if (total == 13) { LetraDni = "J" }
            if (total == 2) { LetraDni = "W" } if (total == 14) { LetraDni = "Z" }
            if (total == 3) { LetraDni = "A" } if (total == 15) { LetraDni = "S" }
            if (total == 4) { LetraDni = "G" } if (total == 16) { LetraDni = "Q" }
            if (total == 5) { LetraDni = "M" } if (total == 17) { LetraDni = "V" }
            if (total == 6) { LetraDni = "Y" } if (total == 18) { LetraDni = "H" }
            if (total == 7) { LetraDni = "F" } if (total == 19) { LetraDni = "L" }
            if (total == 8) { LetraDni = "P" } if (total == 20) { LetraDni = "C" }
            if (total == 9) { LetraDni = "D" } if (total == 21) { LetraDni = "K" }
            if (total == 10) {LetraDni = "X" } if (total == 22) { LetraDni = "E" }
            if (total == 11) {LetraDni = "B" }
            alert(" Su letra de DNI es " + LetraDni);
        }
        else {
            alert("Ingresaste texto/valor mayor a 99999999 o cancelo la accion, ingrese numeros entre 0 y 99999999 en futuros intentos");
            numeros = undefined;
        }
    }
} while (continuar);
if (numeros != undefined && Total != undefined) {
    alert(Total);
}