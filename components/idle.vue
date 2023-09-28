<template>
	<div class="container-div main-div">
	  <h3>Total Count: {{ totalCount }} </h3>
		<p>
			Current Count: {{ currentCount }}
		</p>
	  <button @click="handleMainClick()">Click</button>
	</div>
  </template>
  
<script setup lang="ts">
const totalCount = useTotalCount();
const currentCount = useCurrentCount();
</script>


<style>
.main-div {
	background-color: aqua;
	width: 15em;
}
</style>