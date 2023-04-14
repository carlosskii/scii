<script lang="ts">
  import Header from "$components/layouts/Header.svelte";
  import Footer from "$components/layouts/Footer.svelte";
</script>



<Header />
<main class="
  flex flex-col
  justify-start items-center
  w-full flex-grow
">
  <slot />
</main>
<Footer />