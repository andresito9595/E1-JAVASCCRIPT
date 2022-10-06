/* 
const array = [ "hombre", "mujer", 'adan', 'eva', 'gomez', 'andres','calamardo', 'almorzar']


const palabrasConJ = () => {
    
    let newArrayConJ = [];

array.forEach((palabra) => {
    if (palabra.toLowerCase().includes('a'))
    {
        newArrayConJ.push(palabra)
    }
}

)
console.log(newArrayConJ);
    
}

palabrasConJ() */

/* 
const arrayNumero = [0,2,3,5,7,9,12,10,15,16,47,34]

const multiplicarMayoresA = (a, b, array) => {
    let newArray = [];
    array.forEach(number => {
        if (number > a) { 
           
           return newArray.push(number * b)
        } 
        newArray.push(number)

    })
console.log(newArray);
return newArray}






multiplicarMayoresA(9,10,arrayNumero) */


/* const arrayNumero = [0,2,3,5,7,9,12,10,15,16,47,34,80,90]

const existeNumero = (array, limite) => 
 array.some((numero) => numero > limite)
    ? array.find((numero) => numero > limite)
     : "NO HAY NUMERO MAYORES AL DADO"

 






console.log(existeNumero(arrayNumero, 100)) 

 */

/* const masDe4Letras = (array) => {


   let palabraMasDe4Letras = array.forEach(element => {
   if(element.find((e) => e.lenght >= 4)){
   return console.log(palabraMasDe4Letras)}
   else {console.log('no hay palabras con mas de 4 letras');}
    

   });


}


const arrayPalabras = [ "gas","hombre", "mujer", 'adan', 'eva', 'gomez', 'andres','calamardo', 'almorzar',"moz"]


masDe4Letras(arrayPalabras);







 */



const pizzas = [
    {
        id: 1 ,
        nombre: 'Comun',
        ingredientes: ['Salsa de tomate', 'Muzza','Oregano' ],
        precio: 200 ,


},
{
    id: 2 ,
    nombre: 'Especial',
    ingredientes: ['Salsa de tomate', 'Muzza','Oregano, Jamon, Huevo, Morron' ],
    precio: 350 ,


},
{
    id: 3 ,
    nombre: 'Napolitana',
    ingredientes: ['Salsa de tomate', 'Muzza','Oregano','Tomate en Rodajas','Ajo' ],
    precio: 500 ,


},
{
    id: 4 ,
    nombre: 'Fugazza',
    ingredientes: ['Cebolla blanca','Cebolla morada', 'Muzza','Oregano', 'Oliva' ],
    precio: 600 ,


},
{
    id: 5 ,
    nombre: '4 Quesos',
    ingredientes: ['Salsa de tomate', 'Muzza','Provolone','Roquefort','Parmesano','Oregano', 'Oliva' ],
    precio: 700 ,


},
{
    id: 6 ,
    nombre: 'Panceta y Cheddas',
    ingredientes: ['Salsa de tomate', 'Cheedar','Panceta', 'Oregano', 'Ketchupt','Barbacoa' ],
    precio: 800 ,


},
]

/* a)  Las pizzas que tengan un id impar. */


const pizzasIdImpar = () => {
    pizzas.forEach(element => {
    if(element.id % 2 == 1) {
       return console.log(`Pizza Con Id Impar : ${element.nombre}`)
    }
})};

pizzasIdImpar()

/* b) ¿Hay alguna pizza que valga menos de $600? */


const existenPizzasMenos600 = pizzas.some((element) => element.id <= 600 )

const pizzasQueValenMenosDe600 = () => {
if (existenPizzasMenos600) {
    console.log("EXISTEN PIZZAS DE MENOS DE $600");
    
        } 
        
        
    } 
  

pizzasQueValenMenosDe600();


/* c) El nombre de cada pizza con su respectivo precio. */


const listaPizzas = pizzas.forEach(element => {
    
    return console.log(`La Pizza ${element.nombre} tiene un valor de $ ${element.precio}`)})


/* d) Todos los ingredientes de cada pizza (En cada iteración imprimir 
    los ingredientes de la pizza actual). Ayuda: van a tener que realizar
     dos recorridos, ya que cada pizza del array de 
     pizzas tiene un array de ingredientes.
 */
