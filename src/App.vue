<script lang="ts" setup>
import TheHeader from "@/widgets/TheHeader.vue";
import {getAuth} from 'firebase/auth'

console.log(getAuth())
</script>

<template>
  <TheHeader/>

  <RouterView/>
</template>
