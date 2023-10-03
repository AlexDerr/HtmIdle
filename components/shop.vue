<template>
	<div class="container-div shop-div">
		<h3>Shop</h3>
		{{ shopStore.autoTypers }}
		<button
			@click="shopStore.purchaseAutoTyper()"
		>
			Auto Typer
		</button>
		Cost: {{ shopStore.costAutoTyper }}
	</div>
</template>

<script setup lang="ts">
import { useShopStore } from "~/store/shopStore";

const shopStore = useShopStore();
</script>

<style>
.shop-div {
	background-color: darksalmon;
	width: 15em;
}
</style>