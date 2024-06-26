<?php
//include('connection.php');
$connection = mysqli_connect("localhost", "root", "", "db_ballposition");


if(isset($_POST['save_position']))
{
    $query = "INSERT INTO ball_coordinates(x, y, z) VALUES ('$_POST[x]','$_POST[y]','$_POST[z]')";
    

    
    if(mysqli_query($connection, $query)) {
        echo "<script type='text/javascript'> alert('Position saved successfully.');
        </script>";
    } else {
        echo "<script type='text/javascript'> alert('Error: " . mysqli_error($connection) . "');
        </script>";
    }
    
    
}



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Ball Position</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
        #ui {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="ui">
        <p>Current Position: <span id="position">(0, 0, 0)</span></p>
        <form method="post" action="" id="positionForm">
            <label for="x">X:</label>
            <input type="number" id="x" name="x" step="0.1" required>
            <label for="y">Y:</label>
            <input type="number" id="y" name="y" step="0.1" required>
            <label for="z">Z:</label>
            <input type="number" id="z" name="z" step="0.1" required>
            <input name='save_position' type="submit" value='Update Position'></input>
        </form>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="app.js"></script>
    

</body>
</html>
