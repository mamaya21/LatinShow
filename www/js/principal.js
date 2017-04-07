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

			$('#cancionesList').append('<li><a href="employeedetails.html?id=' + linea.nombre + '">' +
					'<img src="pics/' + linea.nombre + '.jpg"/>' +
					'<h4>' + linea.nombre + '</h4>' +
					'<p>' + linea.artista + '</p>' +
					'<p>' + linea.genero + '</p>');
			

		});
		$('#cancionesList').listview('refresh');
		
	});
}

