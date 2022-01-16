<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">IM</h1>
        </div>

        <div class="container">
          <table class="table table-striped table-hover">
            <thead>
              <tr class="text-center">
              <th>No</th>
              <th>Nama</th>
              <th>NIM</th>
              <th>Angkatan</th>
              <th>Prodi</th>
              <th>No WhatsApp</th>
              <th>UKM</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="(recuitmen, index) in recuitmens" :key="recuitmen.id">
              <td>{{ index+1 }}</td>
              <td>{{ recuitmen.name }}</td>
              <td>{{ recuitmen.nim }}</td>
              <td>{{ recuitmen.angkatan }}</td>
              <td>{{ recuitmen.nameProd }}</td>
              <td>{{ recuitmen.noTlp }}</td>
              <td>{{ recuitmen.nameUkm }}</td>
              <td>
                <router-link class="btn btn-danger me-2"
                :to="'/delim/' + recuitmen.id">
                  Delete
                </router-link>
              </td>
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

// import UserService from "../../services/user.service";
// import RecuitmenDataService from "../../services/RecuitmenDataService";
import SideBar from "../../components/SideBar.vue";
// import '../../js/scripts';


export default {
  name: "Futsal",
  data() {
    return {
      recuitmens: [],
      // currentRecuitmen : null,
    };
  },
  // created(){
  //   // this.retrieveRecuitmens();
  //   // this.refreshListRecuitmen();
  // },
  components: {
    SideBar
  },
  methods: {
    setRecuitmens(data){
      this.recuitmens = data;
    }
    // retrieveRecuitmens() {
    //   RecuitmenDataService.getAll()
    //     .then(response => {
    //       this.recuitmens = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    // refreshListRecuitmen() {
    //   this.retrieveRecuitmens();
    //   this.currentRecuitmen = null;
    //   // this.currentIndex = -1;
    // },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/recuitmens/ukmAll?ukmName=IM")
      .then((response) => this.setRecuitmens(response.data))
      .catch((error) => console.log(error));

    // UserService.getAdminBoard().then(
    //   (response) => {
    //     this.content = response.data;
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
  },
};
</script>
