<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styling/style.css">
    <title>E-shop</title>
    <script src="scripts/cart.js"></script>
</head>

<body onload="shopItems()">
    <header class="header" role="banner">
        <div class="headerdiv">
            <a class="logolink" href="index.php"><img class="logo" src="images/eShop.png"></a>
            <div class="dropdown">
                <div id="toggle" class="dropdown-toggle">
                    <a class="cartlink" href="cart.php"><img class="cart" src="images/cart.png"></a>
                     <!-- <div class="dropdown-menu">
                        <div class="cartItems">
                            <div class="cartItem">
                                <img class="cartItemImg" src="images/1.png">
                                <div class="cartItemNamePrice">
                                    <div class="cartItemName">NAME</div>
                                    <div class="cartItemPrice">100$</div>
                                </div>
                                <button class=cartButton>X</button>
                            </div>
                                                      
                        </div>
                    </div> -->
                </div>
            </div>
            
        </div>  
    </header>

    <div id="container">
        <!-- <div class="item">
            <a class="imageLink" href="item1.html"><img class="image" src="images/1.png"></a>
            <div class="text">
                <div class="leftSide">
                   <div>
                    <a class="itemLink" href="item1.html">ITEM 1</a>
                    </div>
                    <div>
                        <span class="price">100$</span>
                    </div>  
                </div>
                <div class="rightSide">
                    <button class="addtocart" type="button">Add to Cart</button>                 
                </div>              
            </div>
        </div>              -->
    </div>

    <?php include "items.php" ?>

    <script type="text/javascript">
       
        var idArray = <?php echo json_encode($id)?>;
        var nameArray = <?php echo json_encode($name)?>;
        var linkArray = <?php echo json_encode($link)?>;
        var imglinkArray = <?php echo json_encode($imglink)?>;
        var priceArray = <?php echo json_encode($price)?>;
        
    </script>

    <script src="scripts/script.js"></script>
</body>
</html>