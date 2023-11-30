<template>
  <div>
    <h1>My Coding Experience</h1>
  <h6>Mutations are the hardest part and calling them at right place, so part with services is hardest for me , as well as parsing serviceRating as number, more console.loging helped :)</h6>

    <h2>Cards Starting with 'M'</h2>
    <div class="m-cards-container">
      <ServiceCard
        v-for="(card, index) in mCards"
        :key="index"
        :service-name="card.serviceName"
        :business-name="card.businessName"
        :service-rating="card.serviceRating"
      />
    </div>
        <nuxt-link to="/">Go back to service page</nuxt-link>
  </div>
  
</template>

<script>
import ServiceCard from '~/components/CardService.vue';

export default {
  components: {
    ServiceCard,
  },
  computed: {
    mCards() {
      return this.$store.getters['cards/getCardsStartingWithM'] || [];
    },
  },
};
</script>

<style>
.m-cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

