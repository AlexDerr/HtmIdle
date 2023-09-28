<template>
	<div class="container-div console-div">
		<p v-for="message in consoleMessages.slice().reverse()">
			~$ {{ message }}
		</p>
	</div>
</template>

<script setup lang="ts">
let consoleMessages = useConsoleMessages();
</script>

<style>
.console-div {
	background-color: moccasin;
	height: 5.25em;
	overflow-y: auto;
}

p {
	height: 1em;
	margin-bottom: 0em;
	margin-top: 0em;
}
</style>