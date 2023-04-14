<script lang="ts">
  import Header from "$components/editor/Header.svelte";
  import FileEditor from "$components/editor/FileEditor.svelte";
</script>


<Header />

<main class="
  grid grid-cols-2
  w-full flex-grow
  gap-4
">
  <FileEditor />
</main>