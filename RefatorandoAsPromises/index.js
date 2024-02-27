const altura = 0;
const peso = 0;

async function calculaIMC(altura, peso) {
  setTimeout(() => {
    if (typeof altura !== "number" || typeof peso !== "number") {
      return Promise.reject("Altura e Peso devem ser números.");
    }
    const IMC = peso / Math.pow(altura, 2);
    return IMC.toFixed(1);
  }),
    2 * 1000;
}

async function comparaIMC(IMC) {
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

async function IMCresult(altura, peso) {
  try {
    const result = await calculaIMC(altura, peso);

    console.log(`${comparaIMC(result)}\nIMC: ${result}`);
  } catch (error) {
    console.log(`Erro: ${err}`);
  }

  const dataAtual = new Date();

  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();

  console.log(`Data Atual: ${dia}/${mes}/${ano}`);
}
IMCresult(1, 2);
