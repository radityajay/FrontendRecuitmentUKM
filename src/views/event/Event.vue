<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Event</h1>
        </div>

        <div class="container">
          <table class="table table-striped table-hover">
            <tr class="text-center">
              <th>No</th>
              <th>Judul Event</th>
              <th>Description Event</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td class="text-center">Primakara Intern Cup 1</td>
              <td>
                 <div class="col-md-12 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa consequuntur repudiandae, corrupti voluptatibus magnam veniam aut facere, excepturi labore voluptatem voluptatum placeat earum qui non ipsam ducimus similique vero?
                 </div>
              </td>
              <td>
                <a href="/editRole"><button class="btn btn-primary m-2">Edit</button></a>
                <a href=""><button class="btn btn-danger">Hapus</button></a>
              </td>
            </tr>
          </table>
        </div>
      </main>
      <!-- END CONTENT -->
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
import SideBar from "../../components/SideBar.vue";
import '../../js/scripts';


export default {
  name: "Futsal",
  data() {
    return {
      content: "",
    };
  },
  components: {
    SideBar
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
  },
};
</script>
