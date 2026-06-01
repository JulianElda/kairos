<script lang="ts">
  import GithubMarkDark from "$lib/components/icons/github-mark-dark.svelte";
  import GithubMarkLight from "$lib/components/icons/github-mark-light.svelte";
  import ThemeMoon from "$lib/components/icons/theme-moon.svelte";
  import ThemeSun from "$lib/components/icons/theme-sun.svelte";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";

  import Hyperlink from "./hyperlink.svelte";

  const COOKIE_KEY = "dark-theme";
  const DARKMODE_CLASS = "dark";

  let darkMode = $state(false);
  let isLoading = $state(true);

  onMount(() => {
    const cookieValue = Cookies.get(COOKIE_KEY);
    const prefersDark = globalThis?.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldUseDark =
      cookieValue === "true" || (!cookieValue && prefersDark);

    darkMode = shouldUseDark;
    document.documentElement.classList.toggle(DARKMODE_CLASS, shouldUseDark);

    isLoading = false;
  });

  $effect(function syncDarkModeCookies() {
    Cookies.set(COOKIE_KEY, String(darkMode));
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(DARKMODE_CLASS, darkMode);
    }
  });

  const handleToggleDarkMode = () => {
    darkMode = !darkMode;
  };
</script>

{#if !isLoading}
  <footer
    class="flex max-w-sm items-center bg-app-background-light p-2 sm:fixed sm:right-0 sm:bottom-0 sm:left-0 sm:mx-auto sm:justify-between md:max-w-md dark:bg-app-background-dark">
    <div class="flex flex-1 items-center gap-1">
      <a
        href="https://github.com/JulianElda/kairos"
        aria-label="https://github.com/JulianElda/kairos"
        target="_blank"
        rel="noreferrer"
        class={[
          "size-8 rounded-md p-1",
          darkMode ? "bg-app-background-light" : "bg-app-background-dark",
        ]}>
        {#if darkMode}
          <GithubMarkDark />
        {:else}
          <GithubMarkLight />
        {/if}
      </a>

      <Hyperlink
        title="Julius Polar"
        href="https://julianelda.io"
        asterisk={true} />
    </div>
    {#if darkMode}
      <button
        aria-label="toggle light mode"
        data-testid="footer-toggle-light"
        class="size-8 cursor-pointer rounded-md bg-app-background-light p-1 text-app-text-light"
        onclick={handleToggleDarkMode}>
        <ThemeSun />
      </button>
    {:else}
      <button
        aria-label="toggle dark mode"
        data-testid="footer-toggle-dark"
        class="size-8 cursor-pointer rounded-md bg-app-background-dark p-1 text-app-text-dark"
        onclick={handleToggleDarkMode}>
        <ThemeMoon />
      </button>
    {/if}
  </footer>
{/if}
