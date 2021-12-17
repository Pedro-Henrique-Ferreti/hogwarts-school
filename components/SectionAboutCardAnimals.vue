<template>
  <div class="card-animals">
    <div class="card-animals__background-image" />
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
};
</script>

<style lang="scss" scoped>
.card-animals {
  @include card-height;
  @include scale-card-background-image;
  position: relative;
  &__background-image {
    height: inherit;
    background-image: url('@/assets/images/animal-owl.png');
    background-size: cover;
    background-position: center;
  }
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: $mobile-padding;
    @media (min-width: $large-tablet-portrait-up) {
      margin: $desktop-padding;
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
</style>
