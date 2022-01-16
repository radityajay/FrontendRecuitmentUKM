<template>
<h1>Suskses</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteRecuitmen",
  mounted() {
    axios
      .delete(`http://localhost:8080/api/recuitmens/${this.$route.params.id}`)
      .then((response) => this.$router.push("/pmc")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>