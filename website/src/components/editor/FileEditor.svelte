<script lang="ts">
  import FileTab from "./FileTab.svelte";

  const FILES = [
    "index.html",
    "index.css",
    "index.js"
  ];
</script>

<div class="
  flex flex-row
  justify-start items-start
  w-full h-full
">
  <div class="
    flex flex-col
    justify-start items-center
    w-32
    border-4
    border-r-0
    border-inset
    border-gray-600
    bg-black
    h-full
  ">
    {#each FILES as file}
      <FileTab name={file} />
    {/each}
  </div>
  <textarea class="
    w-full h-full
    p-2
    bg-black
    font-mono

    border-4
    border-inset
    border-l-2
    border-gray-600

    focus:outline-none
  "></textarea>
</div>