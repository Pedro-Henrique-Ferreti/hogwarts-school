<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <SectionHome />
      <SectionAbout />
      <SectionHouses />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import SectionHome from '@/components/SectionHome.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionHouses from '@/components/SectionHouses.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    SectionHome,
    SectionAbout,
    SectionHouses,
    TheFooter,
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