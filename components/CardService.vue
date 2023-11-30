<template>
  <div class="card bg-dark mt-3">
      <div class="card-body">
    <h2 class="card-title">{{ serviceName }}</h2>
    <p class="card-text">Business: {{ businessName }}</p>
    <p class="card-text">Rating: {{ serviceRating }} <i class="fa fa-star"></i></p>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceName: String,
    businessName: String,
    serviceRating: Number,
  },
};
</script>

<style>

.card i {
  color: gold;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 200px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  color:white;
}

.service-card h2 {
  color: white;
}

.service-card i {
  color: gold;
}
</style>
