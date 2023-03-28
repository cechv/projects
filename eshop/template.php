<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styling/itemstyle.css">
    <script src="../scripts/script.js"></script>
    <script src="../scripts/cart.js"></script>
    <title><?php echo $name; ?></title>
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
            <img src="../<?php echo $imglink; ?>">
        </div>
        <div class="descDiv">
            <h1 class="itemName"><?php echo $name; ?></h1>
            <div class="desctextDiv">
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro ipsam tenetur cupiditate aperiam rem, veritatis doloribus? Natus illum neque doloribus est beatae, illo, impedit provident maiores voluptas earum nobis.</p>
            </div>
            <span class="price"><?php echo $price; ?>$</span>
            <div class="buttonDiv">
                <button id="addToCartButton" class="addToCart" type="button" >Add to Cart</button>
            </div>
        </div>
    </div>

    
    <script type="text/javascript">
    
        var id = <?php echo json_encode($id)?>;
        var name = <?php echo json_encode($name)?>;
        var link = <?php echo json_encode($link)?>;
        var imglink = <?php echo json_encode($imglink)?>;
        var price = <?php echo json_encode($price)?>;

        var idArray = <?php echo json_encode($idArray)?>;
        var nameArray = <?php echo json_encode($nameArray)?>;
        var linkArray = <?php echo json_encode($linkArray)?>;
        var imglinkArray = <?php echo json_encode($imglinkArray)?>;
        var priceArray = <?php echo json_encode($priceArray)?>;
        
    </script> 

</body>
</html>