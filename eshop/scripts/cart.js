let cartItemsArray = [];

function addToCart(buttonid, isitgenerated){
    const dropdownToggle = document.getElementById("toggle");
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");

    const cartItems = document.createElement("div");
    cartItems.classList.add("cartItems");

    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    
    const cartItemImg = document.createElement("img");
    cartItemImg.classList.add("cartItemImg");
    if(isitgenerated=="1"){
        cartItemImg.src = "../"+imglinkArray[buttonid];
    }else{
        cartItemImg.src = imglinkArray[buttonid];
    }
    
    const cartItemNamePrice = document.createElement("div");
    cartItemNamePrice.classList.add("cartItemNamePrice");

    const cartButton = document.createElement("button");
    cartButton.classList.add("cartButton");
    cartButton.innerText="X";

    cartButton.addEventListener("click", () => {

        cartItemsArray.splice(cartItemsArray.indexOf(cartItem), 1);
        cartItem.remove();
        
        var value = getCookie("n"+buttonid) 
        setCookie("n"+buttonid, value-1, 1);
        if((value-1) === 0){
            removeCookies("n"+buttonid);
            removeCookies("id"+buttonid);
        }
    });

    const cartItemName = document.createElement("div");
    cartItemName.classList.add("cartItemName");
    cartItemName.innerText=nameArray[buttonid];

    const cartItemPrice = document.createElement("div");
    cartItemPrice.classList.add("cartItemPrice");
    cartItemPrice.innerText=priceArray[buttonid];

    cartItemsArray.push(cartItem);

    dropdownToggle.appendChild(dropdownMenu);
    dropdownMenu.appendChild(cartItems);

    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    for (let i = 0; i < cartItemsArray.length; i++) {
        cartItems.appendChild(cartItemsArray[i]);
    }

    cartItems.appendChild(cartItem);
    cartItem.appendChild(cartItemImg);
    cartItem.appendChild(cartItemNamePrice);
    cartItem.appendChild(cartButton);
    cartItemNamePrice.appendChild(cartItemName);
    cartItemNamePrice.appendChild(cartItemPrice);
    
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name){
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function addToCartCookie(cookievalue, isitgenerated){
    let cookie = cookievalue
    addToCart(cookie-1, isitgenerated);
}

const ids=[];
const quantityCookies=[];

function forEachCookie(isitgenerated) {
    var cookies = document.cookie;
    
    if(cookies===""){
        return;
    }
    cookies = cookies.split("; ");
    for (var i = 0; i < cookies.length; i++)
    {
        isid = cookies[i].slice(0, 2)
        if(isid==="id"){
           ids.push(cookies[i]);
        }
        else{
            quantityCookies.push(cookies[i]);
        }
    }

    quantityCookies.sort();

    for (var i = 0; i < ids.length; i++) {        
        const number=getCookie(quantityCookies[i].slice(0, 2));
        for(var j=0; j < number; j++){
            addToCartCookie(getCookie(ids[i].slice(0, 3)), isitgenerated);  
        }           
    };  
}

function forEachCookieSimple(){
    var cookies = document.cookie;
    
    if(cookies===""){
        return;
    }
    cookies = cookies.split("; ");
    for (var i = 0; i < cookies.length; i++)
    {
        isid = cookies[i].slice(0, 2)
        if(isid==="id"){
           ids.push(cookies[i]);
        }
        else{
            quantityCookies.push(cookies[i]);
        }
    }
}

function removeCookies(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function updateCookies(name, value){
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/;";
}
