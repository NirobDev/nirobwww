

  

var j = jQuery.noConflict();
j(document).ready(function(){
  j('#tab2c, #tab3c, #tab4c, #tab5c').hide();
		j('#tab1').click(function(){
		j('#tab1c').show();						  
		j('#tab2c, #tab3c, #tab4c, #tab5c').hide();					  
		});
		
		j('#tab2').click(function(){
		j('#tab2c').show();						  
		j('#tab1c, #tab3c, #tab4c, #tab5c').hide();						  
		});
		
		j('#tab3').click(function(){
		j('#tab3c').show();						  
		j('#tab1c, #tab2c, #tab4c, #tab5c').hide();						  
        });
		
		j('#tab4').click(function(){
			j('#tab4c').show();						  
			j('#tab1c, #tab2c, #tab3c, #tab5c').hide();					  
		});

		j('#tab5').click(function(){
			j('#tab5c').show();						  
			j('#tab1c, #tab2c, #tab3c, #tab4c').hide();					  
		});
							 			  
});

// IMGE ZOON IN JS

function zoom(e){
	var zoomer = e.currentTarget;
	e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
	e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
	x = offsetX/zoomer.offsetWidth*100
	y = offsetY/zoomer.offsetHeight*100
	zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }