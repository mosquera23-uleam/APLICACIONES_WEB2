import { Icocineros, Irecetas, Ipreparaciones } from './data';
import { ICocinero, IReceta, IPreparacion } from './interfaces';
import { eliminarElemento, mostrarElementoEliminado } from './funciones';

// Prueba de la función eliminarElemento
const elementoEliminado = eliminarElemento(recetas, 2);
mostrarElementoEliminado(elementoEliminado);
console.log("Recetas actualizadas:");
console.log(recetas);




