$(document).ready(function(){

          $('.note').draggable({
            drag: function(event,ui){
                    if( $(this).offset().top + $(this).height() > $(document).height() - 40 ){
                        if( ! $('.panel ul').is(':visible') )
                        $('.panel ul').slideDown('fast');
                    }
                },
            stop: function(event,ui){

              /*$.post('@{Note.update()}',
                {
                    id: ui.helper.attr('id'),
                    x: ui.position.left,
                    y: ui.position.top,
                    z: ui.helper.css('z-index'),
                    spaceid: "1234"
                }
              );*/
            },
            stack: '.note',
            refreshPositions: true,
            zIndex: 3001
          });


          $('.panel ul li').droppable({
            hoverClass: 'ondrop',
            drop: function( event, ui ) {
              /*$.post('@{Space.action()}',
                {
                    spaceid: "1234",
                    noteid: ui.helper.attr('id'),
                    scriptid: $(this).attr('id').substring(7)
                }
              );*/
              $(ui.draggable).remove();

            }
          });


          $('.panel h1').click( function(){
            if( ! $('.panel ul').is(':visible') )
                $('.panel ul').slideDown('fast');
            else
                $('.panel ul').slideUp('fast');
            return false;
          });

          $('.board').click( function(){
            if( $('.panel ul').is(':visible') )
                $('.panel ul').slideUp('fast');
          });


          $('.panel ul').width( $('.panel ul li').size() * 190 );

	  $(".dial").knob();

	  $(".body").editable( function(value, settings) { 
		     return(value);
		},{
		event : 'dblclick',
		type      : 'textarea',
		onblur : 'submit',
		cssclass : 'edition',
		tooltip   : 'double click to edit...',
		placeholder: '',
		width : 180,
		height : 140

	  });

	  $('.color').click( function(){
		var color = $(this).css("background");
		$(this).parents(".note").css( "background" , color );
	  });

});
