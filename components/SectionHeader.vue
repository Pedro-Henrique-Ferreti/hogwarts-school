<template>
  <header class="section-header">
    <h3 class="section-header__subtitle sr-load-hidden">{{ subtitle }}</h3>
    <h2 class="section-header__title sr-load-hidden">
      <slot />
    </h2>
  </header>
</template>

<script>
import scrollReveal from '@/plugins/scrollReveal.js';

export default {
  name: 'SectionHeader',
  props: {
    subtitle: {
      type: String,
      required: true,
    },
  },
  mounted() {
    scrollReveal('.section-header__subtitle', { origin: 'right' });
    scrollReveal('.section-header__title', { origin: 'left' });
  },
};
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: $blue-1;
  padding: 16px 0;
  overflow: hidden;
  &__subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;
    font-size: 14px;
    &::before, &::after {
      content: '';
      display: block;
      width: 48px;
      height: 1px;
      background-color: $white;
      margin: 0 8px;
    }
  }
  &__title {
    font-size: 24px;
    font-weight: $font-medium;
    color: $golden-1;
    text-transform: uppercase;
  }
}
</style>
