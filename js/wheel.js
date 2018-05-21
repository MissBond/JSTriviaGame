//Based off https://codepen.io/AndreCortellini/pen/vERwmL

//Set default degree (360*5)
var degree = 1800;
//Number of clicks = 0
var clicks = 0;

$(document).ready(function(){
	
	// WHEEL SPIN FUNCTION
	$('#spin').click(function(){
		
		//Add 1 every click
		clicks ++;
		
		// Multiply the degree by number of clicks
	    // generate random number between 1 - 360, 
        // add to the new degree
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		// Make the spin btn tilt every
		// time the edge of the section hits 
		// the indicator
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html("hello World");
				console.log(aoY);
				
				// 23.7 is the minumum offset number that 
				// each section can get, in a 30 angle degree.
				// If offset reaches 23.7, then we know
				// that it has a 30 degree angle and therefore, 
				// exactly aligned with the spin btn
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
});
	


















