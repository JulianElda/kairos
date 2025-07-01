<script lang="ts">
  import GithubMarkDark from "$lib/components/icons/github-mark-dark.svelte";
  import GithubMarkLight from "$lib/components/icons/github-mark-light.svelte";
  import ThemeMoon from "$lib/components/icons/theme-moon.svelte";
  import ThemeSun from "$lib/components/icons/theme-sun.svelte";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import Hyperlink from "./hyperlink.svelte";

  const COOKIE_KEY = "dark-theme";
  const DARKMODE_CLASS = "dark";

  const darkMode = writable(false);
  let isLoading = $state(true);

  onMount(() => {
    const cookieValue = Cookies.get(COOKIE_KEY);
    const prefersDark = globalThis?.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      cookieValue === "true" || (!cookieValue && prefersDark);

    darkMode.set(shouldUseDark);
    document.documentElement.classList.toggle(DARKMODE_CLASS, shouldUseDark);

    isLoading = false;

    darkMode.subscribe((value) => {
      Cookies.set(COOKIE_KEY, String(value));
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(DARKMODE_CLASS, value);
      }
    });
  });
</script>

{#if !isLoading}
  <footer
    class="bg-app-background-light dark:bg-app-background-dark flex max-w-sm items-center p-2 sm:fixed sm:right-0 sm:bottom-0 sm:left-0 sm:mx-auto sm:justify-between md:max-w-md">
    <div class="flex flex-1 items-center gap-1">
      <a
        href="https://github.com/JulianElda/kairos"
        aria-label="https://github.com/JulianElda/kairos"
        target="_blank"
        rel="noreferrer"
        class={[
          "size-8 rounded-md p-1",
          $darkMode ? "bg-app-background-light" : "bg-app-background-dark",
        ]}>
        {#if $darkMode}
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
    {#if $darkMode}
      <button
        aria-label="toggle light mode"
        data-testid="footer-toggle-light"
        class="bg-app-background-light text-app-text-light size-8 cursor-pointer rounded-md p-1"
        onclick={() => darkMode.update((value) => !value)}>
        <ThemeSun />
      </button>
    {:else}
      <button
        aria-label="toggle dark mode"
        data-testid="footer-toggle-dark"
        class="bg-app-background-dark text-app-text-dark size-8 cursor-pointer rounded-md p-1"
        onclick={() => darkMode.update((value) => !value)}>
        <ThemeMoon />
      </button>
    {/if}
  </footer>
{/if}
