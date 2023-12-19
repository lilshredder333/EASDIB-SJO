function toggleMenu() {
  var overlay = document.getElementById('overlay');
  var btncarrusel = document.getElementById('navigation-manual');

  // Restablecer estilos de los botones del carrusel
  

  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';

  var menu = document.querySelector('.menu');
  menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';

  var body = document.querySelector('body');
  body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';

  // Verificar si el overlay está visible después de restablecer los estilos
  if (overlay.style.display === 'block') {
      // Si está visible, ocultar el botón
      btncarrusel.style.display = 'none';
  } else {
      // Si no está visible, mostrar el botón
      btncarrusel.style.display = 'block';
      btncarrusel.style.transition = 'none'; // Deshabilitar temporalmente las transiciones    
  }
}


  

    


