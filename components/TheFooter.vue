<template>
  <footer class="footer">
    <a class="footer__logo" href="#">Hogwarts</a>
    <p class="footer__copyright">
      Pedro Ferreti © 2021. Original design inspired by <a href="#">Frederica Corneli</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $spacing__mobile;
  gap: 16px;
  &__logo {
    color: $red-1;
    font-size: 20px;
    font-family: $font-family-arbutus-slab;
    text-transform: uppercase;
  }
  &__copyright {
    text-align: center;
  }
  @media (min-width: $large-tablet-portrait-up) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    padding-left: $spacing__desktop;
    padding-right: $spacing__desktop;
  }
  @media (min-width: $tablet-landscape-up) {
    position: relative;
    &__logo {
      position: absolute;
      left: $spacing__desktop;
    }
  }
}
</style>
