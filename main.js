let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 55,
});
 
typewriter
  .pauseFor(1500)
  .typeString('<span style="color:#788df3;">Programadora Web y estudiante de Ingeniería de Software</span>')
  .pauseFor(50)
  .deleteChars(10)
  .start();
