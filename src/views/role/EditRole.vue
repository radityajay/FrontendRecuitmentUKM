<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar></SideBar>

      <!-- MAIN CONTENT -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">EDIT</h1>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                    placeholder="Admin"
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputRole" class="form-label">Role</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="exampleInputRole"
                  >
                    <option selected disabled>Role</option>
                    <option value="1">admin</option>
                    <option value="2">mod</option>
                    <option value="3">user</option>
                  </select>
                </div>
                <router-link to="/futsal">
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
import UserService from "../../services/user.service";
import SideBar from "../../components/SideBar.vue";
import '../../js/scripts';


export default {
  name: "Edit",
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
  }
}
</script>
