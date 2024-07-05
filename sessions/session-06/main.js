const codeElements = document.querySelectorAll("code");

/*E1
Hay páginas web que destacan por su diseño. Para lograrlo, se utilizan diferentes
herramientas visuales, las cuales ayudan a generar páginas más dinámicas.
La animación web es la encargada de los elementos que están en movimiento.
Escribe los prompts necesarios para crear un corazón animado.
*/
codeElements[0].innerText =
  "¡Hola! Necesito tu ayuda. Por favor, como desarrollador, crea un archivo HTML que utilice un <div> y CSS para crear la imagen de un corazón. Primero crea un cuadrado rojo. Luego, utilizando pseudo-selectores ::before y ::after, compleméntalo para formar los lóbulos del corazón. Estos lóbulos deben ubicarse sobre le cuadrado (top) y al lado derecho del cuadrado (left). El corazón resultante debe tener una animación que simule latir ni muy rápido ni muy lento. Por favor, deja un espacio para que la imagen se ubique con un margen del borde del documento de 150px. La página no tiene fondo. Retorna solo un index.html con los estilos.";
const imgElement = document.createElement("img");
imgElement.classList.add("heart");
imgElement.src = "./heart.png";
imgElement.alt = "heart icon";
codeElements[0].insertAdjacentElement("afterend", imgElement);

/*E2
Dado dos arreglos de enteros, cada uno con longitud 2, retornar un nuevo
arreglo, con longitud 4, conteniendo todos los elementos
de arreglos iniciales.
*/
function plusTwo(a, b) {
  return a.concat(b);
}
codeElements[1].innerHTML = `
plusTwo([1, 2], [3, 4]) = ${plusTwo([1, 2], [3, 4])}<br>
plusTwo([4, 4], [2, 2]) = ${plusTwo([4, 4], [2, 2])}<br>
plusTwo([9, 2], [3, 4]) = ${plusTwo([9, 2], [3, 4])}
`;

/*E3 
Creemos un sistema de emparejamiento que ayude a descubrir trabajos para desarrolladores en función de una serie de factores. Crearemos una función de coincidencia que toma un candidato y un trabajo, que devolverá un valor booleano que indica si el trabajo es una coincidencia válida para el candidato.
Un candidato tendrá un salario mínimo, por lo que se verá así:
let candidato = {
 minSalario: 120000
}
Un trabajo tendrá un salario máximo, por lo que quedará así:
let trabajo = {
 maxSalario: 140000
}
Si el salario mínimo del candidato o el salario máximo del trabajo no están presentes, arroja un error.
Para una coincidencia válida, el salario mínimo del candidato debe ser menor o igual al salario máximo del puesto. Sin embargo, incluyamos también un margen de maniobra del 10% (deducido del salario mínimo del candidato) en caso de que el candidato sea una estrella de rock que disfruta programando en Codewars en su tiempo libre. Es posible que la empresa que ofrece el trabajo pueda llegar a un acuerdo.
*/
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("Candidate or Job nor especified.");
  }
  return candidate.minSalary * 0.9 <= job.maxSalary;
}
let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

codeElements[2].innerHTML = `
candidate1 = { minSalary: 120000 },<br>
job1 = { maxSalary: 130000 },<br>
job2 = { maxSalary: 80000 };<br>
match(candidate1, job1) = ${match(candidate1, job1)}.<br>
match(candidate1, job2) = ${match(candidate1, job2)}.
`;

/*E4
Implementa una función que dado un arreglo de palabras devuelve una cadena con
las palabras separadas con comas.  
La última palabra debería estar separada por la palabra 'and' en lugar de
una coma.
El método recibe un array de cadenas y devuelve solo una cadena formateada.
*/
function formatWords(words) {
  //Para casos de null o []
  if (!words || words.length == 0) return "";
  //Eliminando los elementos vacíos ""
  words = words.filter((word) => word);
  //Si quedó un array vacío
  if (words.length == 0) return "";
  if (words.length == 1) return words;
  //Colocar comas y "and"
  return `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}
/*
Alternative Solution 
function formatWords(words) {
    if (!words || !words.length) return "";
    words = words.filter((word) => word);
    if (!words.length) return "";
    return (words.length == 1) ? words[0] : `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}
*/

codeElements[3].innerHTML = `
formatWords(['one', 'two', 'three', 'four']) = ${formatWords([
  "one",
  "two",
  "three",
  "four",
])}<br>
formatWords(['one']) = ${formatWords(["one"])}<br>
formatWords(['', '', 'three']) = ${formatWords(["", "", "three"])}<br>
formatWords(['one', '', 'three']) = ${formatWords(["one", "", "three"])}<br>
formatWords([]) = ${formatWords([])}<br>
formatWords(null) = ${formatWords(null)}<br>
formatWords(['']) = ${formatWords([""])}
`;

/*E5 
Tu objetivo en este ejercicio es implementar una función de diferencia, la cual
resta el contenido de un arreglo de otro y devuelve el resultado.
Recuerda que debes eliminar todos los valores del arreglo `a`, que estén presentes
en el arreglo `b` manteniendo el orden.
*/
function arrayDiff(a, b) {
  if (!a.length || !b.length) return a;
  let i = 0;
  while (i < b.length) {
    a = a.filter((element) => element !== b[i]);
    i++;
  }
  return a;
}

/*Alternative Solution 
function arrayDiff(a, b) {
    //if element is not included in b
    return a.filter(element => !b.includes(element));
}
*/

codeElements[4].innerHTML = `
arrayDiff([1,2,2], [1]) = ${arrayDiff([1, 2, 2], [1])}<br>
arrayDiff([1,2,2], [2]) = ${arrayDiff([1, 2, 2], [2])}<br>
arrayDiff([1,2,2], [] = ${arrayDiff([1, 2, 2], [])}<br>
arrayDiff([], [1,2]) = ${arrayDiff([], [1, 2])}
`;
