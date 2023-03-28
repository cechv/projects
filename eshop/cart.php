<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="styling/cartstyle.css">
    <script src="scripts/cart.js"></script>
    <script src="scripts/cartpage.js"></script>
</head>

<body onload="cartItems()">
    <header class="header" role="banner">
        <div class="headerdiv">
            <a class="logolink" href="index.php"><img class="logo" src="images/eShop.png"></a>
            <div id="toggle" class="dropdown-toggle">
                <a class="cartlink" href="cart.php"><img class="cart" src="images/cart.png"></a> 
            </div>
        </div>  
    </header>

    <div id="container"></div>
   

    <div id="checkoutid" class="checkout">
        <a id="buttonLink" href="checkout.php">
        </a>
    </div>

    <?php include "items.php" ?>

    <script type="text/javascript">
       
        var idArray = <?php echo json_encode($id)?>;
        var nameArray = <?php echo json_encode($name)?>;
        var linkArray = <?php echo json_encode($link)?>;
        var imglinkArray = <?php echo json_encode($imglink)?>;
        var priceArray = <?php echo json_encode($price)?>;
        
    </script>
    
</body>
</html>