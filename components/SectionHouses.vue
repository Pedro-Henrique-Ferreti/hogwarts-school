<template>
  <section class="houses" id="houses">
    <SectionHeader subtitle="Know More">Meet the Houses</SectionHeader>
    <div class="houses__top-row">
      <CardHouseGhosts />
      <div class="houses__small-cards-wrapper">
        <CardSortingHat />
        <CardHouseCup class="houses__card-house-cup" />
      </div>
      <CardHouseHeads class="houses__card-house-heads" />
    </div>
    <div class="houses__bottom-row">
      <CardInformation class="houses__card-information" />
      <CardHouseLink class="houses__card-griffyndor" color="red">Griffyndor</CardHouseLink>
      <CardHouseLink class="houses__card-ravenclaw" color="blue">Ravenclaw</CardHouseLink>
      <CardHouseLink class="houses__card-hufflepuff" color="golden">Hufflepuff</CardHouseLink>
      <CardHouseLink class="houses__card-slytherin" color="green">Slytherin</CardHouseLink>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import CardHouseGhosts from '@/components/SectionHousesCardHouseGhosts.vue';
import CardHouseCup from '@/components/SectionHousesCardHouseCup.vue';
import CardSortingHat from '@/components/SectionHousesCardSortingHat.vue';
import CardHouseHeads from '@/components/SectionHousesCardHouseHeads.vue';
import CardHouseLink from '@/components/SectionHousesCardHouseLink.vue';
import CardInformation from '@/components/SectionHousesCardInformation.vue';

import scrollReveal from '@/plugins/scrollReveal.js';

export default {
  name: 'SectionHouses',
  components: {
    SectionHeader,
    CardHouseGhosts,
    CardHouseCup,
    CardSortingHat,
    CardHouseHeads,
    CardHouseLink,
    CardInformation,
  },
  mounted() {
    scrollReveal('.houses__card-griffyndor', {
      origin: 'left',
    });
    scrollReveal('.houses__card-ravenclaw', {
      origin: 'left',
      delay: 350,
    });
    scrollReveal('.houses__card-hufflepuff', {
      origin: 'left',
      delay: 550,
    });
    scrollReveal('.houses__card-slytherin', {
      origin: 'left',
      delay: 750,
    });
  },
};
</script>

<style lang="scss" scoped>
.houses {
  &__top-row {
    @media (min-width: $large-tablet-portrait-up) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: $desktop-up) {
      grid-template-columns: 45% 20% 35%;
    }
  }
  &__card-house-heads {
    @media (min-width: $large-tablet-portrait-up) and (max-width: $desktop-up) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
  &__small-cards-wrapper {
    @media (min-width: $large-tablet-portrait-up) and (max-width: $desktop-up) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column: 1 / 3;
    }
    @media (min-width: $desktop-up) {
      display: grid;
      grid-template-rows: 40% 60%;
    }
  }
  &__bottom-row {
    @media (min-width: $large-tablet-portrait-up) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: $desktop-up) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  &__card-information {
    @media (min-width: $large-tablet-portrait-up) and (max-width: $desktop-up) {
      grid-column: 1 / 5;
    }
  }
  &__card-house-cup {
    @media (min-width: $desktop-up) {
      grid-row: 1 / 2;
    }
  }
}
</style>
