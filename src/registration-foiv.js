document.addEventListener('wpcf7mailfailed', function (event) {
  let errorPopup = document.querySelector('.popup__error');
  openPopup(errorPopup);
}, false);

document.addEventListener('wpcf7mailsent', function (event) {
  let successPopup = document.querySelector('.popup__success');
  openPopup(successPopup);
}, false);
