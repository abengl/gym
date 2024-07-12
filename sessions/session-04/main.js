const solutions = document.querySelectorAll("code");

/* Ejercicio 1
En matemáticas, la matriz traspuesta es aquella que surge como resultado de
realizar un cambio de columnas por filas y filas por columnas en la matriz original,
generándose una nueva matriz (a la que llamamos traspuesta)
Crear un solo prompt con ayuda de una herramienta de inteligencia artificial que
te permita replicar por completo la siguiente interfaz: https://stingy-brass-organ.glitch.me
*/
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

/* Ejercicio 2
Se tienen dos arreglos de números enteros, `a` y `b`, cada uno de longitud dos.
Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la
mayor suma. En caso de empate, devuelva el arreglo `a`.
*/
function biggerTwo(a, b) {
  const sumA = a.reduce((accumulator, element) => accumulator + element, 0);
  const sumB = b.reduce((accumulator, element) => accumulator + element, 0);
  return sumA >= sumB ? a : b;
}

/* Alternative Solution
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

/* Ejercicio 3
Tienes un billete de lotería rojo que muestra los enteros `a`, `b` y `c`, cada uno
de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10.
Si son todos iguales, el resultado es 5. Si `b` y `c` son diferentes de `a`, el
resultado es 1. Si no, el resultado es 0.
*/
function redTicket(a, b, c) {
  if (a === 2 && b === 2 && c === 2) return 10;
  else if (a === b && b === c) return 5;
  else if (a !== b && a !== c) return 1;
  else return 0;
}

/* Alternative Solution
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

/* Ejercicio 4
Dada una cadena de longitud impar, devuelva una cadena de longitud 3
desde su centro, por lo que "Candy" produce "and". La longitud de la
cadena será de al menos 3.
*/
function middleThree(str) {
  const middleIndex = Math.floor(str.length / 2);
  return str.slice(middleIndex - 1, middleIndex + 2);
}

/* Alternative Solution
function middleThree(str) {
    const middleIndex = Math.floor(str.length / 2);
    return str.substring(middleIndex - 1, middleIndex + 2);
}
*/
solutions[3].innerHTML = `
                          middleThree('Candy') → ${middleThree("Candy")}<br>
                          middleThree('and') → ${middleThree("and")}<br>
                          middleThree('solving') → ${middleThree("solving")}
                        `;

/* Ejercicio 5
Escribe una función que convierte un nombre en iniciales. Esta función toma
exactamente dos palabras con un espacio entre ellos.
La salida debe ser dos letras capitalizadas con un punto que las separa.
*/
function abbrevName(name) {
  let changed = name.toUpperCase().split(" ");
  return `${changed[0][0]}.${changed[1][0]}`;
}

/*Alternative solution
function abbrevName(name) {
  return name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('.');
}
 */
solutions[4].innerHTML = `abbrevName("Sam Harris") = ${abbrevName(
  "Sam Harris"
)}<br>abbrevName("david mendieta") = ${abbrevName(
  "david mendieta"
)}<br>abbrevName("P Favuzzi") = ${abbrevName("P Favuzzi")}`;

/* Ejercicio 6
El objetivo es crear una función que elimine el primer y último carácter del string.
La función tiene como parámetro un string 'str'. No tienes que preocuparte por
cadenas con menos de dos caracteres.
*/
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

/*Alternative solution 
function removeChar(str) {
  return str.slice(1, -1);
}
*/
solutions[5].innerHTML = `
removeChar('eloquent') = ${removeChar("eloquent")}<br>
(removeChar('country') = ${removeChar("country")}<br>
(removeChar('and') = ${removeChar("and")}
`;

/* Ejercicio 7
Escribe una función que reciba dos cadenas como parámetros e iteralas para
trasformar la cadena `source` y termine convertida en la cadena `target` el
resultado de cada iteración guardalo en un arreglo.
*/
function transform(source, target) {
  let result = [source];
  let sourceArray = source.split("");

  for (let i = 0; i < source.length; i++) {
    if (sourceArray[i] !== target[i]) {
      sourceArray[i] = target[i];
      result.push(sourceArray.join(""));
    }
  }
  return result;
}

solutions[6].innerHTML = `
transform('car','see') ➞ ${transform("car", "see")}<br>
transform('casa','buho') ➞ ${transform("casa", "buho")}<br>
transform('floor','brake') ➞ ${transform("floor", "brake")}<br>
transform('kata','math') ➞ ${transform("kata", "math")}
`;

/*Ejercicio 8 
Se le proporcionará un array de objetos que representan datos sobre los
desarrolladores que se han inscrito para asistir a la próxima reunión.
Dado el siguiente array de entrada. Escribe una función que:
1. Agregue la propiedad `question` a cada objeto del array de entrada donde el
  desarrollador no ha proporcionado los detalles relevantes (aquellas propiedades
  en las que el valor es `null` ). El valor de la propiedad `question` debe ser el
  siguiente string:

    Hi, could you please provide your `<property name>`.

2. La función debe retornar sólo los desarrolladores con detalles faltantes:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
*/

function askForMissingDetails(list) {
  return list.filter((element) => {
    for (let key in element) {
      if (!element[key]) {
        element.question = `Hi, could you please provide your ${key}`;
        return true;
      }
    }
  });
}

let list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

solutions[7].innerHTML = `
let list 1 = ${JSON.stringify(list1)}<br><br>
askForMissingDetails(list1) = ${JSON.stringify(askForMissingDetails(list1))}
`;

/*Ejercicio 9 
Queremos hacer un paquete de meta kilos de chocolate.
Tenemos barras pequeñas (1 kilo cada una) y barras
grandes (5 kilos cada una). Devuelve el número de
barras pequeñas a utilizar, suponiendo que siempre
utilizamos las barras grandes antes que las pequeñas.
Devuelve -1 si no se puede hacer.
*/

function makeChocolate(small, big, goal) {
  // Determinar el máximo número de barras grandes que podemos usar sin exceder el objetivo
  let maxBigBars = Math.min(Math.floor(goal / 5), big);
  
  // Calcular el peso total cubierto por las barras grandes
  let bigWeight = maxBigBars * 5;
  
  // Calcular el peso restante que necesitamos cubrir con las barras pequeñas
  let remainingWeight = goal - bigWeight;
  
  // Verificar si tenemos suficientes barras pequeñas para cubrir el peso restante
  if (remainingWeight <= small) {
    return remainingWeight;
  } else {
    return -1;
  }
}

solutions[8].innerHTML = `
makeChocolate(4, 1, 9) → ${makeChocolate(4, 1, 9)}<br>
makeChocolate(4, 1, 10) → ${makeChocolate(4, 1, 10)}<br>
makeChocolate(4, 1, 7) → ${makeChocolate(4, 1, 7)}
`;