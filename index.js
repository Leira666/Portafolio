function namek(){
    const nombre = document.getElementById('nombreUsuario').value;
    localStorage.setItem('nombreUsuario', nombre);
    window.location.href = 'index.hmtl';
}
