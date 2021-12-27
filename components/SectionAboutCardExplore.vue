<template>
  <div class="card-explore">
    <div class="card-explore__background-wrapper">
      <div class="card-explore__background-image" :class="backgroundClasses" />
    </div>
    <nav class="card-explore__nav">
      <ul class="card-explore__list">
        <li class="card-explore__item"
          v-for="item in menuItems" :key="item.id"
          :class="{ 'card-explore__item--active': activeItemId === item.id }"
          @mouseenter="activeItemId = item.id"
        >
          <a class="card-explore__link" href="#">{{ item.name }}</a>
        </li>
      </ul>
      <span class="card-explore__nav-text">Explore</span>
    </nav>
  </div>
</template>

<script>
const MENU_ITEMS = [
  { id: 0, name: 'Classrooms' },
  { id: 1, name: 'Magic' },
  { id: 2, name: 'Library' },
  { id: 3, name: 'Towers' },
  { id: 4, name: 'Dorms' },
  { id: 5, name: 'Passages' },
];

export default {
  name: 'SectionAboutCardExplore',
  data() {
    return {
      menuItems: MENU_ITEMS,
      activeItemId: 0,
    };
  },
  computed: {
    backgroundClasses() {
      return {
        'card-explore__background-image--classrooms': this.activeItemId === 0,
        'card-explore__background-image--magic': this.activeItemId === 1,
        'card-explore__background-image--library': this.activeItemId === 2,
        'card-explore__background-image--towers': this.activeItemId === 3,
        'card-explore__background-image--dorms': this.activeItemId === 4,
        'card-explore__background-image--passages': this.activeItemId === 5,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card-explore {
  @include card-height;
  @include scale-card-background-image;
  width: 100%;
  position: relative;
  overflow: unset;
  &__background-wrapper {
    overflow: hidden;
    height: inherit;
  }
  &__background-image {
    width: 68%;
    height: inherit;
    background-size: cover;
    margin-left: auto;
    background-position: center;
    &--classrooms {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/paint-and-quill-on-desk.jpg');
      background-position: initial;
    }
    &--magic {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/magic-wand-and-book.jpg');
      background-position: initial;
    }
    &--library {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/old-books.webp');
    }
    &--towers {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/dinning-area.jpg');
    }
    &--dorms {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/school-directors.jpg');
    }
    &--passages {
      animation: card-background $animation-duration__slow ease-in-out;
      background-image: url('@/assets/images/metal-castle-door.jpg');
      background-position: initial;
    }
  }
  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 160px;
    width: 32%;
    height: 100%;
    padding: 16px 0;
    background-color: $golden-1;
    position: absolute;
    top: 0;
    z-index: 1;
    @media (min-width: $desktop-up) {
      height: auto;
      bottom: -50px;
    }
  }
  &__nav-text {
    color: $red-1;
    line-height: 1;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    margin-top: 16px;
    margin-left: 16px;
    @media (max-width: $tablet-portrait-up) {
      display: none;
    }
  }
  &__item {
    width: 115%;
    cursor: pointer;
    &--active {
      animation: explore-menu-item $animation-duration__slow ease-in-out;
      background-color: $red-1;
    }
  }
  &__link {
    display: block;
    padding: 8px 50px 8px 16px;
    text-transform: uppercase;
    color: $white;
    font-weight: $font-medium;
    @media (max-width: $large-smartphone-up) {
      font-size: 14px;
    }
  }
}
@keyframes card-background {
  from {
    opacity: 0.25;
  }
}
@keyframes explore-menu-item {
  from {
    width: 0;
  }
}
</style>
