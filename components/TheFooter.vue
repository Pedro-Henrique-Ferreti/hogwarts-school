<template>
  <footer class="footer">
    <a class="footer__logo" href="#">Hogwarts</a>
    <p class="footer__copyright">
      © 2021 <a class="footer__link" href="https://github.com/Pedro-Henrique-Ferreti" target="_blank" rel="noopener">Pedro Ferreti</a>.
      Original design inspired by <a class="footer__link" href="https://www.behance.net/gallery/62432591/Hogwarts-School-Web-App-concept?tracking_source=search_projects_recommended%7Ccollege" target="_blank" rel="noopener">Frederica Corneli</a>.
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
  background-color: $white;
  &__logo {
    color: $red-1;
    font-size: 20px;
    font-family: $font-family-arbutus-slab;
    text-transform: uppercase;
  }
  &__copyright {
    text-align: center;
  }
  &__link {
    &:hover {
      text-decoration: underline;
    }
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
