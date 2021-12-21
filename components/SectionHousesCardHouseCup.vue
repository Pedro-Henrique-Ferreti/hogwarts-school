<template>
  <a class="card-house-cup" href="#">
    <div class="card-house-cup__content">
      <IconTrophy class="card-house-cup__icon" />
      <h3 class="card-house-cup__title">House Cup</h3>
    </div>
  </a>
</template>

<script>
import IconTrophy from '@/assets/images/icons/Trophy.vue';

export default {
  name: 'SectionHousesCardHouseCup',
  components: {
    IconTrophy,
  },
};
</script>

<style lang="scss" scoped>
.card-house-cup {
  display: block;
  padding: $spacing__mobile;
  background-color: $gray-2;
  &__content {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  &__icon {
    fill: $golden-1;
    height: 48px;
  }
  &__title {
    color: $white;
    font-size: 20px;
    font-weight: $font-medium;
    text-transform: uppercase;
  }
  @media (min-width: $large-tablet-portrait-up) {
    display: flex;
    align-items: center;
    padding: 0 $spacing__desktop;
    &__content {
      flex-direction: column;
      align-items: flex-start;
    }
    &__icon {
      height: 56px;
    }
  }
}
</style>
