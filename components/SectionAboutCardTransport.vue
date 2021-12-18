<template>
  <div class="card-transport">
    <div class="card-transport__background-image" />
    <div class="card-transport__content">
      <h3 class="card-transport__title">
        Transport <br />
        <span>informations</span>
      </h3>
      <a class="card-transport__button" href="#">Tickets & Subscriptions</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutCardTransport',
};
</script>

<style lang="scss" scoped>
.card-transport {
  @include card-height;
  @include scale-card-background-image;
  width: 100%;
  position: relative;
  &__background-image {
    width: 100%;
    height: inherit;
    background-image: url('@/assets/images/hogwarts-train.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $spacing__mobile;
    @media (min-width: $large-tablet-portrait-up) {
      padding: $spacing__desktop;
    }
  }
  &__title {
    color: $red-1;
    font-size: 18px;
    span {
      color: $red-1;
      font-size: 24px;
      font-weight: $font-medium;
    }
  }
  &__button {
    display: inline-flex;
    align-items: center;
    height: 44px;
    color: $white;
    background-color: $red-1;
    padding: 0 24px;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
