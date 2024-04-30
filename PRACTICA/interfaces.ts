// Definición de interfaces
export interface ICocinero {
    ID: number;
    Nombre: string;
    SueldoBasico: number;
  }
  
  export interface IReceta {
    ID: number;
    NombrePlato: string;
    Ingredientes: string[];
    Cantidades: number[];
  }
  
  export interface IPreparacion {
    ID: number;
    IDMesero: number;
    IDReceta: number;
    Fecha: string;
    Hora: string;
    CantidadProductos: number;
    Costo: number;
    TiempoEstimado: number;
  }


  // Definir la interfaz para la respuesta del servicio REST
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Hacer la solicitud Fetch y validar la respuesta
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json() as Promise<Post[]>;
  })
  .then(data => {
    console.log("Respuesta del servicio:");
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  
  