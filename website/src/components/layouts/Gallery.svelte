<script lang="ts">
  export let name: string;
</script>

<h4 class="
  text-xl
  w-full
  text-start
  font-kanit
">
  {name}
</h4>

<div class="
  gallery-grid
  h-32
  w-full
  mb-4
">
  {#each [1, 2, 3, 4] as item}
    <div class="
      bg-gray-400
      rounded
    "></div>
  {/each}
</div>

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
</style>