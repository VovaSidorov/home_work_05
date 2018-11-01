var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
               {"name":"Home","href":"index.html"},
               {"name":"Catalog","href":"catalog.html"},
               {"name":"About us","href":"about_us.html"},
               {"name":"Contacats","href":"contacts.html"},
               {"name":"Portfolio","href":"portfolio.html"},
               {"name":"Blog","href":"blog.html"}
             ];


for (var i=0;i<names.length;i++){
li = document.createElement("li");
a = document.createElement("a");
a.innerHTML = names[i].name;
a.setAttribute("class","nav-link");
a.setAttribute("href", names[i].href);
li.setAttribute("class","nav-item")
li.appendChild(a);
navigation.appendChild(li);

if (document.location.href.indexOf(names[i].href) != -1){
  document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
};

}
////////////////////////////////////




var products =[
    {"name":"Snikers #1","price":125.32,"image":"bg-01.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #2","price":168.42,"image":"bg-02.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #3","price":193.82,"image":"bg-03.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #4","price":205.62,"image":"bg-04.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #5","price":188.72,"image":"bg-05.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #6","price":138.32,"image":"bg-06.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #7","price":1598.12,"image":"bg-07.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"},
    {"name":"Snikers #8","price":168.22,"image":"bg-08.jpg","description":"Слегка завышенные стильные женские кроссовки сейчас находятся на пике популярности"}
];



function createNewElement(tag, innerContent=null, classStr=null, attr=null){
    var el = document.createElement(tag);
    el.innerHTML = (innerContent)?innerContent:"";
    el.className = (classStr)?classStr:"";
    if (attr){
    attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
    }
    return el;
}

    function createQuantityOfGoods(){
        var p = createNewElement("p",products.length+" elements on the page" ,"colend");
        var p1 = attachChilderToParent(createNewElement("div",null,"colend"),[p]);
        return p1;
    }


function createCard(product){
   var link = createNewElement("a","Add to card","btn btn-primary",[{"name":"href","value":"#"}]);
   var p = createNewElement("p",product.description,"card-text");
   var title = createNewElement("h5",product.name,"card-title");
   var price = createNewElement("p","Price " + product.price,"card-text");
   var image = createNewElement("img", null, "card-img-top",[{"name":"src","value":"images/"+product.image},{"name":"alt","value":product.name}]);
   
var cardBody = attachChilderToParent(createNewElement("div",null,"card-body"),[title,p,price,link]);
var card = attachChilderToParent(createNewElement("div",null,"card"),[image,cardBody]);
var catalogItem = attachChilderToParent(createNewElement("div",null,"col-lg3 col-md-6 mb-2 catalog-item"),[card]);
   return catalogItem;
}

function attachChilderToParent(html, array_el){
    array_el.map((el)=>html.appendChild(el));
    return html;
}

var colElements = document.getElementById("colProducts");
colElements.appendChild(createQuantityOfGoods());

var catalog = document.getElementById("catalog");
products.map((el)=>catalog.appendChild(createCard(el)));




