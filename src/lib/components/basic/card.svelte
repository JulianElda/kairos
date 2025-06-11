<script lang="ts">
  let { children } = $props();
</script>

<div
  class="relative flex flex-col gap-6 rounded-md bg-white px-1 py-3 shadow-md dark:bg-slate-700">
  {@render children()}
</div>
