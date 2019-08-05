const openButton = document.querySelector('.header__menu-button');
const navigation = document.querySelector('.header-navigation');
const closeButton = document.querySelector('.header-navigation__close-button');

openButton.addEventListener('click', () => {
  if (!navigation.classList.contains('header-navigation-visible')) {
    navigation.classList.add('header-navigation-visible');
  }
});

closeButton.addEventListener('click', () => {
  navigation.classList.remove('header-navigation-visible');
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (navigation.classList.contains('header-navigation-visible')) {
      navigation.classList.remove('header-navigation-visible');
    }
  }
});

const navigationList = document.querySelector('.header-navigation-menu')
const navigationLinks = navigationList.querySelectorAll(".header-navigation-menu__link");

navigationList.addEventListener('click', (element) => {
  if (element.target.classList.contains('header-navigation-menu__link')) {
    if (!element.target.classList.contains('header-navigation-menu__link-active')) {
      Array.from(navigationLinks).forEach((navigationLink) => {
        if (navigationLink.classList.contains('header-navigation-menu__link-active')) {
        navigationLink.classList.remove('header-navigation-menu__link-active');
        }
      });
      element.target.classList.add('header-navigation-menu__link-active');
    }
  }
});

