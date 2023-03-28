const divContainer = document.getElementById("container");

function shopItems(){ 
    
    for(let i=0; i < idArray.length; i++){
        const item = document.createElement("div");
        item.classList.add("item");

        const imageLink = document.createElement("a");
        imageLink.classList.add("imageLink");
        imageLink.href= "pages/"+linkArray[i];
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = imglinkArray[i];

        const text = document.createElement("div");
        text.classList.add("text");

        const leftSide = document.createElement("div");
        leftSide.classList.add("leftSide");
        const rightSide = document.createElement("div");
        rightSide.classList.add("rightSide");

        const div1 = document.createElement("div");

        const itemLink = document.createElement("a");
        itemLink.href= "pages/"+linkArray[i];
        itemLink.textContent=nameArray[i];
        itemLink.classList.add("itemLink");
        

        const div2 = document.createElement("div");
        const addtocart = document.createElement("button")
        const numberOfItems = [];
        
        addtocart.setAttribute('id', "button"+i);
        addtocart.onclick = function(){
            const n = getCookie("n"+ i);
            numberOfItems[i]=Number(n);
            
            addToCart(i);               
            setCookie("id"+i, i+1, 1);
            numberOfItems[i]=Number(numberOfItems[i]+1);
            setCookie("n"+i, numberOfItems[i], 1);    
        }
        addtocart.classList.add("addtocart");
        addtocart.textContent="Add to Cart";

        const price = document.createElement("span");
        price.textContent=priceArray[i] + "$";
        price.classList.add("price");

        divContainer.appendChild(item);
        item.appendChild(imageLink);
        item.appendChild(text);
        imageLink.appendChild(image);
        text.appendChild(leftSide);
        text.appendChild(rightSide);
        leftSide.appendChild(div1);
        leftSide.appendChild(div2);
        div1.appendChild(itemLink);
        div2.appendChild(price);   
        rightSide.appendChild(addtocart);  
    }  
    forEachCookie();
}

function loneItemLoadCart(){
    const dropdownToggle = document.getElementById("toggle");
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownToggle.appendChild(dropdownMenu);

    forEachCookie("1");
    
    const addtocart = document.getElementById("addToCartButton");
    addtocart.onclick = function(){
        const i = id-1;
        const n = getCookie("n"+ i);    
        buttonid=i;
        addToCartSimple();              
        setCookie("id"+i, Number(i)+1, 1);
        setCookie("n"+i, Number(n)+1, 1);     
    }
}

function addToCartSimple(){
    const dropdownToggle = document.getElementById("toggle");
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");

    const cartItems = document.createElement("div");
    cartItems.classList.add("cartItems");

    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    
    const cartItemImg = document.createElement("img");
    cartItemImg.classList.add("cartItemImg");
    cartItemImg.src = "../"+imglink;
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
    cartItemName.innerText=name;

    const cartItemPrice = document.createElement("div");
    cartItemPrice.classList.add("cartItemPrice");
    cartItemPrice.innerText=price;

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