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
                  <label for="exampleInputName" class="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                    placeholder="Putu Agus Raditya Jayantrara"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNIM" class="form-label">NIM</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputNIM"
                    placeholder="1901020012"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputProdi" class="form-label">Prodi</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="exampleInputProdi"
                  >
                    <option selected disabled>Prodi</option>
                    <option value="1">SI</option>
                    <option value="2">IF</option>
                    <option value="3">SIA</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleInputAngkatan" class="form-label">Angkatan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputAngkatan"
                    placeholder="2019"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputWhatssapp" class="form-label">WhatssApp</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputWhatssapp"
                    placeholder="087849068731"
                  />
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
