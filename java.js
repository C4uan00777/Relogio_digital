const horas = document.getElementById('Horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('Segundos');


const Relogio = setInterval(function time() {
    let dateToday = new Date(); /*new date serve como um vetor,
     posso armazenar valores ou variaveis dentro dele. */
    let hr = dateToday.getHours(); /*existem funções próprias para
    chamar horas minutos e segundos, mas isso a partir da variavel datahoje
    que funciona como um vetor */
    let min = dateToday.getMinutes();
    let S = dateToday.getSeconds();


if(hr < 10) hr = '0' + hr;

if(min < 10) min = '0' + min;

if(S < 10) S = '0' + S;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = S;

})
