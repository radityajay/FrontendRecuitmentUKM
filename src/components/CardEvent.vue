<template>
  <div class="col">
    <div class="card h-100 rounded">
      <div class="card-body">
        <h5 class="card-title">{{ event.judul }}</h5>
        <!-- <p class="card-text">
          {{ event.description }}
        </p> -->
        <button
          class="btn btn-primary mx-auto d-flex mb-2"
          @click="$emit('view-event', event)"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >VIEW</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'CardEvent',
  props: ['event']
}
</script>