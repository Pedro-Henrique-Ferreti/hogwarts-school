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
$call-to-action__animation-duration: $animation-duration__fastest;
.call-to-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 16px 36px;
  transition: background-color $call-to-action__animation-duration ease-in-out;
  &--red {
    background-color: $red-1;
    &:hover {
      background-color: $blue-2;
    }
  }
  &--black {
    background-color: $gray-2;
    &:hover {
      background-color: $white;
      .call-to-action__content {
        color: $text;
        ::v-deep svg {
          fill: $text;
        }
      }
      .call-to-action__arrow-icon {
        fill: $text;
      }
    }
  }
  &__content {
    display: flex;
    align-items: center;
    color: $white;  
    text-transform: uppercase;
    transition: color $call-to-action__animation-duration ease-in-out;
    ::v-deep svg {
      fill: $white;
      margin-right: 24px;
      transition: fill $call-to-action__animation-duration ease-in-out;
    }
  }
  &__arrow-icon {
    fill: $white;
    height: 12px;
    margin-left: 16px;
    transition: all $call-to-action__animation-duration ease-in-out;
  }
}
</style>
