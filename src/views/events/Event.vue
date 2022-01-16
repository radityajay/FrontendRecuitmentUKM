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
        <a href="/addevent"><button class="btn btn-primary me-2">ADD</button></a>
          <table class="table table-striped table-hover">
            <thead>
              <tr class="text-center">
              <th>No</th>
              <th>Judul</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(event, index) in events" :key="event.id">
              <td class="text-center">{{ index+1 }}</td>
              <td class="text-center">{{ event.judul }}</td>
              <td class="text-justify">{{ event.description }}</td>
              <td>
                <router-link class="btn btn-primary m-2"
                :to="'/editevent/' + event.id">
                  EDIT
                </router-link>
                <router-link class="btn btn-danger me-2"
                :to="'/delevent/' + event.id">
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
// import EventDataService from "../../services/EventDataService";
import SideBar from "../../components/SideBar.vue";
// import '../../js/scripts';


export default {
  name: "Event",
  data() {
    return {
      events: [],
      // currentEvent : null,
    };
  },
  // created(){
  //   // this.retrieveEvents();
  //   // this.refreshListEvent();
  // },
  components: {
    SideBar
  },
  methods: {
    setEvents(data){
      this.events = data;
    }
    // retrieveEvents() {
    //   EventDataService.getAll()
    //     .then(response => {
    //       this.events = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    // refreshListEvent() {
    //   this.retrieveEvents();
    //   this.currentEvent = null;
    //   // this.currentIndex = -1;
    // },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => this.setEvents(response.data))
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
