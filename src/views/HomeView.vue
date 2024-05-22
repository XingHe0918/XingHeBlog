<script setup lang="ts">

</script>

<template>
  <div style="background: #181818">
    <div class="text" data-text="HELLO WORLD">
      HELLO WORLD
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:math';

.text {
  width: 750px;
  font-family: sans-serif;
  color: white;
  font-size: 100px;
  position: relative;
  margin: 0 auto;
  background: #181818;
}

.text::before {
  content: attr(data-text);
  background: #181818;
  position: absolute;
  left: 3px;
  text-shadow: 3px 0 red;
  animation: ani2 2s linear infinite alternate-reverse;
}

.text::after {
  content: attr(data-text);
  background: #181818;
  position: absolute;
  left: -3px;
  text-shadow: -3px 0 blue;
  animation: ani1 2s linear infinite alternate-reverse;
}

@keyframes ani1 {
  $steps: 25;
  @for $i from 0 through $steps {
    #{percentage($i * math.div(1, $steps))} {
      clip-path: inset(random(100) + px 0 random(100) + px 0);
    }
  }
}

@keyframes ani2 {
  $steps: 25;
  @for $i from 0 through $steps {
    #{percentage($i * math.div(1, $steps))} {
      clip-path: inset(0 random(100) + px 0 random(100) + px);
    }
  }
}
</style>
