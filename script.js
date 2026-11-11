// Scroll reveals:

ScrollReveal().reveal('.project-card', {
  distance: '40px',
  origin: 'bottom',
  duration: 800,
  interval: 150
});

ScrollReveal().reveal('.about-content', {
  distance: '40px',
  origin: 'bottom',
  duration: 400,
});

// Dark/Light mode toggler:

(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';

  // Saving/loading the user's choice:
  function getSavedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function saveTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';

  const icon = document.createElement('span');
  icon.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  button.append(icon, label);

  function applyTheme(theme) {
    const isLight = theme === 'light';
    root.classList.toggle('light-mode', isLight);
    icon.textContent = isLight ? '☾' : '☀';
    label.textContent = isLight ? 'Dark mode' : 'Light mode';
  }

  button.addEventListener('click', function () {
    const next = root.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(next);
    saveTheme(next);
  });

  applyTheme(getSavedTheme() === 'light' ? 'light' : 'dark');
  document.body.appendChild(button);
})();