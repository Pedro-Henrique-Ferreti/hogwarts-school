<template>
  <a href="#" class="call-to-action">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'CallToAction',
};
</script>

<style lang="scss" scoped>
.call-to-action {
  color: $white;
  background-color: $red-1;
  padding: 16px 36px;
  text-transform: uppercase;
}
</style>
