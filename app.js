function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('toggle-theme');
  const icon = btn.querySelector('span');
  const theme = body.getAttribute('data-theme');
  if (theme === 'dark') {
    body.setAttribute('data-theme', 'light');
    icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // Aplica el tema guardado al cargar
  const saved = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', saved);

  // Crear botón de cambio de tema si no existe
  const nav = document.querySelector('.header__nav');
  let btn = document.getElementById('toggle-theme');
  if (nav && !btn) {
    btn = document.createElement('button');
    btn.className = 'header__button';
    btn.id = 'toggle-theme';
    btn.type = 'button';
    btn.title = 'Cambiar tema';
    btn.innerHTML = '<span class="fas fa-moon"></span>';
    btn.onclick = toggleTheme;
    nav.appendChild(btn);
  }

  // Ajustar icono según tema guardado
  if (btn) {
    const icon = btn.querySelector('span');
    icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
});

// Cambiar imagen principal al hacer clic en miniaturas
document.addEventListener('DOMContentLoaded', function() {
  const mainImg = document.querySelector('.product-container__image-show img');
  const thumbs = document.querySelectorAll('.product-container__images footer img');
  thumbs.forEach(img => {
    img.addEventListener('click', function() {
      mainImg.src = this.src;
    });
  });
});