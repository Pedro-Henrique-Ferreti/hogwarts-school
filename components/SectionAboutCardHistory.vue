<template>
  <div class="card-history">
    <div class="card-history__image" />
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
  background-color: $green-1;
  // height: $card-height__mobile;
  position: relative;
  overflow: hidden;
  &:hover {
    .card-history__image {
      transform: scale(1.1);
    }
  }
  &__image {
    width: 100%;
    height: inherit;
    background-image: url('@/assets/images/castle-inside.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform .2s ease-in-out;
  }
  &__button {
    position: absolute;
    left: 0;
    bottom: 24px;
  }
}
</style>
