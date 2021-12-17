<template>
  <div class="card-history">
    <div class="card-history__background-image" />
    <CallToAction class="card-history__button">History</CallToAction>
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue';

export default {
  name: 'SectionAboutCardHistory',
  components: {
    CallToAction,
  },
};
</script>

<style lang="scss" scoped>
.card-history {
  @include card-height;
  @include scale-card-background-image;
  position: relative;
  &__background-image {
    width: 100%;
    height: inherit;
    background-image: url('@/assets/images/castle-inside.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &__button {
    position: absolute;
    left: 0;
    bottom: 24px;
  }
}
</style>
