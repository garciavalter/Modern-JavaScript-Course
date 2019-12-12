const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');



button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
    console.log('you clicked');
});

popupClose.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})
