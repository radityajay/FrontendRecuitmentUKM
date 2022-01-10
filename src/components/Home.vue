<template>
  <div class="container-fluid px-5 mt-4 mb-5">
    <div class="text-center mb-5">
      <h5>EVENT</h5>
      <h3>Coming Soon Event</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card h-100 rounded">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Primakara Intern Cup 1</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="">
              <button class="btn btn-primary mx-auto d-flex">VIEW</button>
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 rounded">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Primakara Intern Cup 1</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="">
              <button class="btn btn-primary mx-auto d-flex">VIEW</button>
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 rounded">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Primakara Intern Cup 1</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="">
              <button class="btn btn-primary mx-auto d-flex">VIEW</button>
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 rounded">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Primakara Intern Cup 1</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="">
              <button class="btn btn-primary mx-auto d-flex">VIEW</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-5 mt-4 mb-5">
    <div class="text-center mb-5">
      <h5>UKM</h5>
      <h3>Unit Kegiatan Mahasiswa</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">FUTSAL</h5>
          </div>
          <button
            class="btn btn-primary mx-auto d-flex mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            VIEW
          </button>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">UKM FUTSAL</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                src="../assets/futsal.png"
                class="img-fluid rounded"
                alt="..."
              />
              <div class="mt-3">
                <h5>Apa sih UKM Futsal itu?</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
              <div class="mt-3">
                <h5>Acara: Primakara Intern Cup 1</h5>
              </div>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, eos dicta dolorum quis eaque exercitationem assumenda
                quas ullam perspiciatis tempora accusantium laboriosam obcaecati
                voluptatibus iure iste eius perferendis similique totam.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
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
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
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
