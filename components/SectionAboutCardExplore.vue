<template>
  <div class="card-explore">
    <div class="card-explore__background-wrapper">
      <div class="card-explore__background-image" />
    </div>
    <nav class="card-explore__nav">
      <ul class="card-explore__list">
        <li class="card-explore__item">
          <a class="card-explore__link" href="#">Classrooms</a>
        </li>
        <li class="card-explore__item">
          <a class="card-explore__link" href="#">Magic</a>
        </li>
        <li class="card-explore__item card-explore__item--active">
          <a class="card-explore__link" href="#">Library</a>
        </li>
        <li class="card-explore__item">
          <a class="card-explore__link" href="#">Towers</a>
        </li>
        <li class="card-explore__item">
          <a class="card-explore__link" href="#">Dorms</a>
        </li>
        <li class="card-explore__item">
          <a class="card-explore__link" href="#">Passages</a>
        </li>
      </ul>
      <span class="card-explore__nav-text">Explore</span>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutCardExplore',
};
</script>

<style lang="scss" scoped>
.card-explore {
  @include card-height;
  @include scale-card-background-image;
  width: 100%;
  position: relative;
  overflow: unset;
  &__background-wrapper {
    overflow: hidden;
    height: inherit;
  }
  &__background-image {
    width: 75%;
    height: inherit;
    background-image: url('@/assets/images/old-books.png');
    background-size: cover;
    margin-left: auto;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 160px;
    width: 32%;
    height: 100%;
    padding: 16px 0;
    background-color: $golden-1;
    position: absolute;
    top: 0;
    z-index: 1;
    @media (min-width: $desktop-up) {
      height: auto;
      bottom: -50px;
    }
  }
  &__nav-text {
    color: $red-1;
    line-height: 1;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    margin-top: 16px;
    margin-left: 16px;
    @media (max-width: $tablet-portrait-up) {
      display: none;
    }
  }
  &__item {
    width: 115%;
    &--active {
      background-color: $red-1;
    }
  }
  &__link {
    display: block;
    padding: 8px 50px 8px 16px;
    text-transform: uppercase;
    color: $white;
    font-weight: $font-medium;
    @media (max-width: $large-smartphone-up) {
      font-size: 14px;
    }
  }
}
</style>
