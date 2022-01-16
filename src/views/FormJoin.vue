<template>
  <div class="container-fluid">
    <div class="row">
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-5 col-lg-10 px-md-5">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom"
        >
          <h1 class="h2">JOIN</h1>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form @submit.prevent="addRecuitmen">
                  <div class="mb-3">
                    <label for="name" class="form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="name"
                      name="name"
                      v-model="recuitmen.name"
                      placeholder="Putu Agus Raditya Jayantara"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="nim" class="form-label">NIM</label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="nim"
                      name="nim"
                      v-model="recuitmen.nim"
                      placeholder="1901020012"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="angkatan" class="form-label">Angkatan</label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="angkatan"
                      placeholder="2019"
                      name="angkatan"
                      v-model="recuitmen.angkatan"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="noTlp" class="form-label">No WhatsApp</label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="noTlp"
                      placeholder="087849068731"
                      name="noTlp"
                      v-model="recuitmen.noTlp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="ukmId" class="form-label">UKM</label>
                    <select
                      class="form-select"
                      required
                      aria-label="Pilih UKM"
                      id="ukmId"
                      name="ukmId"
                      v-model="recuitmen.ukmId"
                    >
                      <option disabled selected>Pilih UKM</option>
                      <option v-for="ukm in ukms" v-bind:key="ukm.id" v-bind:value="ukm.id">{{ ukm.name }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="prodiId" class="form-label">Prodi</label>
                    <select
                      class="form-select"
                      required
                      aria-label="Default select example"
                      id="prodiId"
                      name="prodiId"
                      v-model="recuitmen.prodiId"
                    >
                      <option selected disabled>Select Prodi</option>
                      <option v-for="prodi in prodis" v-bind:key="prodi.id" v-bind:value="prodi.id">{{ prodi.name }}</option>
                    </select>
                  </div>
                  <router-link to="/">
                    <button class="btn btn-danger ms-2" style="float: right">Cancel</button>
                  </router-link>
                  <button type="submit" class="btn btn-success" style="float: right">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <!-- END CONTENT -->
    </div>
  </div>
  <!-- <div class="position-absolute bottom-0 w-100">
    <footer class="bg-light" style="background-color: #021729 !important">
      <div class="container-fluid mt-5 py-2 fs-6 footer border-top">
        <p class="pt-3 text-white text-center">&copy;2021 UKM | UAS WEB</p>
      </div>
    </footer>
  </div>-->
</template>

<script>
import axios from "axios";

import UserService from "../services/user.service";

export default {
  name: "FormJoin",
  data() {
    return {
      ukms: [],
      prodis: [],
      recuitmen: {
        id: null,
        name: "",
        nim: "",
        angkatan: "",
        noTlp: "",
        ukmId: "",
        prodiId: ""
      },
    };
  },
  methods: {
    setUkm(data){
      this.ukms = data;
    },
    setProdi(data){
      this.prodis = data;
    },

    addRecuitmen() {
      const recuitmen = {
        id: this.recuitmen.id,
        name: this.recuitmen.name,
        nim: this.recuitmen.nim,
        angkatan: this.recuitmen.angkatan,
        noTlp: this.recuitmen.noTlp,
        ukmId: this.recuitmen.ukmId,
        prodiId: this.recuitmen.prodiId
      };

      axios
        .post("http://localhost:8080/api/recuitmens", recuitmen)
        .then((response) => this.$router.push ("/") (response))
        .catch(function (error) {
          console.log(error);
        }); 
    }
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/ukms")
      .then((response) => this.setUkm(response.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8080/api/prodis")
      .then((response) => this.setProdi(response.data))
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
