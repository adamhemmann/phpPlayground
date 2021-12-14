<!DOCTYPE html>
<html>
<head>
    <title>Action</title>
</head>
<body>
    <?php

        $actionType = empty($_GET["actionType"]) ? $_POST["actionType"] : $_GET["actionType"];

        if ($actionType == "name") {
            $firstName = empty($_GET["firstName"]) ? "[No first name provided]" : $_GET["firstName"];
            $lastName = empty($_GET["lastName"]) ? "[No last name provided]" : $_GET["lastName"];

            echo "Hello, " . $firstName . " " . $lastName . ", and welcome to my PHP playground, designed to simulate the value of server-side development and practical use in web development!";
        }

        else if ($actionType == "hamming") {
            $hammingNum = empty($_GET["hammingInput"]) ? "No input provided" : $_GET["hammingInput"];
            // code for determining Hamming numbers: https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-19.php
            function isHamming($num) {
                $z = $num;
                if ($num == 0) {
                    return "The number you provided ($num) is not a Hamming number.";
                }
                    
                $x = array(2, 3, 5);
                foreach ($x as $i) {
                    while ($num % $i == 0) {
                        $num /= $i;
                    }
                }         
                if ($num==1) {
                    return "The number you provided ($z) is a Hamming number.";
                }
                else {
                    return "The number you provided ($z) is not a Hamming number.";
                }

            }
            
            echo isHamming($hammingNum);
        }

        else if ($actionType == "password") {

            $username = $_POST["username"];
            $password = $_POST["password"];

            if ($username == "test" and $password == "pass") {
                echo "Credentials validated with POST.";
            }
            else {
                echo "Validation failed. Incorrect username or password. Please try again.";
            }
        }

        else if ($actionType == "list") {

            $a = ord($_GET["listVal1"]);
            $b = ord($_GET["listVal2"]);

            $output = "";
            $output .= "[ ";

            if ($a < $b) {
                for ($x = $a; $x <= $b; $x++) {
                    $output .= " " . chr($x) . ",";
                }
            } 

            if ($a > $b) {
                for ($x = $a; $x >= $b; $x--) {
                    $output .= " " . chr($x) . ",";
                }
            }

            if ($a = $b) {
                $output .= chr($a);
            }
            
            if (strlen($output) > 3) {
                $output = substr_replace($output, "", -2);
            }            
            $output .= " ]";

            echo $output;

        }

        else if ($actionType == "cylinder") {
            
            $r = $_POST["cylRadius"];
            $h = $_POST["cylHeight"];

            $surfaceArea = (2 * pi() * $r * $h) + (2 * pi() * pow($r, 2));

            echo "Surface area = " . number_format($surfaceArea, 2);
        }

    ?>
</body>
</html>