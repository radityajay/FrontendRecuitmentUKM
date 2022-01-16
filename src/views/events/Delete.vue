<template>
<h1>Suskses</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteEvent",
  mounted() {
    axios
      .delete(`http://localhost:8080/api/events/${this.$route.params.id}`)
      .then((response) => this.$router.push("/event")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>