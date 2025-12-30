function validacaoInputPeso(valor) {
  let msgPeso = document.querySelector(".msgPeso");
  let valorPeso = valor.value.replace(",", ".");
  let peso = Number(valorPeso);

  if (isNaN(peso) || peso <= 0){
      msgPeso.textContent = "Número inválido";
      return; 
    }

    if (peso > 650.999) {
      msgPeso.textContent = "Peso máximo: 650,999 Kg";
      peso = 650.999;
      return;
    }

      msgPeso.textContent = "";
      return peso;
}



function validacaoInputAltura(valor) {
  let msgAltura = document.querySelector(".msgAltura");
  let valorAltura = valor.value.replace(",", ".");
  let altura = Number(valorAltura);


   if (isNaN(altura) || altura <= 0){
      msgAltura.textContent = "Número inválido";
      return; 
    }

    if (altura > 3.99) {
      msgAltura.textContent = "Altura máximo: 3,99 m";
      altura = 3.99;
      return;
    }

       msgAltura.textContent = "";
        return altura;
}

function converterParaVirgula(numero) {

    return numero.toString().replace(".", ",");
}


function calcularIMC(peso, altura) {

   return peso / (altura * altura);

}

let texto = document.querySelector(".resultado");

let statusPeso = {
    pesoBaixo: {
        texto: "Você está abaixo do peso.",
    },
    pesoNormal: {
        texto: "Seu peso está normal.",
    },
    sobrepeso: {
        texto: "Você está com sobrepeso.",
    },
    obesidadeI: {
        texto: "Você está com obesidade grau I",
    },
    obesidadeII: {
        texto: "Você está com obesidade grau II.",
    },
    obesidadeIII: {
        texto: "Você está com obesidade grau III.",
    },
};

function definirStatusIMC(imc) {
    switch (true) {
        case imc < 18.5:
            return "pesoBaixo";
        case imc < 24.9:
            return "pesoNormal";
        case imc < 29.9:
            return "sobrepeso";
        case imc < 34.9:
            return "obesidadeI";
        case imc < 39.9:
            return "obesidadeII";
        default:
            return "obesidadeIII";
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();

    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    let pesoTrue = validacaoInputPeso(peso);
    let alturaTrue = validacaoInputAltura(altura);


    if (pesoTrue && alturaTrue) {
      let calculoIMC = calcularIMC(pesoTrue, alturaTrue);
      let categoriaPeso = definirStatusIMC(calculoIMC);
      let resultadoFinal = converterParaVirgula(calculoIMC.toFixed(2))

      texto.innerHTML = statusPeso[categoriaPeso].texto + `<br> Seu Índice de Massa Corporal (IMC) está em: ${resultadoFinal}`;
    }   
    

    
});