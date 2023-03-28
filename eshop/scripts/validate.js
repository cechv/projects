function validateEmail(){
    const checkmark = document.createElement("div");
    const id = document.getElementById("formRowEmail");
    const email = document.getElementById("email");
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const existingCheckmark = id.querySelector(".checkmarkTrue, .checkmarkFalse");
    if (existingCheckmark) {
        id.removeChild(existingCheckmark);
    }
    if(regex.test(email.value)){ 
        checkmark.classList.add("checkmarkTrue");
        checkmark.textContent="✓";
        id.appendChild(checkmark);
        return true;
    }else{
        checkmark.classList.add("checkmarkFalse");
        id.appendChild(checkmark);
        checkmark.textContent="X";
        return false;
    }
}

function validatePhone(){
    const checkmark = document.createElement("div");
    const id = document.getElementById("formRowPhone");
    const phone = document.getElementById("phone");
    let phoneNumberRegex  = new RegExp("^\\d{9}$");
    let mobileNetworkRegex = /^(601|602|603|604|605|606|607|608|702|703|704|705|72\d|730|731|732|733|734|735|736|737|738|739|770|771|772|773|774|775|776|778|779|790|791|792|793|794|797|799)/;
    const existingCheckmark = id.querySelector(".checkmarkTrue, .checkmarkFalse");
    if (existingCheckmark) {
        id.removeChild(existingCheckmark);
    }
    if(phoneNumberRegex.test(phone.value) && mobileNetworkRegex.test(phone.value.substring(0, 3))){    
        checkmark.classList.add("checkmarkTrue");
        checkmark.textContent="✓";
        id.appendChild(checkmark);
        return true;
    }else{
        checkmark.classList.add("checkmarkFalse");
        id.appendChild(checkmark);
        checkmark.textContent="X";
        return false;
    }
}

function validateStreet(){
    const checkmark = document.createElement("div");
    const id = document.getElementById("formRowStreet");
    const street = document.getElementById("street");
    let regex = new RegExp('^[a-zA-Z]+ [a-z0-9]*[0-9]?\/?[a-z0-9]+$');
    const existingCheckmark = id.querySelector(".checkmarkTrue, .checkmarkFalse");
    if (existingCheckmark) {
        id.removeChild(existingCheckmark);
    }
    if(regex.test(street.value)){
        checkmark.classList.add("checkmarkTrue");
        checkmark.textContent="✓";
        id.appendChild(checkmark);
        return true;
    }else{
        checkmark.classList.add("checkmarkFalse");
        id.appendChild(checkmark);
        checkmark.textContent="X";
        return false;
    }
}

function validatePSC(){
    const checkmark = document.createElement("div");
    const id = document.getElementById("formRowPSC");
    const psc = document.getElementById("psc");
    let regex = new RegExp("^\\d{3}(?:\\s)?\\d{2}$");
    const existingCheckmark = id.querySelector(".checkmarkTrue, .checkmarkFalse");
    if (existingCheckmark) {
        id.removeChild(existingCheckmark);
    }
    if(regex.test(psc.value)){ 
        checkmark.classList.add("checkmarkTrue");
        checkmark.textContent="✓";
        id.appendChild(checkmark);
        return true;
    }else{
        checkmark.classList.add("checkmarkFalse");
        id.appendChild(checkmark);
        checkmark.textContent="X";
        return false;
    }
}

function validateBasic(validation) {
    const checkmark = document.createElement("div");
    const validationID = document.getElementById(validation);
    let id = "";
    switch (validation) {
      case "name":
        id = document.getElementById("formRowName");
        break;
      case "lastname":
        id = document.getElementById("formRowLastname");
        break;
      case "town":
        id = document.getElementById("formRowTown");
        break;
    }
    const existingCheckmark = id.querySelector(".checkmarkTrue, .checkmarkFalse");
    if (existingCheckmark) {
      id.removeChild(existingCheckmark);
    }
    if (validationID.value == "") {
      checkmark.classList.add("checkmarkFalse");
      checkmark.textContent = "X";
      id.appendChild(checkmark);
      return false;
    } else {
      checkmark.classList.add("checkmarkTrue");
      checkmark.textContent = "✓";
      id.appendChild(checkmark);
      return true;
    }
  }

function finalCheck(name,lastname,town){
    const check = [];
    check.push(validateEmail());
    check.push(validatePhone());
    check.push(validateBasic(name));
    check.push(validateBasic(lastname));
    check.push(validateBasic(town));
    check.push(validateStreet());
    check.push(validatePSC());
    
    for(i=0;i<check.length;i++){
        if(check[i]!=true){
            alert("Špatně vyplněný formulář");
            return;
        }
    }
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Redirect to successfulorder.html if data is inserted successfully
            if (this.responseText === "Data inserted successfully.") {
                window.location.href = 'successfulorder.html';
            } else {
                alert("Data insertion failed. Please try again.");
            }
        }
    };

    xhttp.open("POST", "sendinfo.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`email=${encodeURIComponent(document.getElementById("email").value)}&phone=${encodeURIComponent(document.getElementById("phone").value)}&name=${encodeURIComponent(document.getElementById("name").value)}&lastname=${encodeURIComponent(document.getElementById("lastname").value)}&street=${encodeURIComponent(document.getElementById("street").value)}&town=${encodeURIComponent(document.getElementById("town").value)}&postcode=${encodeURIComponent(document.getElementById("psc").value)}`);
}

function finalCheckPartTwo(){
    forEachCookieSimple();
    
    for(i=0;i<ids.length;i++){
        const myArray = ids[i].split("=");
        const idvalue=myArray[1];

        quantityArray = quantityCookies[i].split("=");
        const nvalue=quantityArray[1];

        const xhttpItem = new XMLHttpRequest();
        xhttpItem.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText); // Do something with the response
            }
        };
        xhttpItem.open("POST", "senditeminfo.php", true);
        xhttpItem.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        let data = {
            item_id: idvalue,
            quantity: nvalue
        };

        removeCookies(myArray[0]);
        removeCookies(quantityArray[0]);
        xhttpItem.send(JSON.stringify(data));
    }
}
