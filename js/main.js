$(document).ready(function () {
   
   //Triva Function
    $('#spin').click(function() {
    		//Make call to Triva API
    		$.ajax({
			type: 'GET',	
			url: 'https://opentdb.com/api.php?amount=200&category=18&type=multiple',
			dataType: 'JSON',

			success: function (response) {
				console.log(response);

				//Create variales to print data to the DOM
				const question = response.results[0].question;
                const wrongOption1 = '<a href="#" class="option">' + response.results[0].incorrect_answers[0] + '</a>';
                const wrongOption2 = '<a href="#" class="option">'  + response.results[0].incorrect_answers[1] + '</a>';
                const wrongOption3 = '<a href="#" class="option">'  + response.results[0].incorrect_answers[2] + '</a>';
                const correctAnswer = '<a href="#" class="option correct">'  + response.results[0].correct_answer + '</a>';
                const allOptions = [wrongOption1, wrongOption2, wrongOption3, correctAnswer];
                //console.log(allOptions);
                
                //Randomize answer options
                shuffle(allOptions);

                //Display data
				$('#question').html(question).fadeIn("slow");
				$('#choices').html(allOptions);
				$('#adviceWrapper').hide();

				//Events to trigger when user selects an option
				$('a.option').click(function() {
				    if ($(this).hasClass('correct')) {
				       alert('Correct! Good job smarty pants!');
				       $('#adviceWrapper').css('display', 'block');
				       $('#questionWrapper').fadeOut("slow");
				       getAdvice();
				    } else {
				       alert('Try again!');
				    }
                });
		    },
		    error: function (err) {
		           console.log(err);
	    	}
        });
    });
    
    //Function to hide/show Question Wrapper 
    function clickEvents () {
	    $('a.option').click(function() {
			if ($(this).hasClass('correct')) {
				$('#questionWrapper').fadeOut("slow");
			}   
	    });
	    $('#spin').click(function() {
	    	$('#questionWrapper').fadeIn("slow");
	    });
    }
    clickEvents ();

   //Advice Function - will make call to Advice API
   function getAdvice() {
    	    $.ajax({
			type: 'GET',	
			url: 'http://api.adviceslip.com/advice',
			dataType: 'JSON',

			success: function (response) {
				console.log(response);

				//Display data
				$('#advice').html(response.slip.advice);
		    },
		    error: function (err) {
		           console.log(err);
	    	}
        });
    } 

    //Function to shuffle answers
    function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
    }		
});  



