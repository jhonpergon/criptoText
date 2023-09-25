// Função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Função para obter um número primo aleatório dentro de um intervalo
function getPrimeInRange(min, max) {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (!isPrime(num));
  return num;
}

// Função para criptografar um texto
function criptografarTexto(texto) {
  const caracteres = Array.from(texto);
  const paresPrimos = [];
  const textoCriptografado = [];

  for (let i = 0; i < caracteres.length; i++) {
    const char = caracteres[i];
    const charCode = char.charCodeAt(0);
    const prime1 = getPrimeInRange(2, 1000); // Gere primos aleatórios dentro do intervalo desejado
    const prime2 = getPrimeInRange(1001, 2000);
    const valorCriptografado = charCode * prime1 * prime2;
    paresPrimos.push([prime1, prime2]);
    textoCriptografado.push(valorCriptografado);
  }

  return { textoCriptografado, paresPrimos };
}

// Função para descriptografar um texto usando a chave
function descriptografarTexto(criptografado, paresPrimos) {
  const textoDescriptografado = [];

  for (let i = 0; i < criptografado.length; i++) {
    const [prime1, prime2] = paresPrimos[i];
    const valorDescriptografado = criptografado[i] / (prime1 * prime2);
    const charDescriptografado = String.fromCharCode(valorDescriptografado);
    textoDescriptografado.push(charDescriptografado);
  }

  return textoDescriptografado.join("");
}

	  let mensagem = document.getElementById("mensagem");
    let primos = document.getElementById("paresPrimos");
    let resultado = document.getElementById("resultado");

    mensagem.value = ``;
    primos.value = ``;
    resultado.value = ``;

	function criptografar() {
      const { textoCriptografado, paresPrimos } = criptografarTexto(mensagem.value);
      //mensagem.value = `${textoCriptografado.join(", ")}`;
      primos.value = `${JSON.stringify(paresPrimos)}`;
      resultado.value = `${textoCriptografado.join(", ")}`;
    }
    function descriptografar() {
      const mensagemCriptografada = document.getElementById("mensagem").value.split(", ");
      const textoDescriptografado = descriptografarTexto(
        mensagemCriptografada.map(Number),
        JSON.parse(document.getElementById("paresPrimos").value)
      );
      //mensagem.value = ``;
      //primos.value = ``;
      resultado.value = `${textoDescriptografado}`;
    }