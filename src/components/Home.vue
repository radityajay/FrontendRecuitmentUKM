<template>
  <div class="container-fluid px-5 mt-4 mb-5">
    <div class="text-center mb-5">
      <h5>EVENT</h5>
      <h3>Coming Soon Event</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <CardEvent v-for="event in events" 
        :key="event.id" 
        :event="event" 
        v-on:view-event="viewEvent($event)" />
        <!-- Modal -->
        <ModalsEvent :event="event" :active="active.event_popUp" />
    </div>
  </div>

  <div class="container-fluid px-5 mt-4 mb-5">
    <div class="text-center mb-5">
      <h5>UKM</h5>
      <h3>Unit Kegiatan Mahasiswa</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col h-100">
        <div class="card">
          <img src="../assets/logoFutsal.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title text-center fw-bold">FUTSAL</h4>
          </div>
          <button
            class="btn btn-primary mx-auto d-flex mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleFutsal"
          >VIEW</button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleFutsal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">UKM FUTSAL</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../assets/futsal.png" class="img-fluid rounded" alt="..." />
              <div class="mt-3">
                <h5 class="fw-bold">Apa sih UKM Futsal itu?</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
              <div class="mt-3">
                <h5 class="fw-bold">Acara: Primakara Intern Cup 1</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/formjoin">
                <button type="button" class="btn btn-primary">JOIN</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="../assets/dance.jpg" class="card-img-top mt-5" alt="..." height="250"/>
          <div class="card-body mt-4">
            <h4 class="card-title text-center fw-bold mt-3">DANCE</h4>
          </div>
          <button
            class="btn btn-primary mx-auto d-flex mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleDance"
          >VIEW</button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleDance"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">UKM DANCE</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../assets/pengabdian.jpg" class="img-fluid rounded" alt="..." />
              <div class="mt-3">
                <h5 class="fw-bold">Apa sih UKM Dance itu?</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
              <div class="mt-3">
                <h5 class="fw-bold">Acara: Pengabdian Masyarakat</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/formjoin">
                <button type="button" class="btn btn-primary">JOIN</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="../assets/esprime.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title text-center fw-bold">ESPRIME</h4>
          </div>
          <button
            class="btn btn-primary mx-auto d-flex mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleEsprime"
          >VIEW</button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleEsprime"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">UKM ESPRIME</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../assets/dokEsp.jpeg" class="img-fluid rounded" alt="..." />
              <div class="mt-3">
                <h5 class="fw-bold">Apa sih UKM Esprime itu?</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
              <div class="mt-3">
                <h5 class="fw-bold">Acara: Turnamment Mobile Legend</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/formjoin">
                <button type="button" class="btn btn-primary">JOIN</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="../assets/mm.png" class="card-img-top" alt="..." height="338" />
          <div class="card-body">
            <h4 class="card-title text-center fw-bold">MULTIMEDIA</h4>
          </div>
          <button
            class="btn btn-primary mx-auto d-flex mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleMM"
          >VIEW</button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleMM"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">UKM MULTIMEDIA</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../assets/dokMM.jpg" class="img-fluid rounded" alt="..." />
              <div class="mt-3">
                <h5 class="fw-bold">Apa sih UKM MultiMedia itu?</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
              <div class="mt-3">
                <h5 class="fw-bold">Acara: Turnamment Mobile Legend</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/formjoin">
                <button type="button" class="btn btn-primary">JOIN</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-light" style="background-color: #021729 !important">
    <div class="container-fluid mt-5 py-2 fs-6 footer border-top">
      <p class="pt-3 text-white text-center">&copy;2021 UKM | UAS WEB</p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import UserService from "../services/user.service";
import CardEvent from "./CardEvent.vue";
import ModalsEvent from "./ModalsEvent.vue";

export default {
  name: "Home",
  components: {
    CardEvent,
    ModalsEvent
  },
  data() {
    return {
      events: [],
      event: null,
      active: {
        event_popUp: false
      },
    };
  },
  methods: {
    setEvent(data) {
      this.events = data;
    },
    viewEvent(event) {
      this.event = event
      this.active.event_popUp = true
      console.log(this.event)
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => this.setEvent(response.data))
      .catch((error) => console.log(error));

    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style>
body {
  background-color: #f2f2f2 !important;
}
</style>
