<script lang="ts">
  import Gallery from "$components/layouts/Gallery.svelte";
</script>


<h2 class="
  text-4xl
  font-extralight
  mt-16 mb-8
">
  A platform for teamwork
</h2>

<div class="
  flex flex-col
  justify-start items-center
  w-11/12 max-w-4xl
">
  <Gallery name="Featured" />
  <Gallery name="New" />
</div>