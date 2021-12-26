<template>
  <header id="header" class="header">
    <nav class="header__nav">
      <div class="header__logo-wrapper">
        <a href="#home" class="header__logo">Hogwarts</a>
        <span class="header__logo-text">
          School of <br class="header__logo-text-br--desktop" /> 
          Witchcraft <br />
          and Wizardry
        </span>
      </div>
      <div class="header__menu" :class="{ 'header__menu--open': menuIsOpen }">
        <ul class="header__list">
          <li class="header__item" @click="menuIsOpen = false">
            <a class="header__link"
              href="#home"
              :class="{ 'header__link--active': activeSectionId === 'home' }"
            >Home</a>
          </li>
          <li class="header__item" @click="menuIsOpen = false">
            <a class="header__link"
              href="#about"
              :class="{ 'header__link--active': activeSectionId === 'about' }"
            >About</a>
          </li>
          <li class="header__item" @click="menuIsOpen = false">
            <a class="header__link"
              href="#houses"
              :class="{ 'header__link--active': activeSectionId === 'houses' }"
            >Houses</a>
          </li>
          <li class="header__item header__item--spacing"
            @click="menuIsOpen = false"
          >
            <a href="#" class="header__link">
              <IconMagicWand />
            </a>
          </li>
        </ul>
      </div>
      <button class="header__menu-button" @click="menuIsOpen = !menuIsOpen">
        <component :is="menuIsOpen ? 'IconClose' : 'IconMenu'" />
      </button>
    </nav>
  </header>
</template>

<script>
import IconMenu from '@/assets/images/icons/Menu.vue';
import IconClose from '@/assets/images/icons/Close.vue';
import IconMagicWand from '@/assets/images/icons/MagicWand.vue';

export default {
  name: 'TheHeader',
  components: {
    IconMenu,
    IconClose,
    IconMagicWand,
  },
  data() {
    return {
      menuIsOpen: false,
      activeSectionId: 'home',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.setActiveLink);
  },
  methods: {
    setActiveLink() {
      const sections = document.querySelectorAll('section[id]');
      const headerHeight = document.querySelector('header#header').offsetHeight;
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const distanceFromTop = section.offsetTop - headerHeight;

        if (scrollY > distanceFromTop && scrollY <= distanceFromTop + sectionHeight) {
          this.activeSectionId = section.getAttribute('id');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @include container;
  width: 100%;
  max-width: $max-device-size;
  height: $header-height__mobile;
  background-color: $white;
  box-shadow: $box-shadow__header;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  @media (min-width: $large-tablet-landscape-up) {
    height: $header-height__desktop;
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-right: $spacing__mobile;
    position: relative;
    @media (min-width: $large-tablet-landscape-up) {
      padding-right: 90px;
    }
  }
  &__logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding-left: 128px; 
    @media (min-width: $large-smartphone-up) {
      padding-left: 136px;
    }
    @media (min-width: $large-tablet-landscape-up) {
      padding-left: 253px;
    }
  }
  &__logo-text {
    line-height: 18px;
    @media (max-width: $large-smartphone-up) {
      font-size: 14px; 
    }
  }
  &__logo-text-br--desktop {
    @media (max-width: $large-tablet-landscape-up) {
      display: none;
    }
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
    @media (min-width: $large-tablet-landscape-up) {
      width: 229px;
      height: 110px;
      font-size: 26px;
    }
  }
  &__menu {
    width: 100%;
    background-color: $white;
    box-shadow: $box-shadow__header;
    padding: 24px;
    position: fixed;
    top: -50%;
    left: 0;
    right: 0;
    z-index: 8;
    transition: top $animation-duration__slow ease-in-out;
    &--open {
      top: $header-height__mobile;
    }
    @media (min-width: $large-tablet-portrait-up) {
      display: flex;
      width: initial;
      position: initial;
      padding: 0;
      box-shadow: none;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (min-width: $large-tablet-portrait-up) {
      flex-direction: row;
      gap: 40px;
    }
  }
  &__item {
    display: flex;
    &--spacing {
      @media (min-width: $large-tablet-portrait-up) {
        margin-left: 24px;
      }
    }
  }
  &__link {
    font-size: 18px;
    font-weight: $font-medium;
    text-transform: uppercase;
    transition: color $animation-duration__fastest ease-in-out;
    ::v-deep svg {
      width: 32px;
      height: 32px;
    }
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
        animation: line $animation-duration__fastest ease-in-out;
      }
    }
  }
  &__menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    ::v-deep svg {
      height: 20px;  
    }
    @media (min-width: $large-tablet-portrait-up) {
      display: none;
    }
  }
}

@keyframes line {
  from {
    left: -50px;
    width: 0;
  }
}
</style>
