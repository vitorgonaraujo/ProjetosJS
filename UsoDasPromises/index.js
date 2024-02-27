const altura = 0;
const peso = 0;

function calculaIMC(altura, peso) {
  return new Promise((resolve, reject) => {
    console.log("Calculando IMC...");
    setTimeout(() => {
      // aceita números em formato de String
      if (isNaN(altura) || isNaN(peso)) {
        // typeof altura !== 'number' || typeof peso !== 'number'
        reject(console.log("Altura e Peso devem ser números."));
      } else {
        const IMC = peso / Math.pow(altura, 2);
        resolve(IMC.toFixed(1));
      }
    }, 1000 * 2);
  });
}

function comparaIMC(IMC) {
         if (IMC <= 16.9) {
    return "Muito abaixo do peso ideal";
  } else if (IMC >= 17 && IMC <= 18.4) {
    return "Abaixo do peso ideal";
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    return "Peso ideal";
  } else if (IMC >= 25 && IMC <= 29.9) {
    return "Acima do peso ideal";
  } else if (IMC >= 30 && IMC <= 34.9) {
    return "Obesidade grau I";
  } else if (IMC >= 35 && IMC <= 40) {
    return "Obesidade grau II";
  } else if (IMC > 40) {
    return "Obesidade grau III";
  }
}

function IMCresult(altura, peso) {
  calculaIMC(altura, peso)
    .then((result) => {
      console.log(`${comparaIMC(result)}\nIMC: ${result}`);
    })
    .catch((err) => {
      console.log(`Erro: ${err}`);
    })
    .finally(() => {
      console.log("Cálculo de IMC finalizado!");
    });

  const dataAtual = new Date();

  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();

  console.log(`Data Atual: ${dia}/${mes}/${ano}`);
}

IMCresult(1, 2);

// calculaIMC(1, 2)
//   .then((result) => {
//     console.log(`${comparaIMC(result)}\nIMC: ${result}`);
//   })
//   .catch((err) => {
//     console.log(`Erro: ${err}`);
//   })
//   .finally(() => {
//     console.log("Cálculo de IMC finalizado!");
//   });
