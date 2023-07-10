class Nodo {
    constructor(valor, izquierda=null, derecha=null) {
      this.valor = valor;
      this.izquierda = izquierda;
      this.derecha = derecha;
    }

    toString(){
      return JSON.stringify(this);
    }
}
  
class ArbolBinario {
  constructor(root) {
    this.root = new Nodo(root);
  }

  nuevoNodo(valor){
    let nodo= new Nodo(valor);
    //Ya existe una raíz por lo que se inicia la comparación en cascada
    let ultimoNodo=this.root;
    //Obtenemod el último nodo
    while(ultimoNodo){
      if(ultimoNodo.valor>=nodo.valor){
        if(ultimoNodo.izquierda==null){
          ultimoNodo.izquierda=nodo;
          break;
        }else{
          ultimoNodo=ultimoNodo.izquierda;
        }
      }else{
        if(ultimoNodo.derecha==null){
          ultimoNodo.derecha=nodo;
          break;
        }else{
          ultimoNodo=ultimoNodo.derecha;
        }
      }
      
      
    }
  }

  toString(){
    return JSON.stringify(this);

  }
}
  
  arbol = new ArbolBinario(8);
  arbol.nuevoNodo(3);
  arbol.nuevoNodo(6);
  arbol.nuevoNodo(9);
  arbol.nuevoNodo(12);
  arbol.nuevoNodo(15);
  
  arbol2 = new ArbolBinario(8);
  arbol2.nuevoNodo(3);
  arbol2.nuevoNodo(6);
  arbol2.nuevoNodo(9);
  arbol2.nuevoNodo(12);
  arbol2.nuevoNodo(15);


//1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
////FUNCIÓN PARA COMPARAR 
function comparar(nodo1, nodo2){
  let x=nodo1;
  let y=nodo2;
  //Si ambos nodos son vacíos se devuelve verdadero
  if(x==null && y==null){
    return 1;
  }

  //Si los nodos no están vacíos nos vamos a los nodos izquierdo y derecho
   return (x && y) && (x.valor == y.valor) && comparar(x.izquierda, y.izquierda) && comparar(x.derecha, y.derecha);
   //NO SON NULOS && TIENEN EL MISMO VALOR && RECURSIVIDAD
   //regresa TRUE OR FALSE
}

//2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
///FUNCIONES PARA RECORRER UN ÁRBOL Y COPIARLO
function copiar(arbolBase){
  arbolCopia = new ArbolBinario(arbolBase.root.valor);
  recorridoCopiar(arbolCopia.root, arbolBase.root);
     
  console.log("SE HA CREADO UN NUEVO ÁRBOL A PARTIR DE OTRO");
  console.log(arbolCopia);
}

function recorridoCopiar(nodo, nodoBase){
  if(nodoBase.izquierda){
    nodo.izquierda=nodoBase.izquierda;   
    recorridoCopiar(nodo.izquierda, nodoBase.izquierda);
  }
  if(nodoBase.derecha){
    nodo.derecha=nodoBase.derecha;   
    recorridoCopiar(nodo.derecha, nodoBase.derecha);
  }

}

///3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
//Se toma como base el arbol original
function nivel(nodoBase, nivelBuscar, n=1){  
  let nivelNodos=n;
  let busqueda=nivelBuscar;
  while(nivelNodos<=busqueda){
    if(busqueda==nivelNodos && nodoBase){
      return nodoBase;
    }else{
      return nivel(nodoBase.izquierda, busqueda, nivelNodos+1) + nivel(nodoBase.derecha, busqueda, nivelNodos+1);
    }


  }
  
  
}


///////////////////////////////PRUEBAS////////////////////////////////////////////

////COMPARAR DOS ÁRBOLES BINARIOS
if(comparar(arbol.root, arbol2.root)){
  console.log("ARBOL 1 y ARBOL 2 SON IGUALES");
}else{
  console.log("ARBOL 1 y ARBOL 2 NO SON IGUALES");
}

////CREAR UN ÁRBOL A PARTIR DE OTRO
console.log("PROCESO DE COPIAR UN ÁRBOL");
console.log(copiar(arbol));


//MOSTRAR NODOS EN N NIVEL
console.log("///////////////////// MOSTRAR NODOS EN N NIVEL //////////////////////////////////////////");
console.log(nivel(arbol.root, 2));
