<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Roles</h1>
        </div>

        <div class="container">
          <table class="table table-striped table-hover">
            <tr class="text-center">
              <th>No</th>
              <th>username</th>
              <th>roles</th>
              <th>Action</th>
            </tr>
            <tr class="text-center">
              <td>1</td>
              <td>Yudha</td>
              <td>
                  <h6 class="badge rounded-pill bg-success">Admin</h6>
                  <h6 class="badge rounded-pill bg-success ms-2">User</h6>
              </td>
              <td>
                <a href="/editRole"><button class="btn btn-primary me-2">Edit</button></a>
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
