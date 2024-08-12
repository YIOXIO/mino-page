const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');

function openPopup(popupElement) {
  popupElement.classList.add('popup_is_active');
  popupElement.addEventListener('click', handleOverlayClosePopup);
  document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is_active');
  popupElement.removeEventListener('click', handleOverlayClosePopup);
  document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function handleEscClosePopup(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is_active'));
  }
}

if (buttonClosePopup) {
  buttonClosePopup.addEventListener('click', () => closePopup(popup));
}



document.addEventListener('wpcf7mailfailed', function (event) {
  let errorPopup = document.querySelector('.popup__error');
  openPopup(errorPopup);
}, false);

document.addEventListener('wpcf7mailsent', function (event) {
  let successPopup = document.querySelector('.popup__success');
  openPopup(successPopup);
}, false);
