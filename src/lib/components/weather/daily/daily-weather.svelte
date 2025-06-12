<script lang="ts">
  import Daily from "./daily.svelte";
</script>

<div class="flex flex-col gap-2 px-2">
  {#each Array.from({ length: 5 }, (_, i) => i) as index}
    <Daily {index} />
  {/each}
</div>
