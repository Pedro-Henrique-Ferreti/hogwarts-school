<template>
  <a class="card-hogsmeade" href="#">
    <h2 class="card-hogsmeade__title">Hogsmeade Spring Break</h2>
    <p class="card-hogsmeade__text">Enrollment ends in two weeks</p>
    <span class="card-hogsmeade__button">Sign Up</span>
  </a>
</template>

<script>
export default {
  name: 'SectionHomeCardHogsmeade',
};
</script>

<style lang="scss" scoped>
.card-hogsmeade {
  width: 150px;
  height: 150px;
  padding: 16px;
  background-color: #{$blue-2}BF;
  position: relative;
  @media (min-width: $large-tablet-portrait-up) {
    width: 200px;
    height: 200px;
    padding: 32px;
  }
  &__title {
    color: $white;
    text-transform: uppercase;
    font-weight: $font-semibold;
    line-height: 18px;
    @media (min-width: $large-tablet-portrait-up) {
      font-size: 18px;
    }
  }
  &__text {
    font-size: 14px;
    margin-top: 8px;
    color: $white;
    line-height: 18px;
    @media (min-width: $large-tablet-portrait-up) {
      margin-top: 16px;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    padding: 0 24px;
    color: $white;
    background-color: $red-1;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: $font-medium;
    position: absolute;
    bottom: 0;
    right: 0;
    @media (min-width: $large-tablet-portrait-up) {
      height: 44px;
    }
  }
}
</style>
