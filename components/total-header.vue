<template>
	<div class="container-div">
	  <h3>Total Lines: {{ totalLines }} </h3>
	</div>
</template>

<script setup lang="ts">
const totalLines = useTotalLines();
</script>

<style>
h3 {
	margin: 0em;
	padding: 0em;
}
</style>