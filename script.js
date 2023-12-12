function toggleMenu() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';

  var menu = document.querySelector('.menu');
  menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
  
  var body = document.querySelector('body');
  body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}