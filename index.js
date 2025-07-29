
//pedir nombre
const urlParams = new URLSearchParams(window.location.search);
const algo = urlParams.get('name');

window.onload = function() {
    if (algo){
        document.getElementById('userName').textContent = algo;
    }else{
        document.getElementById('userName').textContent = 'Stranger';
    }
};
//fondo canvas
const canvas = document.getElementById('particlesCanvas');
        const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles =  [];
const particleCount = 200;

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.1})`;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if( this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i = 0; i < particleCount; i++){
    particles.push(new Particle());
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let particle of particles) {
        particle.update();
        particle.draw();
    }
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

