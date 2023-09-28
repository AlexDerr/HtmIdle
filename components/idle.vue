<template>
	<div class="container-div main-div">
		<p>
			Available Lines: {{ availableLines }}
		</p>
	  <button
			@click="handleMainClick()"
		>
			Write Lines
		</button>
	</div>
  </template>
  
<script setup lang="ts">
const availableLines = useAvailableLines();
</script>


<style>
.main-div {
	background-color: aqua;
	width: 15em;
}
</style>