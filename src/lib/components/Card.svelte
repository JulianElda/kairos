<script lang="ts">
  let { children } = $props();
</script>

<div
  class="space-y-4 rounded-md bg-white p-2 shadow-sm sm:p-6 dark:bg-slate-700">
  {@render children()}
</div>
