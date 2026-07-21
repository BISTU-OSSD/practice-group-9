document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const root = document.documentElement;
  const saveTheme = localStorage.getItem('theme') || 'light';

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggleBtn.textContent = '亮色模式';
    } else {
      root.removeAttribute('data-theme');
      toggleBtn.textContent = '暗色模式';
    }
    localStorage.setItem('theme', theme);
  };

  applyTheme(saveTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = root.hasAttribute('data-theme');
    applyTheme(isDark ? 'light' : 'dark');
  });
});
