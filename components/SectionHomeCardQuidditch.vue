<template>
  <a class="card-quidditch" href="#">
    <IconQuidditch class="card-quidditch__icon" />
    <h2 class="card-quidditch__text">Quidditch Life</h2>
  </a>
</template>

<script>
import IconQuidditch from '@/assets/images/icons/Quidditch.vue';

export default {
  name: 'SectionHomeCardQuidditch',
  components: {
    IconQuidditch,
  },
};
</script>

<style lang="scss" scoped>
.card-quidditch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #{$gray-2}BF;
  @media (min-width: $large-tablet-portrait-up) {
    width: 200px;
    height: 200px;
  }
  &__icon {
    fill: $white;
    height: 45px;
  }
  &__text {
    color: $white;
    font-weight: $font-medium;
    text-transform: uppercase;
    margin-top: 16px;
  }
}
</style>
