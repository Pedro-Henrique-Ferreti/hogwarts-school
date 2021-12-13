<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__logo-wrapper">
        <a href="#home" class="header__logo">Hogwarts</a>
        <span class="header__logo-text">
          School of Witchcraft <br />
          and Wizardry
        </span>
      </div>
      <div class="header__menu" :class="{ 'header__menu--open': menuIsOpen }">
        <ul class="header__list">
          <li class="header__item">
            <a href="#home" class="header__link header__link--active">Home</a>
          </li>
          <li class="header__item">
            <a href="#about" class="header__link">About</a>
          </li>
          <li class="header__item">
            <a href="#houses" class="header__link">Houses</a>
          </li>
        </ul>
      </div>
      <button class="header__toggle-menu" @click="menuIsOpen = !menuIsOpen">
        open/close menu
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      menuIsOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: $header-height;
  background-color: $white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  &__logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding-left: 136px;
  }
  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 74px;
    color: $white;
    background-color: $red-1;
    text-transform: uppercase;
    font-family: $font-family-arbutus-slab;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  &__menu {
    width: 100%;
    background-color: $white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px -15px;
    padding: 24px;
    position: fixed;
    top: -50%;
    left: 0;
    right: 0;
    z-index: 8;
    transition: top .4s ease-in-out;
    &--open {
      top: $header-height;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  &__item {
    display: flex;
  }
  &__link {
    font-size: 18px;
    font-weight: $font-medium;
    text-transform: uppercase;
    &--active {
      position: relative;
      color: $red-1;
      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        background-color: $red-1;
        position: absolute;
        bottom: 0;
        left: -20px;
      }
    }
  }
}
</style>
