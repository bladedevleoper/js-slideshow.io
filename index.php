<?php 

    $title = 'Simple JS SlideShow';
   
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= $title; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="../image-slider/css/stylesheet.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
</head>
<body>
    <div class="container">

        <div id="image-display" class="mx-auto">
        <!-- <img id="img-size" class="selector" /> -->
            <span id="left">&#10096;</span>
            <span id="right">&#10097;</span>
        </div>

        <div id="img-container">
            <img id="img-size" src="../image-slider/img/image1.jpg" hidden/>
            <img id="img-size" src="../image-slider/img/image2.jpg" hidden/>
            <img id="img-size" src="../image-slider/img/image3.jpg" hidden/>
            <img id="img-size" src="../image-slider/img/image4.jpg" hidden/>
        </div>
    
    </div>
    <!-- <script src="../javascript_practice/js/app.js"></script> -->
    <script src="../image-slider/js/image-scroller.js"></script>
</body>
</html>
