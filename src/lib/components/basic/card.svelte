<script lang="ts">
  let { children } = $props();
</script>

<div
  class="relative space-y-12 rounded-md bg-white p-2 shadow-sm sm:p-8 dark:bg-slate-700">
  {@render children()}
</div>
