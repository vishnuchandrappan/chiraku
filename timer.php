<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CEMP | Magazine '19</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body id="cover">
    <div id="countdown" style="display:none">
        <div id="text-area" style="position:absolute"></div>
        <div class="container">
            <div id="clock"></div>
            <div id="units">
                <span>Day</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
            </div>
        </div>
    </div>
    <script src="./js/jquery.js"></script>
    <script src="./js/typed.js"></script>
    <script src="./js/script.js"></script>
    <script src="./js/three.js"></script>
    <script src="./js/clouds.js"></script>
    <script>
        VANTA.CLOUDS({
            el: "#cover",
            backgroundColor: 0xdc2323,
            skyColor: 0x297593,
            cloudColor: 0xb6c2d4,
            cloudShadowColor: 0x1c1d1e
        })
    </script>
    <script>
        var typed = new Typed("#text-area", {
            strings: [
                "College of Engineering and Management Punnapra",
                "Proudly Presents",
                "Somethiign Weird will be here"
            ],
            smartBackspace: true,
            typeSpeed: 50,
            backSpeed: 25,
            startDelay: 1300,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
        });


        // timer
        window.onload = function() {
            var deadline = new Date("<?php echo "August 19 2019 ".$targetTime;?>");
            startTimer("clock", deadline);
        };
    </script>
</body>

</html>
