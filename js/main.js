// poner año
document.getElementById('year').textContent = new Date().getFullYear();

// entrada hero
anime.timeline({duration:700, easing:'easeOutExpo'})
  .add({targets:'.hero-title', translateY: [-30,0], opacity:[0,1], delay:100})
  .add({targets:'.hero-sub', translateY: [-10,0], opacity:[0,1]}, '-=450')
  .add({targets:'.hero-desc', opacity:[0,1], translateY:[10,0]}, '-=400')
  .add({targets:'.avatar', scale:[0.9,1], opacity:[0,1], delay:200}, '-=500');

// animación chips flotantes
anime({
  targets: '.chip',
  translateY: [0, -6],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  delay: anime.stagger(120)
});

// pequeño parallax glow
window.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.glow');
  if(!glow) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  glow.style.transform = `translate(${x}px, ${y + 20}px)`;
});
