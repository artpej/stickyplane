(function( $ ){

	$.initLinker = function(config){

		if( config == undefined )
			config = {
                                 Connector : [ "Bezier", { curviness:100 } ],
                                 DragOptions : { cursor: "pointer", zIndex:2000 },
                                 PaintStyle : { strokeStyle:"grey", lineWidth:4 },
                                 EndpointStyle : { radius:10, fillStyle:"grey" },
                                 HoverPaintStyle : {strokeStyle:"#ec9f2e" },
                                 EndpointHoverStyle : {fillStyle:"#ec9f2e" },
                                 Anchors :  [ 'Continuous', 'Continuous' ],
                                 ConnectionOverlays : [ [ "Arrow", { location:0.7}, { foldback:0.7, fillStyle:"grey", width:18 } ] ]
                                 }

	        // chrome fix.
        	document.onselectstart = function () { return false; };

	        jsPlumb.setRenderMode(jsPlumb.SVG);
		
		jsPlumb.importDefaults(config);
 
	},

        $.bindConnections = function(e,f){
		 jsPlumb.bind(e,f);
        },
	
        $.fn.makeSource = function(p){
		this.each(function(i,e) {
		if( !(p == undefined) ){
                        var parent = $(e).parents(p);
                        jsPlumb.makeSource($(e), {
                                parent:parent,
                                anchor:"Continuous",
                                maxConnections:-1
                        });	
		}else{
                        jsPlumb.makeSource($(e), {
                                anchor:"Continuous",
                                maxConnections:-1
                        });
			
		}	
		});
        },

        $.fn.makeTarget = function(p){
		this.each(function(i,e) {
                if( !(p == undefined) ){
                        var parent = $(e).parents(p);
                        jsPlumb.makeTarget($(e), {
                                parent:parent,
                                anchor:"Continuous"
                        });
                }else{ 
                        jsPlumb.makeTarget($(e), {
                                anchor:"Continuous"
                        });

                }
		}); 
        },



        $.fn.makeDraggable = function(){
		jsPlumb.draggable($(this));
        },


	$.fn.connectTo = function(to){
		this.each(function() {
			var source = $(this).attr('id');
			$(to).each(function() {
				var target = $(this).attr('id');
				if( target != source )
					jsPlumb.connect({source:source, target:target});
			});
		});
	},

        $.fn.targets = function(){
		var ret = new Array();
                this.each(function() {
                        var source = $(this).attr('id');
			$(jsPlumb.getConnections({source:source})).each(function(){
				ret.push(this.target[0]);
			});
                });
		return ret;
        },

        $.fn.sources = function(){
                var ret = new Array();
                this.each(function() {
                        var target = $(this).attr('id');
                        $(jsPlumb.getConnections({target:target})).each(function(){
                                ret.push(this.source[0]);
                        });
                });
                return ret;
        }

})( jQuery );
