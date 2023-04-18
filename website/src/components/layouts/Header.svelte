<script lang="ts">
  import { login } from '$stores/auth';

  let loginValue;

  login.subscribe((value) => {
    loginValue = value;
  });

  const handleUserButnClick = () => {
    if ($login) {
      login.set(false);
    } else {
      login.set(true);
    }
  };
</script>

<header class="
  flex flex-row justify-between items-center
  w-full h-16
  px-4 py-2
  font-kanit
">
  <h1 class="
    text-3xl font-bold
  ">
    SCII
  </h1>

  <nav class="
    flex flex-row justify-between items-center
    space-x-4
  ">
    <a href="/profile" class="
      text-lg
      px-4 py-2
      rounded-lg
      hover:bg-gray-600
      transition-colors
    ">
      Profile
    </a>

    <a href="/editor" class="
      text-lg
      px-4 py-2
      rounded-lg
      hover:bg-gray-600
      transition-colors
    ">
      Editor
    </a>

    <button class="
      text-lg
      px-4 py-2
      rounded-lg
      hover:bg-gray-600
      transition-colors
    " on:click={handleUserButnClick}>
      {#if $login}
        Logout
      {:else}
        Login
      {/if}
    </button>
  </nav>
</header>