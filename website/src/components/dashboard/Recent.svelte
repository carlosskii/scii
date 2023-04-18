<script lang="ts">
  const RECENT_PROJECTS = [
    ["SCII", 3],
    ["BotComet", 6],
    ["Circe", 1]
  ]
</script>

<div class="
  flex flex-col justify-start items-start
  w-fit
">

  <h3 class="
    text-lg
  ">
    Recent
  </h3>

  <hr class="
    w-full
    mb-2
  " />

  <ul class="
    flex flex-col
    space-y-2
  ">
    {#each RECENT_PROJECTS as [project, stars]}
      <li class="
        text-lg
        px-4 py-2
        rounded-lg
        bg-gray-600
        transition-colors
        flex flex-row justify-between items-center
        gap-x-8
      ">
        {project}
        <span>
          ★ {stars}
        </span>
      </li>
    {/each}
  </ul>

</div>