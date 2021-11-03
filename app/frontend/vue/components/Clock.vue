<script lang="ts">
import { defineComponent, ref } from 'vue';
import stringToColour from '~/utils/stringToColor';
import moment from 'moment';

export default defineComponent({
  setup() {

    const getDate = () => {
      return moment().format('h:mm:ss a');
    }

    const clock = ref(getDate());
    let timer;

    clearInterval(timer);
    timer = setInterval(() => {
      clock.value = getDate();
    }, 1000);

    return { clock, stringToColour }

  }
});
</script>

<template>
  <fieldset>
    <legend>Vue Clock Component</legend>
    <div :style="{ color: stringToColour(clock) }">{{ clock }}</div>
  </fieldset>
</template>


