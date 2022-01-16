<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar></SideBar>

      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">ADD</h1>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form @submit.prevent="addUkm">
                <div class="mb-3">
                  <label for="name" class="form-label">Nama UKM</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    id="name"
                    name="name"
                    v-model="ukm.name"
                    placeholder="ESPRIME"
                  />
                </div>
                <router-link to="/ukm">
                  <button type="submit" class="btn btn-danger ms-2" style="float: right">Cancel</button>
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
</template>

<script>
import axios from "axios";

import UserService from "../../services/user.service";
// import UkmDataService from "../../services/UkmDataService";
import SideBar from "../../components/SideBar.vue";
import '../../js/scripts';


export default {
  name: "ADD",
  data() {
    return {
      ukm: {
        id: null,
        name: ""
      },
    };
  },
  components: {
    SideBar
  },
  methods: {
    addUkm() {
      const ukm = {
        id: this.ukm.id,
        name: this.ukm.name
      };

      axios
        .post("http://localhost:8080/api/ukms", ukm)
        .then((response) => this.$router.push ("/ukm") (response))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
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
  }
}
</script>
