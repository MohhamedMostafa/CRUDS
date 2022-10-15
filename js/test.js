let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


 // get total

 function gettotal(){
if(price.value != ''){
let result = (+price.value + +taxes.value + +ads.value)- +discount.value;
total.innerHTML=result;
total.style.background= '#040'
}else{
    total.innerHTML = '';
    total.style.background = 'blue';
}

 }

// ----------------------------

   // create product

let datapro;
if(localStorage.product != null){
 datapro = JSON.parse(localStorage.product);
}else{
    datapro = [];
}

submit.onclick= function(){
    let newpro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

datapro.push(newpro);
           // save localstorage
localStorage.setItem('product' , JSON.stringify(datapro))

cleardata();
showdata()
}

// clear inputs

function cleardata(){
title.value= '';
price.value= '';
taxes.value= '';
ads.value= '';
discount.value= '';
total.innerHTML= '';
count.value= '';
category.value= '';
}

        // read
  
function showdata(){

   let table = ''

for(let i =0 ; i<datapro.length ; i++){

        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total} $</td>
        <td>${datapro[i].category}</td>
        <td><button id="update">update</button></td>
        <td><button id="delete">delete</button></td>
    </tr>
`
}
   document.getElementById('tbody').innerHTML = table ;
}        
showdata();



      //btn
let btn =document.getElementById('mo')
 
this.onscroll = function(){
    if(scrollY >= 50){
        btn.style.display ='block';
    }else{
        btn.style.display ='none';
    }
}

btn.onclick = function(){

 oppo.scroll({
left:0,
top:0,
behavior : "smooth",

    })
}

















// let btn =document.getElementById('btn');
// this.onscroll=function(){
//     if(scrollY >= 400){
//         btn.style.display = 'block'
//     }
// else{
//     btn.style.display = 'none'

// }
// }

// btn.onclick=function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:"smooth"
//     })

// }