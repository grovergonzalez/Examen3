function CalculaCambio(a, b) {
    return b - a;
}

function verificarDatos(a, b){
    if(a!= "" & b!="")
    {
        CalculaCambio(a, b);
    }
}

export {CalculaCambio, verificarDatos};
  