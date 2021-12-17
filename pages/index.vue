<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <SectionHome />
      <SectionAbout />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import SectionHome from '@/components/SectionHome.vue';
import SectionAbout from '@/components/SectionAbout.vue';

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    SectionHome,
    SectionAbout,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: $header-height__mobile;
  @media (min-width: $large-tablet-landscape-up) {
    padding-top: $header-height__desktop;
  }
}
</style>