// creo un array con todos los datos de los libros 
const books = [{encabezado : 'Book', title: 'THE CODE OF THE EXTRAORDINARY MIND', author:'Vishen Lakhiani', img:'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2Fthe-code-of-the-extraordinary-mind-3.png?alt=media&token=35295678-9534-4887-9310-eb0d722c052c'},{encabezado : 'Book',title: 'OUTLIERS', author:'Malcolm Gladwel', img:'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2FOutliers.png?alt=media&token=a5c1d4c8-4117-42d1-b1fd-b4ea76ca4ce8'},{encabezado : 'Book',title: 'BLINK', author:'Malcolm Gladwel', img: 'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2Fblink.png?alt=media&token=cad9b311-878f-489b-ac26-018f57e665b2'},{encabezado : 'Book',title: 'LIMITLESS', author:'Jim Kwik', img:'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2FLimitless.png?alt=media&token=2c643e4f-721f-4caa-b6b1-0e8c3e8ae4a7'},{encabezado : 'Book',title: 'FLOW', author:'Mihály Csikszentmihályi', img:'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2Fflow.png?alt=media&token=b9ed45d9-bce4-4ce5-9cf1-12fc15470f6d'},{encabezado : 'Book', title: 'THE CODE OF THE EXTRAORDINARY MIND', author:'Vishen Lakhiani', img:'https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/books%2Fthe-code-of-the-extraordinary-mind-3.png?alt=media&token=35295678-9534-4887-9310-eb0d722c052c'}] 

// compruebo que funcione 
console.log(books); 

//FUNCION DE FILTRADO
function filterBook (){

    let inputData = document.getElementById('inputFilter')
    
    //inputData.value contiene el valor que se ingresa en el input 
    let booksFilter = books.filter(data => data['title'].includes(inputData.value))

    //elimino elementos de pantalla
    deleteElements()

    //muestro libro filtrado
    getBooks(booksFilter)
}

//recorro el array
function getBooks(arrayBooks){
    
    let div = document.querySelectorAll('div')

}

//muesto todos los libros en la pagina 
function getBooks(arrayBooks){
    //llamo al id que tengo en HTML
    let idDiv = document.getElementById('listaDeLibros')

    let h2Element;
    let h3Element;
    let pElement;
    let imgElement;
    let divElement;

    //llamo al array del principio 
    
    for(let i=0; i < arrayBooks.length; i++){

        h2Element = document.createElement('h2');
        h3Element = document.createElement('h3');
        pElement = document.createElement('p');
        imgElement = document.createElement ('img')
        divElement = document.createElement('div')
        
        //Agrego contenido de texto
        h2Element.innerText = arrayBooks[i].encabezado;
        h3Element.innerText = arrayBooks[i].title;
        pElement.innerText = arrayBooks[i].author;
        imgElement.src = arrayBooks [i].img;


        //Agrego elemento dentro de un div
            divElement.appendChild(h2Element);
            divElement.appendChild(h3Element);
            divElement.appendChild(pElement);
            divElement.appendChild(imgElement);
            divElement.innerText;

        //agrego todo al div mayor "contenedor"
        idDiv.appendChild(divElement)
    }

}

function deleteElements(){
    divBooks = document.getElementById('listaDeLibros');
    hijos = divBooks.childNodes;
    while (divBooks.firstChild) {
        //mientras tenga primer hijo, lo elimina
        divBooks.removeChild(divBooks.firstChild);
    }
}

function generateBooks(){

     //Esta funcion te elimina el contenido que tenga ese div. por las dudas si anteriormente se hizo un filtrado
     deleteElements()
     //volvemos a ver todos los libros 
     getBooks(books)

}