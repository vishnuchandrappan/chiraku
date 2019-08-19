<?php
    $currentTime = time();
    $targetTime = "21:29:00";
    if (time() >= strtotime($targetTime)) {
      include "magazine.php";
    }
    else {
       include "timer.php";
    }
?>
