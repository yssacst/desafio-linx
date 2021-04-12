var nextPage = ""
var url = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

function showProducts(url){
    fetch(url)
    .then(r => r.json())
    .then(data =>{
            const html = data.products.map( (product) => {
                return `
                    <div class="produto">
                        <img src=http:${product.image} class="img-product">
                        <p class="name-product">${product.name}</p>
                        <p class="desc-product">${product.description}</p>
                        <p class="oldprice-product">${product.oldPrice}</p>
                        <p class="price-product">${product.price}</p>
                        <p class="payment-product">ou ${product.installments.count}x de R$${product.installments.value}</p>
                        <button class="btn-product">Comprar</button>
                    </div>
                `
            },
            nextPage = "https://" + data.nextPage
        );
        document.querySelector("#product").innerHTML = html;
    })

}

function moreProducts(){
    showProducts(nextPage)
}

showProducts(url);