const but= document.getElementsByClassName('but')
const products = []

for (let i=0 ; i<but.length ; i++){
    let cartBut = but[i];
    cartBut.addEventListener('click', () =>{
      
        console.log("event.target.parentElement.parentElement.children[2].children[0].textContent")

        let prodect = {
            image : event.target.parentElement.parentElement.children[0].children[0].src,
            name :event.target.parentElement.parentElement.children[1].children[0].textContent,
            price :event.target.parentElement.parentElement.children[2].children[0].textContent,
            totalprice :parseInt( event.target.parentElement.parentElement.children[2].children[0].textContent), 
           
            quantity : 1
        }

        
        addItemTolocal(prodect);


    });




}


function addItemTolocal (prodect){
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    if (cartItem === null){
    products.push(prodect)
    localStorage.setItem('prdInCart', JSON.stringify(products))

} else {
    cartItem.forEach(element => {
        if(prodect.name==element.name){
            prodect.quantity = element.quantity += 1;
            prodect.totalprice = element.totalprice += prodect.totalprice;

        }else {
            products.push(element)
        }
    });
    products.push(prodect)
}
localStorage.setItem('prdInCart' , JSON.stringify(products))
alert('add to cart')
 
window.location.reload()


}

//all data display in home page 
function dispConrtItem (){
    let html = '';
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.forEach(element => {
        html += `

       <div class="cartlist">
       <div class="forImage"><img src="${element.image}" ></div>
       <div class="forname"> <h3>${element.name}</h3></div>
       <div class="forprice"><h3>${element.price}</h3></div>
       <div class="forquantity"><h3>${element.quantity}</h3></div>
       <div class="fortotal"> <h3>${element.totalprice}</h3></div>
          <div class="removeItem"><button> Remove </button> </div>
        </div>
        
        `
      
    });


    document.querySelector('.displayCart').innerHTML=html;
  

}

dispConrtItem();

function cartNumberDisplay(){
    let cartNumber =0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.forEach(item => {
        cartNumber =item.quantity += cartNumber;

    });
    document.querySelector('.cart span')
      
  

}
cartNumberDisplay();

const removeitem =document.getElementsByClassName('removeItem')
for( let i=0 ; i<removeitem.length ; i++){

    let removebut = removeitem[i]

    removebut.addEventListener('click' , () =>{
        console.log("remove")
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
        cartItem.forEach(item =>{

            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
            products.push(item)
        }

     });

        localStorage.setItem('prdInCart' , JSON.stringify(products))

         window.location.reload()

    })
}



function subTotal() {
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.map(item =>{
        subTotal = item.totalprice += subTotal;

    });
    console.log(subTotal)
    document.querySelector('.priceview h2').textContent = subTotal;
}
subTotal()


