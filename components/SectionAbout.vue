<template>
  <section class="about" id="about">
    <SectionHeader subtitle="Know More">Meet The Houses</SectionHeader>
    <div class="about__content">
      <div class="about__column-left">
        <CardHistory />
        <CardExplore />
        <CardAnimals class="about__card-animals" />
      </div>
      <div class="about__column-right">
        <CardTournament class="about__card-tournament" />
        <CardTransport />
        <CardAdministration />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import CardHistory from '@/components/SectionAboutCardHistory.vue';
import CardExplore from '@/components/SectionAboutCardExplore.vue';
import CardAnimals from '@/components/SectionAboutCardAnimals.vue';
import CardTournament from '@/components/SectionAboutCardTournament.vue';
import CardTransport from '@/components/SectionAboutCardTransport.vue';
import CardAdministration from '@/components/SectionAboutCardAdministration.vue';

export default {
  name: 'SectionAbout',
  components: {
    SectionHeader,
    CardHistory,
    CardExplore,
    CardAnimals,
    CardTournament,
    CardTransport,
    CardAdministration,
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__content {
    @media (min-width: $desktop-up) {
      display: grid;
      grid-template-columns: 60% 40%;
    }
  }
  &__column-left {
    @media (min-width: $large-tablet-portrait-up) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .about__card-animals {
        grid-column: 1 / 3;
      }
    }
  }
  &__column-right {
    @media (min-width: $large-tablet-portrait-up) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .about__card-tournament {
        grid-column: 1 / 3;
      }
    }
    @media (min-width: $desktop-up) {
      grid-template-columns: 37.5% 1fr;
      .about__card-tournament {
        grid-column: 1 / 1;
        grid-row: 1 / 3;
      }
    }
  }
}
</style>
