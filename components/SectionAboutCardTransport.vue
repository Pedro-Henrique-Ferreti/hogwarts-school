<template>
  <div class="card-transport">
    <div class="card-transport__background-image" />
    <div class="card-transport__content">
      <h3 class="card-transport__title">
        Transport <br />
        <span>informations</span>
      </h3>
      <CallToAction class="card-transport__button">Tickets & Subscriptions</CallToAction>
    </div>
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue';

export default {
  name: 'SectionAboutCardTransport',
  components: {
    CallToAction,
  },
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
    background-image: url('@/assets/images/hogwarts-train.webp');
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
    height: 44px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
