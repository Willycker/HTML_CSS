const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
	let dataToday = new Date();
	let hr = dataToday.getHours();
	let min = dataToday.getMinutes();
	let s = dataToday.getSeconds();
	
	if (hr < 10) hr = '0' + hr;
	if (min < 10) min = '0' + min;
	if (s < 10) s = '0' + s;
	
	horas.textContent = hr;
	minutos.textContent = min;
	segundos.textContent = s;
})