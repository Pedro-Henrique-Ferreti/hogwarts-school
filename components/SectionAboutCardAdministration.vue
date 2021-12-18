<template>
  <div class="card-administration">
    <h3 class="card-administration__title">Statue & administration</h3>
    <a class="card-administration__link" href="#">
      <span class="card-administration__text">
        Forbidden Sites
        <span>
          Regulation
          <IconArrow class="card-administration__icon" />
        </span>
      </span>
    </a>
  </div>
</template>

<script>
import IconArrow from '@/assets/images/icons/Arrow.vue';

export default {
  name: 'SectionAboutCardAdministration',
  components: {
    IconArrow,
  },
};
</script>

<style lang="scss" scoped>
.card-administration {
  @include card-height;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: $mobile-padding;
  background-color: $white;
  @media (min-width: $large-tablet-portrait-up) {
    padding: $desktop-padding;
  }
  &__title {
    font-weight: $font-medium;
    text-transform: uppercase;
  }
  &__link {
    width: fit-content;
  }
  &__text {
    display: flex;
    flex-direction: column;
    color: $red-1;
    span {
      color: $red-1;
      font-size: 24px;
      font-weight: $font-medium;
      text-transform: uppercase;
    }
  }
  &__icon {
    fill: $red-1;
    width: 24px;
    margin-left: 8px;
  }
}
</style>
