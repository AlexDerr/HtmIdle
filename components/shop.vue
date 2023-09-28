<template>
	<div class="container-div shop-div">
		<h3>Shop</h3>
		{{ autoTypers }}
		<button
			@click="purchaseAutoTyper()"
		>
			Auto Typer
		</button>
		Cost: {{ costAutoTyper }}
	</div>
</template>

<script setup lang="ts">
const autoTypers = useAutoTypers();
const costAutoTyper = useCostAutoTyper();
</script>

<style>
.shop-div {
	background-color: darksalmon;
	width: 15em;
}
</style>