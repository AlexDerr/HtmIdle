<template>
	<div class="container-div main-div">
		<p>
			Available Lines: {{ mainStore.availableLines }}
		</p>
	  <button
			@click="mainStore.handleMainClick()"
		>
			Write Lines
		</button>
	</div>
  </template>
  
<script setup lang="ts">
import { useMainStore } from "~/store/mainStore";

const mainStore = useMainStore();
</script>


<style>
.main-div {
	background-color: aqua;
	width: 15em;
}
</style>