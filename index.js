const nombre = localStorage.getItem('nameK');
if (nombre){
    document.getElementById.getItem('mensajeBienvenida').textContent = 
    'Hi, ${nombre}! Welcome to my portafolio'= 'index.html';
}else {
    document.getElementById('mensajedefalla').textContent = 
    'Hey! put your name';
}