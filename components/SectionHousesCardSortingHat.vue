<template>
  <a class="card-sorting-hat" href="#">
    <div class="card-sorting-hat__content">
      <IconGraduation class="card-sorting-hat__icon" />
      <div class="card-sorting-hat__title-wrapper">
        <h3 class="card-sorting-hat__title">Sorting Hat</h3>
        <h4 class="card-sorting-hat__subtitle">Take a shot!</h4>
      </div>
    </div>
  </a>
</template>

<script>
import IconGraduation from '@/assets/images/icons/Graduation.vue';

export default {
  name: 'SectionHousesCardSortingHat',
  components: {
    IconGraduation,
  },
};
</script>

<style lang="scss" scoped>
.card-sorting-hat {
  display: block;
  padding: $spacing__mobile;
  background-color: $gray-1;
  &__content {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  &__title-wrapper {
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: $golden-1;
    font-size: 20px;
    font-weight: $font-medium;
    text-transform: uppercase;
  }
  &__subtitle {
    color: $white;
  }
  &__icon {
    fill: $golden-1;
    height: 48px;
  }
  @media (min-width: $large-tablet-portrait-up) {
    display: flex;
    align-items: center;
    padding-left: $spacing__desktop;
    padding-right: $spacing__desktop;
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
