<script lang="ts">
  let { children } = $props();
</script>

<div class="relative space-y-6 rounded-md bg-white px-1 py-3 dark:bg-slate-700">
  {@render children()}
</div>
