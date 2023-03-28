<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styling/style.css">
    <script src="scripts/script.js"></script>
    <script src="scripts/cart.js"></script>
    <script src="scripts/validate.js"></script>
    <title>Checkout Page</title>
</head>
<body>
    <header class="header" role="banner">
        <div class="headerdiv">
            <a class="logolink" href="index.php"><img class="logo" src="images/eShop.png"></a>
            <div class="dropdown">
                <div id="toggle" class="dropdown-toggle">
                    <a class="cartlink" href="cart.php"><img class="cart" src="images/cart.png"></a>                   
                </div>
            </div>
        </div>
    </header>

    <div class="title"><h1>Informace pro dodání zboží</h1>  </div>
    <div class="information">
        <div class="contactInfo">
            <div class="contactHeader">Kontaktní údaje</div>
            <div class="info">
                <div class="formRow">
                    <span>E-mail:</span>
                    <form id="formRowEmail">
                        <input id="email" onchange="validateEmail()" type="text">
                    </form>
                </div>
                <div class="formRow">
                    <span>Telefon:</span>
                    <form id="formRowPhone" >
                        <input id="phone" onchange="validatePhone()" type="text">
                    </form>
                </div>
                <div class="formRow">
                    <span>Jméno:</span>
                    <form id="formRowName" >
                        <input id="name" onchange="validateBasic('name')" type="text">
                    </form>
                </div>
                <div class="formRow">
                    <span>Příjmení:</span>
                    <form id="formRowLastname" > 
                        <input id="lastname" onchange="validateBasic('lastname')" type="text">
                    </form>
                </div>
            </div>
        </div>

        <div class="billingInfo">
            <div class="billingHeader">Fakturační údaje</div>
            <div class="info">
                <div class="formRow">
                    <span>Ulice a č. p.:</span>
                    <form id="formRowStreet" >
                        <input id="street" onchange="validateStreet()" type="text">
                    </form>
                </div>
                <div class="formRow">
                    <span>Obec:</span>
                    <form id="formRowTown" >
                        <input id="town" onchange="validateBasic('town')" type="text">
                    </form>
                </div>
                <div class="formRow">
                    <span>PSČ:</span>
                    <form id="formRowPSC" >
                        <input id="psc" onchange="validatePSC()" type="text">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="submitButton"><button onclick="finalCheck('name','lastname','town')" >Objednat</button></div>
    
</body>
</html>