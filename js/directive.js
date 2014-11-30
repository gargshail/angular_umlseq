app.directive("umlseq", function() {
	return {
		restrict : "E",
		link:function(scope, e, attrs) {
		
		  var diag = Diagram.parse(e.text());
		  
		  e.text(""); 
		  
		  diag.drawSVG(e[0], {theme: 'simple'});
		}
	};
});
i
