<template>
	<div class="container-div">
	  <h3>Total Lines: {{ mainStore.totalLines }} </h3>
	</div>
</template>

<script setup lang="ts">
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore();
</script>

<style>
h3 {
	margin: 0em;
	padding: 0em;
}
</style>