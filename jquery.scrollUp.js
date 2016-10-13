(function( window, document, $, undefined ){
	var methods = {
		spy: function ($this) {
			$this.hide().removeAttr("href");
				if($(window).scrollTop()!="0"){
					$this.fadeIn("slow")
				}
				
				var scrollDiv=$this;
				$(window).scroll(function(){

					if($(window).scrollTop()=="0"){
						$(scrollDiv).fadeOut("slow")
					}else{
						$(scrollDiv).fadeIn("slow")
					}
				});
			
				$this.click(function(){
					$("html, body").animate({scrollTop:0},"slow")
				})
		}
	}

	$.fn.scrollUp = function() {  

		methods.spy(this);

		return this;
	};


	$.scrollUp = function (bg, color) {
		$btn = $("<a href='#'></a>");

		$btn.css({color: bg, background: color})
		$btn.addClass("scrollUp");

		$("body").append($btn);

		return $btn.scrollUp();
	}

})(window, document, jQuery);