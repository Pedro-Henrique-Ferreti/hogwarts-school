<template>
  <div class="banner">
    <div class="banner__icon">
      <IconGraduation />
    </div>
    <h1 class="banner__title">O.W.L.s & N.E.W.T.s</h1>
    <p class="banner__text">
      Read for your exams? <br />
      Take advantage of Tutor Service and preparation courses.
    </p>
    <CallToAction>See Courses</CallToAction>
  </div>  
</template>

<script>
import IconGraduation from '@/assets/images/icons/Graduation.vue';
import CallToAction from '@/components/CallToAction.vue';

export default {
  name: 'HomeSectionBanner',
  components: {
    IconGraduation,
    CallToAction,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 44px $mobile-padding 52px $mobile-padding;
  background-color: $white;
  position: relative;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: $red-1;
    position: absolute;
    top: -28px;
    left: $mobile-padding;
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
  }
}
</style>
