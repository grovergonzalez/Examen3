function CalculaCambio(a, b) {
    const cambio = b-a;
    return cambio;
}

function verificarDatos(a, b){
    if(a!= "" & b!="")
    {
        CalculaCambio(a, b);
    }
}

var cortes = [0.2, 0.5, 1, 2, 5];

function desfragmentarCambio(a, b){
    const cambio = CalculaCambio(a,b);
    return cambio;
}

export {CalculaCambio, verificarDatos, desfragmentarCambio};
  