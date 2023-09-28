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
const totalLines = useTotalLines();

const shopEnabled = computed(() => {
  return totalLines.value >= 10;
})
</script>

<style>
.inline-div {
  display: flex;
  flex-direction: row;
}
</style>