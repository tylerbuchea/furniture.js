/**=====================
	 furniture.js
	 =====================
	 by Tyler Buchea
	 =====================
	 created 2013
	 =====================*/
	
(function( $ ) {
  $.fn.furniture = function(selector) {

		var init = function() {
		
				$(document).off('mouseup mousemove');
				
				$.each(selector, function(index, value) {
					$(document).off('mousedown', value);
					$(document).on('mousedown', value, select);	
				});
				
				return false;
				
			},			
		select = function (downEvent) {	
				console.log(downEvent);
				
				$selected = $(this).clone().appendTo('body');
				$(this).css('visibility', 'hidden');
				
				deepClone($selected, {
					x: downEvent.pageX - downEvent.offsetX, 
					y: downEvent.pageY - downEvent.offsetY
				});
				
				$(document).on('mousemove', function(moveEvent) {
				
					$selected.css('left', moveEvent.pageX + 'px');
					$selected.css('top', moveEvent.pageY + 'px');
					
				});
				
				$(document).on('mouseup', function(upEvent) {	
				
					$selected.css('opacity', '1');	
					$(document).off('mousemove mouseup keypress');
					
				});
				
				$(document).on('keypress', function(keyEvent) {

					if (event.which == 119) //up & down
						$selected.css('height', $selected[0].clientHeight + 1 + 'px');					
					else if (event.which == 115)
						$selected.css('height', $selected[0].clientHeight - 1 + 'px');
						
					if (event.which == 100) //left & right
						$selected.css('width', $selected[0].clientWidth + 1 + 'px');
					else if (event.which == 97)
						$selected.css('width', $selected[0].clientWidth - 1 + 'px');
					
				});
				
			},
		deepClone = function(el, attr) {
		
				el.css('opacity', '0.8');
				el.css('left', attr.x + 'px');
				el.css('top', attr.y + 'px');
				el.css('width', el.width() + 'px');
				el.css('height', el.height() + 'px');
				el.css('clear', 'both');
				el.css('position', 'absolute');
				
			}
			
		;init();	
		
  };
})( jQuery );


$(document).furniture(['div']);