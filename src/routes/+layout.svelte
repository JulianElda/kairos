<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <script>
    (function () {
      const match = document.cookie.match(/dark-theme=(true|false)/);
      const isDark =
        match?.[1] === "true" ||
        (!match && window.matchMedia?.("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList.add(isDark ? "dark" : "");
      document.cookie = `dark-theme=${isDark}`;
    })();
  </script>
</svelte:head>

{@render children()}
