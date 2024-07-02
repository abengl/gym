const solutions = document.querySelectorAll("code");

solutions[0].innerHTML = `Como desarrollador web, crea la estructura básica HTML para una web
          que calcule la matriz transpuesta de los inputs ingresados por el
          usuario. Sigue este esquema:<br />
          -título de la web: "Ingresa los valores de la matriz de 2x2:"<br />
          -4 elementos labels, seguidos de sus input de tipo number, ambos en
          una misma fila:<br />
          Label 1: "Valor en la posición (0,0):"<br />
          Label 2: "Valor en la posición (0,1):"<br />
          Label 3: "Valor en la posición (1,0):"<br />
          Label 4: "Valor en la posición (1,1):"<br />
          -botón para calcular: "Calcular Transpuesta"<br />
          -Título para el resultado: "Resultado (Transpuesta de la matriz
          ingresada):"<br />
          -Resultado: un array con los valores transpuestos, ejemplo: [5,1,
          2,3].<br /><br />
          <strong
            >URL web creada:
            gym/exercises/ia-transpose-matrix/index.html</strong
          >`;

function biggerTwo(a, b) {
  const sumA = a.reduce((accumulator, element) => accumulator + element, 0);
  const sumB = b.reduce((accumulator, element) => accumulator + element, 0);
  return sumA >= sumB ? a : b;
}

/*
function biggerTwo(a, b) {
    // Calculate sums of arrays a and b
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];
    
    // Return array a if sumA is greater than or equal to sumB, otherwise return array b
    return sumA >= sumB ? a : b;
}

*/
solutions[1].innerHTML = `
                        biggerTwo([1, 2], [3, 4]) → ${biggerTwo(
                          [1, 2],
                          [3, 4]
                        )}<br>
                        biggerTwo([3, 4], [1, 2]) → ${biggerTwo(
                          [3, 4],
                          [1, 2]
                        )}<br>
                        biggerTwo([1, 1], [1, 2]) → ${biggerTwo([1, 1], [1, 2])}
                        `;

function redTicket(a, b, c) {
  if (a === 2 && b === 2 && c === 2) return 10;
  else if (a === b && b === c) return 5;
  else if (a !== b && a !== c) return 1;
  else return 0;
}

/*
function redTicket(a, b, c) {
    return (a === 2 && b === 2 && c === 2) ? 10 :
           (a === b && b === c) ? 5 :
           (a !== b && a !== c) ? 1 :
           0;
}
*/

solutions[2].innerHTML = `
                        redTicket(2, 2, 2) → ${redTicket(2, 2, 2)}<br>
                        redTicket(2, 2, 1) → ${redTicket(2, 2, 1)}<br>
                        redTicket(0, 0, 0) → ${redTicket(0, 0, 0)}
                        `;

/*Dada una cadena de longitud impar, devuelva una cadena de longitud 3
desde su centro, por lo que "Candy" produce "and". La longitud de la
cadena será de al menos 3. */
function middleThree(str){
  const middleIndex = Math.floor((str.length) / 2);
  return str.slice(middleIndex - 1, middleIndex + 2);
}

/*
function middleThree(str) {
    const middleIndex = Math.floor(str.length / 2);
    return str.substring(middleIndex - 1, middleIndex + 2);
}
*/
solutions[3].innerHTML = `
middleThree('Candy') → ${middleThree('Candy')}<br>
middleThree('and') → ${middleThree('and')}<br>
middleThree('solving') → ${middleThree('solving')}
`;
