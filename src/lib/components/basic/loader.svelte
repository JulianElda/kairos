<script lang="ts">
  import { store } from "$lib/store.svelte";
</script>

{#if store.isLoading}
  <div
    class="absolute inset-0 size-full animate-pulse bg-slate-100/50 dark:bg-slate-500/50">
  </div>
{/if}
