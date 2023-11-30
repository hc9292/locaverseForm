<template>
  <div class="container mt-3">
    <h1>Service Form</h1>
    <form class="input-group" @submit.prevent="submitForm">
      <label class="ml-2"  for="serviceName">Service Name:</label>
      <input class="ml-2"  v-model="serviceName" type="text" placeholder="Enter your service name" required>

      <label class="ml-2" for="businessName">Business Name:</label>
      <input class="ml-2" aria-label="Business name" v-model="businessName" type="text" placeholder="Enter your business name" required>

      <label class="ml-2" for="serviceRating">Service Rating:</label>
      <input class="ml-2" v-model="serviceRating" type="number" min="1" max="5" placeholder="Number from 1 to 5" required>

      <button class="btn btn-primary ml-3" type="submit">Submit</button>
    </form>

   <div class="service-cards-container">
  <!-- {{ serviceCards }} checking -->
  <ServiceCard
    v-for="(card, index) in serviceCards"
    :key="index"
    :service-name="card.serviceName"
    :business-name="card.businessName"
    :service-rating="card.serviceRating"
  />
</div>


    <!-- Link to the experience page -->
    <nuxt-link to="/experienceCoding">Go to Experience Page</nuxt-link>
  </div>
</template>

<script>
import ServiceCard from '~/components/CardService.vue';

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      serviceName: '',
      businessName: '',
      serviceRating: null,
    };
  },
  computed: {
    serviceCards() {
        return this.$store.getters['cards/getCards'] || [];
    },
  },
  methods: {
    submitForm() {
  const serviceRating = Number(this.serviceRating);
      const cardData = {
        serviceName: this.serviceName,
        businessName: this.businessName,
         serviceRating: isNaN(serviceRating) ? null : serviceRating,
      };

      this.$store.commit('cards/addCard', cardData);

      // Clear fields on submit
      this.serviceName = '';
      this.businessName = '';
      this.serviceRating = null;
    },
  },
};
</script>

<style>
.service-cards-container {
  display: flex;
  flex-wrap: wrap;
}
.service-form {
  max-width: 400px;
  margin: 0 auto;
}

.service-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.service-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>


