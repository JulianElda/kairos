<script lang="ts">
  let { children } = $props();
</script>

<div
  class="space-y-4 rounded-md bg-white p-1 shadow-sm sm:p-4 dark:bg-slate-700">
  {@render children()}
</div>
