<template>
  <div>
    <ConsoleHeader />
    <TotalCountHeader />
    <div class="inline-div">
      <Idle />
      <Shop v-if="shopEnabled"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const totalCount = useTotalCount();

const shopEnabled = computed(() => {
  return totalCount.value >= 10;
})
</script>

<style>
.inline-div {
  display: flex;
  flex-direction: row;
}
</style>