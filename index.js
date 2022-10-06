
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
    console.log("SI EXISTEN PIZZAS DE MENOS DE $600");
    
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

const listaPizzasConIngredientes = () => {
    pizzas.forEach((pizza) => {
        console.log(`La Pizza ${pizza.nombre} tiene los siguientes ingredientes : ${pizza.ingredientes}`)
    })

}

listaPizzasConIngredientes()


