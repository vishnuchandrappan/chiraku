<html lang="en">

<head>
	<meta name="viewport" content="width = 1050, user-scalable = no" />
	<script type="text/javascript" src="./extras/jquery.min.1.7.js"></script>
	<script type="text/javascript" src="./extras/modernizr.2.5.3.min.js"></script>
	<title>CEMP | ചിറക് </title>
	<style media="screen">
		body {
			overflow: hidden;
			height: 100%;
			margin: 0;
			padding: 0;
		}

		img {
			width: 100%;
			height: 100%;
		}

		canvas {
			display: block;
			vertical-align: bottom;
			z-index: -1;
		}


		#particles-js {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: black;
			background-image: url("https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50% 50%;
		}
	</style>
</head>

<body id='particles-js'>
	<div class="flipbook-viewport" style="z-index:-2">
		<div class="container">
			<div class="flipbook" style="transform:scale(2)">
				<div style="background-image:url(pages/mag-cover-10.jpg)"></div>
				<?php
					for ($i=1; $i < 125; $i++) {
						if ($i<100) {
							if ($i < 10) {
								$i2 = "00".$i;
							}
							else {
								$i2="0".$i;
							}
						}
						else {
							$i2 = $i;
						}
						?>
						<div style="background-image:url(pages/mag-<?php echo $i2; ?>.jpg)"></div>
						<?php
					}
				?>
			</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="particles.js"></script>
    <script type="text/javascript">
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 104,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#f5eded"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 10
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "right",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 15.984015984015985,
                        "duration": 2,
                        "opacity": 0.15184815184815184,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    </script>

	<script type="text/javascript">
		function loadApp() {
			$('.flipbook').turn({
				width: 922,
				height: 600,
				elevation: 50,
				gradients: true,
				autoCenter: true
			});
		}

		yepnope({
			test: Modernizr.csstransforms,
			yep: ['./lib/turn.js'],
			nope: ['./lib/turn.html4.min.js'],
			both: ['./css/basic.css'],
			complete: loadApp
		});
	</script>

</body>

</html>
