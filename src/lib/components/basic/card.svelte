<script lang="ts">
  let { children } = $props();
</script>

<div
  class="bg-card-background-light dark:bg-card-background-dark relative flex flex-col gap-10 rounded-md px-1 py-3 shadow-md">
  {@render children()}
</div>
