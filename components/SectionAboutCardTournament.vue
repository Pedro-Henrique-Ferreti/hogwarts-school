<template>
  <div class="card-tournament">
    <div class="card-tournament__body">
      <IconTrophy class="card-tournament__icon" />
      <div class="card-tournament__title-wrapper">
        <h4 class="card-tournament__subtitle">128th Edition</h4>
        <h3 class="card-tournament__title">Triwizard Tournament</h3>
      </div>
    </div>
    <div class="card-tournament__footer">
      <a class="card-tournament__link" href="#">
        How to apply
        <IconArrow class="card-tournament__link-icon" />
      </a>
    </div>
  </div>
</template>

<script>
import IconTrophy from '@/assets/images/icons/Trophy.vue';
import IconArrow from '@/assets/images/icons/Arrow.vue';

export default {
  name: 'SectionAboutCardTournament',
  components: {
    IconTrophy,
    IconArrow,
  },
};
</script>

<style lang="scss" scoped>
.card-tournament {
  width: 100%;
  padding: $mobile-padding;
  background-color: $gray-2;
  @media (min-width: $large-tablet-portrait-up) {
    padding: 24px $desktop-padding;
  }
  @media (min-width: $desktop-up) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    position: relative;
  }
  &__icon {
    height: 48px;
    fill: $golden-1;
    @media (min-width: $desktop-up) {
      height: 100px;
    }
  }
  &__body {
    display: flex;
    gap: 16px;
    @media (min-width: $desktop-up) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
  }
  &__link,
  &__title,
  &__subtitle {
    color: $golden-1;
  }
  &__subtitle {
    font-size: 18px;
  }
  &__title {
    font-size: 24px;
    font-weight: $font-semibold;
    @media (max-width: $large-smartphone-up) {
      font-size: 20px;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 24px;
    @media (min-width: $desktop-up) {
      position: absolute;
      margin-top: 0;
      bottom: 24px;
      right: 24px;
    }
  }
  &__link {
    display: inline-block;
  }
  &__link-icon {
    height: 10px;
    fill: $golden-1;
    margin-left: 8px;
  }
}
</style>
