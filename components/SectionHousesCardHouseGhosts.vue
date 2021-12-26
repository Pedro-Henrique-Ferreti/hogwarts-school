<template>
  <div class="card-house-ghosts">
    <div class="card-house-ghosts__background-image" />
    <CallToAction class="card-house-ghosts__button" color="black">
      <template #icon>
        <IconGhost class="card-house-ghosts__icon" />
      </template>
      House Ghosts
    </CallToAction>
  </div>
</template>

<script>
import IconGhost from '@/assets/images/icons/Ghost.vue';

export default {
  name: 'SectionHousesCardHouseGhosts',
  components: {
    IconGhost,
  },
};
</script>

<style lang="scss" scoped>
.card-house-ghosts {
  @include card-height;
  @include scale-card-background-image;
  position: relative;
  background-color: $gray-2;
  &__background-image {
    width: 100%;
    height: inherit;
    background-image: url('@/assets/images/castle-corridor.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
  }
  &__button {
    width: 100%;
    max-width: 518px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &__icon {
    height: 32px;
  }
}
</style>
