# CriptoText

Este é um exemplo simples de uma função de criptografia e descriptografia em JavaScript que usa números primos para codificar e decodificar mensagens. O código inclui uma interface HTML para facilitar o uso da função.

## Funções Principais

### `isPrime(num)`

Uma função que verifica se um número é primo. Ela é usada para gerar números primos aleatórios.

### `getPrimeInRange(min, max)`

Uma função que gera um número primo aleatório dentro de um intervalo especificado.

### `criptografarTexto(texto)`

Esta função criptografa um texto fornecido usando uma série de pares de números primos aleatórios. Ela retorna o texto criptografado e os pares de números primos utilizados.

### `descriptografarTexto(criptografado, paresPrimos)`

Esta função descriptografa um texto criptografado usando os pares de números primos fornecidos. Ela retorna o texto original.

## Interface HTML

O código inclui uma interface HTML básica para criptografar e descriptografar mensagens. Aqui está uma descrição das principais partes:

- Um campo de entrada de mensagem (`<input id="mensagem">`) onde você pode digitar a mensagem que deseja criptografar.

- Um campo de entrada para os pares de números primos gerados (`<input id="paresPrimos">`).

- Um campo de resultado onde a mensagem criptografada ou descriptografada será exibida.

- Um botão "Criptografar" que aciona a função `criptografar()` para criptografar a mensagem inserida.

- Um botão "Descriptografar" que aciona a função `descriptografar()` para descriptografar a mensagem criptografada inserida.

## Como Usar

1. Abra o programa em um navegador web.

2. Insira uma mensagem no campo de entrada "mensagem".

3. Clique no botão "Criptografar" para criptografar a mensagem. Os pares de números primos gerados e a mensagem criptografada serão exibidos nos campos correspondentes.

4. Copie a mensagem criptografada e cole-a no campo "mensagem".

5. Clique no botão "Descriptografar" para descriptografar a mensagem. A mensagem original será exibida no campo de resultado.

### Licença

    MIT License
