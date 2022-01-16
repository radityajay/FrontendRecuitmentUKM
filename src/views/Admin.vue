<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="
            d-flex
            justify-content-between
            flex-wrap flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom
          "
        >
          <h1 class="h2">Dashboard</h1>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalFutsal }}</h5>
                <h4 class="card-text">FUTSAL</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalDance }}</h5>
                <h4 class="card-text">DANCE</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalGmpa }}</h5>
                <h4 class="card-text">GMPA</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalEc }}</h5>
                <h4 class="card-text">ENGLISH CLUB</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalPrimdev }}</h5>
                <h4 class="card-text">PRIMDEV</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalGamedev }}</h5>
                <h4 class="card-text">GAMEDEV</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalPmc }}</h5>
                <h4 class="card-text">PMC</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalIm }}</h5>
                <h4 class="card-text">IM</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalEsprime }}</h5>
                <h4 class="card-text">ESPRIME</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalHipmi }}</h5>
                <h4 class="card-text">HIPMI PT</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-success text-white">
              <div class="card-body rounded text-center">
                <h5 class="card-title">{{ totalMusic }}</h5>
                <h4 class="card-text">MUSIK</h4>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-5">Recuitmen Anggota UKM Terkini</h2>
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr class="text-center">
              <th>Nama</th>
              <th>NIM</th>
              <th>Angkatan</th>
              <th>No WhatsApp</th>
              <th>Prodi</th>
              <th>UKM</th>
            </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="recuitmen in recuitmens" :key="recuitmen.id">
              <td>{{ recuitmen.name }}</td>
              <td>{{ recuitmen.nim }}</td>
              <td>{{ recuitmen.angkatan }}</td>
              <td>{{ recuitmen.noTlp }}</td>
              <td>{{ recuitmen.prodiId }}</td>
              <td>{{ recuitmen.ukmId }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
      <!-- END CONTENT -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

import UserService from "../services/user.service";
import SideBar from "../components/SideBar.vue";
import "../js/scripts";

export default {
  name: "Admin",
  data() {
    return {
      recuitmens: [],
      totalFutsal: null,
      totalDance: null,
      totalEsprime: null,
      totalGmpa: null,
      totalEc: null,
      totalPmc: null,
      totalPrimdev: null,
      totalGamedev: null,
      totalIm: null,
      totalHipmi: null,
      totalMusic: null,
    };
  },
  components: {
    SideBar,
  },
  methods:{
    setJoin(data){
      this.recuitmens = data;
    },
    setTotFut(data){
      this.totalFutsal = data[0].total;
    },
    setTotEsp(data){
      this.totalEsprime = data[0].total;
    },
    setTotDance(data){
      this.totalDance = data[0].total;
    },
    setTotGmpa(data){
      this.totalGmpa = data[0].total;
    },
    setTotEc(data){
      this.totalEc = data[0].total;
    },
    setTotPmc(data){
      this.totalPmc = data[0].total;
    },
    setTotPrim(data){
      this.totalPrimdev = data[0].total;
    },
    setTotGame(data){
      this.totalGamedev = data[0].total;
    },
    setTotIm(data){
      this.totalIm = data[0].total;
    },
    setTotHipmi(data){
      this.totalHipmi = data[0].total;
    },
    setTotMusic(data){
      this.totalMusic = data[0].total;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/recuitmens/join")
      .then((response) => this.setJoin(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=FUTSAL")
      .then((response) => this.setTotFut(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=ESPRIME")
      .then((response) => this.setTotEsp(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=DANCE")
      .then((response) => this.setTotDance(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=GMPA")
      .then((response) => this.setTotGmpa(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=EC")
      .then((response) => this.setTotEc(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=PMC")
      .then((response) => this.setTotPmc(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=PRIMDEV")
      .then((response) => this.setTotPrim(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=IM")
      .then((response) => this.setTotIm(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=HIPMI PT")
      .then((response) => this.setTotHipmi(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=GAMEDEV")
      .then((response) => this.setTotGame(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/api/recuitmens/totUkm?ukmName=MUSIC")
      .then((response) => this.setTotMusic(response.data))
      .catch((error) => console.log(error));

    UserService.getAdminBoard().then(
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
