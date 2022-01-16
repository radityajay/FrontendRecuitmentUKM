<template>
<h1>Suskses</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteUkm",
  mounted() {
    axios
      .delete(`http://localhost:8080/api/ukms/${this.$route.params.id}`)
      .then((response) => this.$router.push("/ukm")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>