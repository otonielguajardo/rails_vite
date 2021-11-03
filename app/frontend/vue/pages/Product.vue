<script lang="ts">
// import Clock from '../components/Clock.vue';
import Clock from "~/vue/components/Clock.vue";
import moment from 'moment';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  components: {
    Clock
  },
  setup() {
    const date = moment().toString()
    const hello = ref('mundo!!');
    return { hello, date }
  }
});
</script>

<template>
  <fieldset>
    <legend>Vue Product Page</legend>
    <h1>Index {{ hello }}</h1>
    <Clock />
  </fieldset>
</template>
