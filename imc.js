const calcular = document.getElementById("calcular");

function imc() {
  const resultado = document.getElementById("resultado");
  const resposta = document.getElementById("resposta");
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  
  if (altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura*altura)).toFixed(2);
    let classificacao = '';

    if (valorIMC <= 16.9) {
      classificacao = 'Muito abaixo do peso'
    } else if (valorIMC <= 18.4) {
      classificacao = 'Abaixo do peso'

    } else if (valorIMC <= 24.9) {
      classificacao = 'Peso normal'

    }else if (valorIMC <= 29.9) {
      classificacao = 'Acima do Peso'

    }else if (valorIMC <= 34.9) {
      classificacao = 'Obesidade Grau I'

    }else if (valorIMC <= 40) {
      classificacao = 'Obesidade Grau II'

    }else {
      classificacao = 'Obesidade Grau III'

    }
    resultado.textContent = (valorIMC)
    resposta.textContent = (classificacao)
  }else {
    resultado.textContent = 'Preencha todos os campos'
    resposta.textContent = 'Preencha todos os campos'
  }
}

calcular.addEventListener("click", imc);
