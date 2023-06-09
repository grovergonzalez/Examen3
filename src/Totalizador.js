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
    var cambioMonedas = [];
    for(let i=0; i<cortes.length; i++)
    {
        if(cambio % cortes[i] == 0){
            cambioMonedas = [i];
        }
    }
    return cambioMonedas;
}

export {CalculaCambio, verificarDatos, desfragmentarCambio, cortes};
  