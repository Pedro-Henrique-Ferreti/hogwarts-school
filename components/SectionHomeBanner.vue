<template>
  <div class="banner sr-load-hidden">
    <div class="banner__icon">
      <IconGraduation />
    </div>
    <h1 class="banner__title">O.W.L.s & N.E.W.T.s</h1>
    <p class="banner__text">
      Read for your exams? <br />
      Take advantage of Tutor Service and preparation courses.
    </p>
    <CallToAction class="banner__button">See Courses</CallToAction>
  </div>  
</template>

<script>
import IconGraduation from '@/assets/images/icons/Graduation.vue';
import CallToAction from '@/components/CallToAction.vue';
import scrollReveal from '@/plugins/scrollReveal.js';

export default {
  name: 'SectionHomeBanner',
  components: {
    IconGraduation,
    CallToAction,
  },
  mounted() {
    scrollReveal('.banner', {
      origin: 'left',
    });
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  max-width: 675px;
  padding: 36px $spacing__mobile 52px $spacing__mobile;
  background-color: $white;
  position: relative;
  @media (min-width: $large-tablet-portrait-up) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    padding: 0 $spacing__desktop;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: $red-1;
    position: absolute;
    top: -28px;
    ::v-deep svg {
      fill: $white;
      width: 32px;
      height: 32px;
    }
  }
  &__title {
    font-size: 26px;
    color: $red-1;
    margin-bottom: 8px;
    @media (min-width: $large-tablet-portrait-up) {
      font-size: 40px;
      margin-bottom: 0;
    }
  }
  &__button {
    position: absolute;
    bottom: -28px;
    left: calc(50% - (174px / 2));
    @media (min-width: $large-tablet-portrait-up) {
      bottom: unset;
      left: unset;
      right: -40px;
    }
  }
}
</style>
