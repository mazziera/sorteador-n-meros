const sortear = document.querySelector('.botao-sortear');
const inputResultado = document.querySelector('.campo-resultado');

sortear.addEventListener('click' , function(){
    const minimo = Math.ceil(document.querySelector('.minimo').value);
    const maximo = Math.floor(document.querySelector('.maximo').value);
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    inputResultado.style.visibility = "visible";
    inputResultado.innerHTML = resultado;

});

/*

Vamos decompor a expressão:

- `Math.random()`: Esta função em JavaScript retorna um número pseudoaleatório no intervalo [0, 1), ou seja, entre 0 (inclusivo) e 1 (exclusivo).

- `(maximo - minimo + 1)`: Aqui, `maximo - minimo` calcula o tamanho do intervalo desejado. Adicionando 1 a essa diferença (`+ 1`) garante que o intervalo seja inclusivo do número máximo. Por exemplo, se o intervalo desejado for de 5 a 10, a diferença é 5 (10 - 5), mas ao adicionar 1, obtemos 6, o que garante que o intervalo inclua o número máximo (10) no cálculo.

- `Math.random() * (maximo - minimo + 1)`: Multiplicar o resultado de `Math.random()` pelo tamanho do intervalo desejado cria um número dentro do intervalo [0, tamanho do intervalo), ou seja, entre 0 (inclusivo) e o tamanho do intervalo (exclusivo).

- `Math.floor(Math.random() * (maximo - minimo + 1))`: A função `Math.floor()` arredonda o número resultante para baixo, transformando-o em um número inteiro dentro do intervalo desejado [0, tamanho do intervalo - 1]. Isso é importante para que o número gerado seja um inteiro.

- `Math.floor(Math.random() * (maximo - minimo + 1)) + minimo`: Finalmente, adicionando `minimo` ao resultado, você ajusta o intervalo gerado para começar a partir do valor `minimo`. Por exemplo, se `minimo` for 5, o resultado anterior (um número entre 0 e o tamanho do intervalo - 1) é deslocado para o intervalo desejado começando em 5. Assim, se o número gerado anteriormente fosse 0, somando 5 resultaria em 5; se fosse 1, somando 5 resultaria em 6, e assim por diante.

Em resumo, essa expressão realiza cálculos para gerar um número aleatório inteiro dentro de um intervalo definido pelos valores de `minimo` e `maximo`, incluindo ambos os extremos.
*/