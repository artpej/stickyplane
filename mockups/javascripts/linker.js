$(document).ready(function(){

	$.initLinker();

	$.bindConnections("click", function(connection) { 
                                $('#boardEdit').modal(connection);
                        });

	$(".board-item").makeDraggable();

	$(".link-init").makeSource(".board-item");

	$(".board-item").makeTarget();

});
