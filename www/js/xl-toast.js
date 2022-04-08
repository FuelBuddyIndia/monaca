$.extend({
	/**
	
	* {title: "title", duration: "duration", position: "position", width: "width", height: "height", backgroundColor: "backgroundColor", textColor: "textColor"}
	*/
	toast: function(obj) {
		if($("#toast-div").length) {
			return;
		}
		var title           = obj.title;
		var showTime        = obj.duration || 5000;
		var width           = obj.width || "auto";
		var maxwidth        = obj.width || "80%";
		var height          = obj.height || "35px";
		var position        = obj.position || '';
		var backgroundColor = obj.backgroundColor || 'rgba(0, 0, 0, .7)';
		var textColor       = obj.textColor || '#fff';
		var flag            = obj.flag || true;
		var lineheight      = obj.lineheight || height;
		var fontsize 		= obj.fontsize || "4vw";
		if(position == 'bottom') {
			position = "bottom: 90px;";
			} else if(position == 'middle') {
			position = "top: calc(45vh - 15px);";
		} else if(position == 'top') {
			position = "top: 0px;";
		} else if(position === '') {
			position = "top: 80%;";
		} else {
			
		}
		if(flag) {
			var content = "<div id='toast-div' style='position: fixed;display: none; z-index:999999;font-size: "+ fontsize + "; " + position + ";left: 0;width:100%; height: " + height + "; text-align: center'>";
		} else {
			var content = "<div id='toast-div' style='position: fixed; display: none;z-index:999999; top: 0; left: 0;width:100%; height:100%; text-align: center'>";
		}
		content += '<div id="toast-content" style="z-index:999999;display: inline-block; max-width: ' + maxwidth + ' ; width: ' + width + ';min-height: ' + height + ';padding: 2px 14px;background-color: ' + backgroundColor + ';text-align: center;line-height: ' + lineheight +';border-radius: 3px;color: ' + textColor + ';">' + title + '</div>';
		content += '</div>';
		$("body").append(content);
		$("#toast-div").fadeIn(500);
		window.toastTimer1=setTimeout(function(){$("#toast-div").fadeOut(500);}, showTime);
		window.toastTimer2=setTimeout(function(){$("#toast-div").remove();}, showTime + 1000);
	}


});

$.extend({
	toasthide: function()
	{
		//clearTimeout(window.toastTimer1);
//clearTimeout(window.toastTimer2);
		$("#toast-div").remove();
	}
});