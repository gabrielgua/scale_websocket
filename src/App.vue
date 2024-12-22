<script setup lang="ts">
import Container from './components/Container.vue';
import Logo from './components/Logo.vue';
import Reader from './components/Reader.vue';

</script>

<template>
  <main>
    <Container class="py-10 grid place-items-center gap-6">
      <Logo />
      <Reader />
    </Container>
  </main>

</template>

<style scoped></style>
