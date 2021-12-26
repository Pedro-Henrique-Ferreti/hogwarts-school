<template>
  <div class="card-house-heads">
    <div class="card-house-heads__background-image" />
    <CallToAction class="card-house-heads__button">Heads of The Houses</CallToAction>
  </div>
</template>

<script>
export default {
  name: 'SectionHousesCardHouseHeads',
};
</script>

<style lang="scss" scoped>
.card-house-heads {
  @include card-height;
  @include scale-card-background-image;
  position: relative;
  &__background-image {
    width: 100%;
    height: inherit;
    background-image: url('@/assets/images/house-inside.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    height: 44px;
  }
}
</style>
