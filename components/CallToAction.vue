<template>
  <a href="#" class="call-to-action">
    <slot />
    <IconArrow class="call-to-action__icon" />
  </a>
</template>

<script>
import IconArrow from '@/assets/images/icons/Arrow.vue';

export default {
  name: 'CallToAction',
  components: {
    IconArrow,
  },
};
</script>

<style lang="scss" scoped>
.call-to-action {
  display: inline-block;
  height: 56px;
  color: $white;
  background-color: $red-1;
  padding: 16px 36px;
  text-transform: uppercase;
  &__icon {
    fill: $white;
    height: 12px;
    padding-left: 16px;
  }
}
</style>
