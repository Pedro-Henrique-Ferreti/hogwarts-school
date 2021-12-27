<template>
  <div class="card-animals">
    <div class="card-animals__background-image"
      :key="key"
      :class="cardClasses"
    />
    <div class="card-animals__content">
      <div class="card-animals__title-wrapper">
        <h3 class="card-animals__title">Hogwarts</h3>
        <h4 class="card-animals__subtitle">Animals & Beasts</h4>
      </div>
      <CallToAction class="card-animals__button">Learn More</CallToAction>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutCardAnimals',
  data() {
    return {
      key: 0,
    };
  },
  computed: {
    cardClasses() {
      return {
        'card-animals__background-image--owl': this.key % 2 !== 0,
        'card-animals__background-image--cat': this.key % 2 === 0,
      };
    },
  },
  mounted() {
    setInterval(() =>{
      this.key++;
    }, 7000);
  },
};
</script>

<style lang="scss" scoped>
.card-animals {
  @include card-height;
  @include scale-card-background-image;
  background-color: $gray-2;
  position: relative;
  &__background-image {
    height: inherit;
    background-size: cover;
    background-position: center;
    &--owl {
      background-image: url('@/assets/images/animal-owl.webp');
      animation: card-background $animation-duration__slow ease-in-out;
    }
    &--cat {
      background-image: url('@/assets/images/black-cat.jpg');
      animation: card-background $animation-duration__slow ease-in-out;
    }
  }
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: $spacing__mobile;
    @media (min-width: $large-tablet-portrait-up) {
      margin: $spacing__desktop;
    }
  }
  &__title {
    color: $red-1;
    font-size: 24px;
    text-transform: uppercase;
  }
  &__subtitle {
    color: $golden-1;
  }
  &__button {
    position: absolute;
    bottom: 0;
  }
}
@keyframes card-background {
  from {
    opacity: 0.25;
  }
}
</style>
