const icons = document.querySelectorAll('.svyaz__item img');

function resetIcons() {
  icons.forEach(icon => icon.classList.remove('selected'));
}

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    resetIcons();
    icon.classList.add('selected');
  });
});
