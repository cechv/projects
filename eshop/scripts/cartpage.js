function cartItems(){ 
    forEachCookieSimple();
    quantityCookies == quantityCookies.sort();
    ids == ids.sort();
    
    var idvalue=[];
    var quantityCookiesValue=[];
    const idvaluesonly=[];

    for(var i=0;i<quantityCookies.length;i++){
        quantityCookiesValue = quantityCookies[i].split('=');
        idvalue = ids[i].split('=');
        
        idvaluesonly.push(idvalue[1]);

        const divContainer = document.getElementById("container");
        const item = document.createElement("div");
        item.classList.add("item");
        
        const itemImg = document.createElement("img");
        itemImg.classList.add("itemImg");
        itemImg.src = imglinkArray[idvalue[1]-1];

        const itemValues = document.createElement("div");
        itemValues.classList.add("itemValues");
        
        const name = document.createElement("span");
        name.textContent=nameArray[idvalue[1]-1]
        name.classList.add("name");
    

        const itemAmount = document.createElement("div");
        itemAmount.classList.add("itemAmount");
        
        const form = document.createElement("form");
        
        const input = document.createElement("input");
        input.type="number";
        input.min = 1;
        input.value = quantityCookiesValue[1]

        input.addEventListener("change", () => {
            setCookie("n"+((idvaluesonly[cartButton.id])-1), input.value, 1);
            price.textContent = priceArray[idvalue[1]-1]*input.value + "$" 
        });
        
        const buttonDiv = document.createElement("buttonDiv");
        buttonDiv.classList.add("buttonDiv");
        
        const cartButton = document.createElement("button");
        cartButton.classList.add("button");
        cartButton.innerText="X";
        cartButton.id=i;

        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = priceArray[idvalue[1]-1]*input.value + "$" 

        cartButton.addEventListener("click", () => {
            item.remove();
            removeCookies("n"+((idvaluesonly[cartButton.id])-1));
            removeCookies("id"+((idvaluesonly[cartButton.id])-1));
            if(!document.cookie){
                const checkoutbutton=document.getElementById("checkoutid");
                checkoutbutton.remove();
                const divContainer=document.getElementById("container");
                const emptyCart=document.createElement("h1");
                emptyCart.textContent="Your cart is empty";
                divContainer.appendChild(emptyCart);
            }
        });
        
        divContainer.appendChild(item);
        item.appendChild(itemImg);
        item.appendChild(itemValues);
        itemValues.appendChild(name);
        itemValues.appendChild(itemAmount);
        itemValues.appendChild(price);
        itemValues.appendChild(buttonDiv);
        itemAmount.appendChild(form);
        buttonDiv.appendChild(cartButton);
        form.appendChild(input);
    }

    if(document.cookie){
        const buttonLink=document.getElementById("buttonLink");
        const button=document.createElement("button");
        button.classList.add("checkoutButton");
        button.textContent="Check Out";
        buttonLink.appendChild(button);
    }else{
        const divContainer=document.getElementById("container");
        const emptyCart=document.createElement("h1");
        emptyCart.textContent="Your cart is empty";
        divContainer.appendChild(emptyCart);
    }
}


