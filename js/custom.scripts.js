const imageLinkBox = document.querySelector('.img-link')
const currentBackground = document.querySelector('.attachment-post-thumbnail')
const newBackground = document.querySelector('.attachment-post-thumbnail-gif')

imageLinkBox.addEventListener('pointerover', function (event) {
  currentBackground.classList.add('custom-hidden')
  newBackground.classList.remove('custom-hidden')
})
imageLinkBox.addEventListener('pointerout', function (event) {
  currentBackground.classList.remove('custom-hidden')
  newBackground.classList.add('custom-hidden')
})