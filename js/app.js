  const body = document.getElementById('body');
  const switcher = document.querySelector('.switcher');

  switcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

