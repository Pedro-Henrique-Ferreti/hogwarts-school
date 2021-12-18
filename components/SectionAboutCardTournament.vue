<template>
  <div class="card-tournament">
    <div class="card-tournament__container">
      <IconTrophy class="card-tournament__icon" />
      <div class="card-tournament__title-wrapper">
        <h4 class="card-tournament__subtitle">128th Edition</h4>
        <h3 class="card-tournament__title">Triwizard Tournament</h3>
      </div>
      <a class="card-tournament__link" href="#">
        How to apply
        <IconArrow />
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
}
</style>
