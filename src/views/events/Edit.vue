<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar></SideBar>

      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Edit</h1>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form @submit.prevent="updateEvent">
                <div class="mb-3">
                  <label for="judul" class="form-label">Judul Event</label>
                  <input
                    type="text"
                    class="form-control"
                    id="judul"
                    name="judul"
                    v-model="event.judul"
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label"
                    >Description Event</label
                  >
                  <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    v-model="event.description"
                    :placeholder="validate.description"
                    rows="3"
                  ></textarea>
                </div>
                <router-link to="/event">
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
// import EventDataService from "../../services/EventDataService";
import SideBar from "../../components/SideBar.vue";
import '../../js/scripts';


export default {
  name: "ADD",
  data() {
    return {
      validate: [],
      event: {
        id: "",
        judul: "",
        description: "",
      },
    };
  },
  components: {
    SideBar
  },
  methods: {
    setEvents(data){
      this.event = data;
    },
    updateEvent() {
      const event = {
        id: this.event.id,
        judul: this.event.judul,
        description: this.event.description,
      };

      axios
        .put(`http://localhost:8080/api/events/${this.$route.params.id}`, event)
        .then((response) => this.$router.push("/event")(response))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:8080/api/events/${this.$route.params.id}`)
      .then((response) => this.setEvents(response.data))
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
  }
}
</script>
