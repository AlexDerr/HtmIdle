<template>
  <div>
    <ConsoleHeader />
    <TotalHeader />
    <div class="inline-div">
      <Idle />
      <Shop v-if="shopEnabled"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore();

const shopEnabled = computed(() => {
  return mainStore.totalLines >= 10;
})
</script>

<style>
.inline-div {
  display: flex;
  flex-direction: row;
}
</style>