<template>
  <a href="#" class="call-to-action" :class="callToActionClasses">
    <span class="call-to-action__content">
      <slot name="icon" />
      <slot />
    </span>
    <IconArrow class="call-to-action__arrow-icon" />
  </a>
</template>

<script>
import IconArrow from '@/assets/images/icons/Arrow.vue';

const VALID_COLORS = ['red', 'black'];

export default {
  name: 'CallToAction',
  components: {
    IconArrow,
  },
  props: {
    color: {
      type: String,
      default: VALID_COLORS[0],
      validator(color) {
        return VALID_COLORS.includes(color);
      },
    },
  },
  computed: {
    callToActionClasses() {
      return {
        'call-to-action--red': this.color === VALID_COLORS[0],
        'call-to-action--black': this.color === VALID_COLORS[1],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.call-to-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 16px 36px;
  &--red {
    background-color: $red-1;
  }
  &--black {
    background-color: $gray-2;
  }
  &__content {
    display: flex;
    align-items: center;
    color: $white;  
    text-transform: uppercase;
    ::v-deep svg {
      fill: $white;
      margin-right: 24px;
    }
  }
  &__arrow-icon {
    fill: $white;
    height: 12px;
    margin-left: 16px;
  }
}
</style>
