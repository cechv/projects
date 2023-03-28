<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styling/itemstyle.css">
    <script src="../scripts/script.js"></script>
    <script src="../scripts/cart.js"></script>
    <title>Cherry Blossom</title>
</head>
<body onload="loneItemLoadCart()">
    <header class="header" role="banner">
        <div class="headerdiv">
            <a href="../index.php"><img class="logo" src="../images/eShop.png"></a>
             <div class="dropdown">
                <div id="toggle" class="dropdown-toggle">
                    <a class="cartlink" href="../cart.php"><img class="cart" src="../images/cart.png"></a>
                </div>
            </div>
        </div>  
    </header>

    <div id="container">
        <div class="imgDiv">
            <img src="../images/cherryblossom.jpg">
        </div>
        <div class="descDiv">
            <h1 class="itemName">Cherry Blossom</h1>
            <div class="desctextDiv">
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro ipsam tenetur cupiditate aperiam rem, veritatis doloribus? Natus illum neque doloribus est beatae, illo, impedit provident maiores voluptas earum nobis.</p>
            </div>
            <span class="price">100$</span>
            <div class="buttonDiv">
                <button id="addToCartButton" class="addToCart" type="button" >Add to Cart</button>
            </div>
        </div>
    </div>

    
    <script type="text/javascript">
    
        var id = "1";
        var name = "Cherry Blossom";
        var link = "item1.php";
        var imglink = "images\/cherryblossom.jpg";
        var price = "100";

        var idArray = ["1","2","3","4"];
        var nameArray = ["Cherry Blossom","Bonsai","Generic Tree","White Tree"];
        var linkArray = ["item1.php","item2.php","item3.php","item4.php"];
        var imglinkArray = ["images\/cherryblossom.jpg","images\/tree.jpg","images\/tree2.jpg","images\/tree3.jpg"];
        var priceArray = ["100","200","300","400"];
        
    </script> 

</body>
</html>