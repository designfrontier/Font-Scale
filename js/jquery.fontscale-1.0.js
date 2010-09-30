(function($){
 $.fn.fontscale = function() {
	var _lineWidth = $(this).parents('div').innerWidth();
	var _bodyFontSize = $('body').css('font-size').replace('px','');
	
    return this.each(function() {
		$(this).children('span').each(function(){
			var thisLineWidth = $(this).innerWidth();
			while(thisLineWidth < _lineWidth){
				//variable to store px vs em
				var px = true;
				//get the font size
				var currentFontSize = $(this).css('font-size');
				if(currentFontSize.search('px') > 0){
					currentFontSize = currentFontSize.replace('px','');

					//convert to ems or it won't resize right
					currentFontSize = parseFloat(currentFontSize)/parseFloat(_bodyFontSize);
				}else{
					currentFontSize = currentFontSize.replace('em','');
					currentFontSize = parseFloat(currentFontSize);
					px = false;
				}

				//get the ratio of the line lengths and use that to set a new font size
				newFontSize = currentFontSize * (1 - thisLineWidth/_lineWidth) + currentFontSize;
				newFontSize = newFontSize + 'em';
				$(this).css('font-size',newFontSize);

				//thisLineWidth = _lineWidth;
				thisLineWidth = $(this).innerWidth();
			}
			
			
			var thisLineHeightStart = $(this).css('font-size').replace('em','') * _bodyFontSize;
			
			while($(this).height() > parseFloat(thisLineHeightStart)){
				//variable to store px vs em
				var px = true;
				//get the font size
				var currentFontSize = $(this).css('font-size');
				if(currentFontSize.search('px') > 0){
					currentFontSize = currentFontSize.replace('px','');

					//convert to ems or it won't resize right
					currentFontSize = parseFloat(currentFontSize)/_bodyFontSize;
				}else{
					currentFontSize = currentFontSize.replace('em','');
					currentFontSize = parseFloat(currentFontSize);
					px = false;
				}

				//get the ratio of the line lengths and use that to set a new font size
				newFontSize = currentFontSize - .05;
				newFontSize = newFontSize + 'em';
				$(this).css('font-size',newFontSize);

				//thisLineWidth = _lineWidth;
				thisLineHeightStart = $(this).css('font-size').replace('em','') * _bodyFontSize;			
				thisLineHeightStart = parseFloat(thisLineHeightStart);
			}
		});	
    });
 };
})(jQuery);
