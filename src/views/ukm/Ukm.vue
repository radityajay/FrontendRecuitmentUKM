<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">UKM</h1>
        </div>

        <div class="container">
        <a href="/addukm"><button class="btn btn-primary me-2">ADD</button></a>
          <table class="table table-striped table-hover">
            <thead>
              <tr class="text-center">
              <th>No</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="(ukm, index) in ukms" :key="ukm.id">
              <td>{{ index+1 }}</td>
              <td>{{ ukm.name }}</td>
              <td>
                <router-link class="btn btn-primary me-2"
                :to="'/editukm/' + ukm.id">
                  EDIT
                </router-link>
                <router-link class="btn btn-danger me-2"
                :to="'/delukm/' + ukm.id">
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
// import UkmDataService from "../../services/UkmDataService";
import SideBar from "../../components/SideBar.vue";
// import '../../js/scripts';


export default {
  name: "Ukm",
  data() {
    return {
      ukms: [],
      // currentUkm : null,
    };
  },
  // created(){
  //   // this.retrieveUkms();
  //   // this.refreshListUkm();
  // },
  components: {
    SideBar
  },
  methods: {
    setUkms(data){
      this.ukms = data;
    }
    // retrieveUkms() {
    //   UkmDataService.getAll()
    //     .then(response => {
    //       this.ukms = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    // refreshListUkm() {
    //   this.retrieveUkms();
    //   this.currentUkm = null;
    //   // this.currentIndex = -1;
    // },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/ukms")
      .then((response) => this.setUkms(response.data))
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
