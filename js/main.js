let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then((response)=> {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema con el json", error));
    }).catch((err)=> console.log("Existió un problema con la solicitud", err));
}//getData

// function createCards(products ){
//     console.log(products.length);
//     console. log(products[1].name);
//     //crear una Card por cada producto con sus datos esenciales
//     }//createCards


function createCards(products) {
    // Limpiamos el divData antes de agregar las cards
    divData.innerHTML = '<div class="row"></div>'; // Añadimos un contenedor de fila

    // Recorremos el array de productos
    products.forEach((product) => {
        // Creamos la estructura de la card con Bootstrap
        let card = `
            <div class="col-12 col-md-4 mb-4"> <!-- Col ocupa todo en móvil (col-12) y 1/3 en pantallas medianas (col-md-4) -->
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Precio:</strong> $${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        // Añadimos la card dentro del contenedor de la fila (row)
        divData.querySelector('.row').innerHTML += card;
    });
}

getData();