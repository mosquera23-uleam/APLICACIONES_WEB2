import { ICocinero, IReceta, IPreparacion } from './interfaces';

// Función para eliminar un elemento del arreglo por ID y mostrar el elemento eliminado
export function eliminarElemento<T extends { ID: number }>(arreglo: T[], id: number): T | null {
  const indice = arreglo.findIndex(elemento => elemento.ID === id);
  if (indice !== -1) {
    return arreglo.splice(indice, 1)[0];
  } else {
    console.log("Elemento no encontrado");
    return null;
  }
}

// Callback para mostrar el elemento eliminado por consola
export function mostrarElementoEliminado<T>(elementoEliminado: T | null): void {
  if (elementoEliminado !== null) {
    console.log("Elemento eliminado:");
    console.log(elementoEliminado);
  }
}
