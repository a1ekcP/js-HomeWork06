let products =[];

function renderProducts(products){
    let htmlStr = products.map(el => `<div class="col-4">
            <div class="card h-100">
                <img src="${el.images[0]}" class="card-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text desc">${el.description}</p>
                    <p class="card-text price fw-bold">${el.price}$</p>
                </div>
            </div>
        </div>`).join('');
        document.querySelector('#cards').innerHTML = htmlStr || `<div class="col-12 mx-auto"><h2 class="card text-center">Product not found</h2></div>`;
}

function checkSelect(){
    document.querySelector('#select').onchange = (event) =>{
        let value = event.currentTarget.value;
        let selectProducts = products.filter(el => el.category === value);
        renderProducts(selectProducts);
    }
}

function renderSelect(array){
    let htmlStr = array.map(element => {
        return `<option value="${element}">${element}</option>`;
    });
    document.querySelector('#select').innerHTML = htmlStr;
    checkSelect();
}

window.onload = () => {
    fetch('https://dummyjson.com/products').then(res => res.json()).then(data => {
        //console.log(data.products);
        products = data.products;
        renderProducts(products);
    });
    fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => {
        //console.log(data);
        renderSelect(data);
    });
}