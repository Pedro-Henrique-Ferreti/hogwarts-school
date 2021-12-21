<template>
  <a class="card-house-link" href="#" :class="cardClasses">
    <h3 class="card-house-link__title">
      <slot />
    </h3>
    <IconArrow class="card-house-link__icon" />
  </a>
</template>

<script>
import IconArrow from '@/assets/images/icons/Arrow.vue';

const VALID_COLORS = ['red', 'green', 'golden', 'blue'];

export default {
  name: 'SectionHousesCardHouseLink',
  components: {
    IconArrow,
  },
  props: {
    color: {
      type: String,
      default: VALID_COLORS[0],
      validator(color) {
        return VALID_COLORS.includes(color);
      },
    },
  },
  computed: {
    cardClasses() {
      return {
        'card-house-link--red': this.color === VALID_COLORS[0],
        'card-house-link--green': this.color === VALID_COLORS[1],
        'card-house-link--golden': this.color === VALID_COLORS[2],
        'card-house-link--blue': this.color === VALID_COLORS[3],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card-house-link {
  @include card-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px $spacing__mobile;
  position: relative;
  @media (max-width: $large-tablet-portrait-up) {
    height: auto;
  }
  &--red {
    background-color: $red-1;
  }
  &--blue {
    background-color: $blue-1;
  }
  &--golden {
    background-color: $golden-1;
  }
  &--green {
    background-color: $green-1;
  }
  &__title {
    color: $white;
    font-size: 24px;
    font-family: $font-family-arbutus-slab;
    text-transform: uppercase;
    @media (min-width: $large-tablet-landscape-up) {
      font-size: 32px;
    }
  }
  &__icon {
    fill: $white;
  }
  @media (min-width: $large-tablet-portrait-up) {
    justify-content: center;
    &__icon {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }
  }
}
</style>
