var serviceURL = "http://192.168.1.21/LatinShow/www/ajax/";

var lineas;

$('#pag_principalid').bind('pageinit', function(event) {
	getLineasList();
});

function getLineasList() {
	$.getJSON(serviceURL + 'carga_principal.php', function(data) {
		$('#cancionesList li').remove();
		lineas = data.items;
		$.each(lineas, function(index, linea) {

			$('#cancionesList').append('<li style="padding:5px;">'+
					'<a href="employeedetails.html?id=' + linea.nombre + '">' +
					'<img src="pics/' + linea.nombre + '.jpg"/>' +
					'<h4 style="display:block;margin: 0 auto;">' + linea.nombre + '</h4>' +
					'<p style="display:block;margin: 0 auto;">' + linea.artista + '</p>' +
					'<FONT SIZE=2 COLOR="red">' + linea.genero + '</FONT></a></li>');
			

		});
		$('#cancionesList').listview('refresh');
		
	});
}

