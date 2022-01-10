<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style="background-color: #021729 !important">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/admin">
              <font-awesome-icon icon="tachometer-alt" />
              Dashboard
            </a>
          </li>
          <hr class="text-white-50">
          <li class="nav-item">
            <a class="nav-link text-white" href="/futsal">
              <font-awesome-icon icon="futbol" />
              Futsal
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="walking" />
              Dance
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="hiking" />
              GMPA
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="language" />
              English Club
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="code" />
              Primdev
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="laptop-code" />
              Gamedev
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="pray" />
              PMC
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="shopping-cart" />
              IM
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="gamepad" />
              Esprime
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="dollar-sign" />
              HIPMI PT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <font-awesome-icon icon="guitar" />
              Musik
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Others</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link text-white" href="/role">
              <font-awesome-icon icon="file" />
              Role
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/event">
              <font-awesome-icon icon="bullhorn" />
              Event
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
export default{
    name: "SideBar"
}
</script>