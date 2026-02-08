const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");

/* FRASES */
const frases = [
    "segura?",
    "enserio?",
    "nah te creo",
    "ya no se que poner XD",
    "si llegaste hasta aqui que gay"
];

let index = 0;
let scale = 1;

/* Botón NO */
noButton.addEventListener("click", () => {
    message.textContent = frases[index % frases.length];
    index++;

    scale += 0.2;
    yesButton.style.transform = `scale(${scale})`;
});

/* CONFETTI / BRILLITOS */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles() {
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            r: Math.random() * 3 + 2,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            alpha: 1
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(128,0,32,${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.015;

        if (p.alpha <= 0) particles.splice(i, 1);
    });

    if (particles.length > 0) {
        requestAnimationFrame(animateParticles);
    }
}

/* Botón WI */
yesButton.addEventListener("click", () => {
    createParticles();
    animateParticles();

    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                text-align:center;
                background:white;
                font-family:'Playfair Display', serif;
            ">
                <div>
                    <h1 style="color:#800020;font-size:46px;">
                        Sabía que dirías que sí
                    </h1>
                    <h2 style="color:#6b7a78;font-size:34px;margin-top:10px;font-family:'Poppins',sans-serif;">
                        Te quiero mucho♡
                    </h2>
                    <img src="fotito.jpg"
                         style="margin-top:30px;max-width:300px;border-radius:18px;">
                </div>
            </div>
        `;
    }, 600);
});
