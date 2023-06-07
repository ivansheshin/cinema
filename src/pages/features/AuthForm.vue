<script lang="ts" setup>
import CinemaForm from "@/pages/entities/CinemaForm.vue";
import {ref} from "vue";

const login = ref('')
</script>

<template>
    <CinemaForm>
        <input v-model="login" type="text">
    </CinemaForm>
</template>
