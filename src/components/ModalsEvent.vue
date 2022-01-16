<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :class="{show: active}"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content" v-if="event">
        <div class="modal-header">
          <h5 class="modal-title text-uppercase fw-bold" id="exampleModalLabel">{{ event.judul }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p style="white-space: pre-line;">
            {{ event.description }}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ModalsEvent',
  props: ['event', 'active']
}
</script>