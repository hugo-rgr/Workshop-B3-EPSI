console.log(map.js);
function display_map(){
	console.log('display');
    var map = L.map('map').setView([47.13417, 2.592773], 6);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	var marker = L.marker([51.5, -0.09]).addTo(map);
	var circle = L.circle([51.508, -0.11], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map);
}