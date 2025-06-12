<script lang="ts">
  import GithubMarkDark from "$lib/icons/github-mark-dark.svelte";
  import GithubMarkLight from "$lib/icons/github-mark-light.svelte";
  import ThemeMoon from "$lib/icons/theme-moon.svelte";
  import ThemeSun from "$lib/icons/theme-sun.svelte";
  import Hyperlink from "./hyperlink.svelte";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const COOKIE_KEY = "dark-theme";
  const DARKMODE_CLASS = "dark";

  const darkMode = writable(false);
  let isLoading = $state(true);

  onMount(() => {
    const cookieValue = Cookies.get(COOKIE_KEY);
    const prefersDark = window?.matchMedia?.(
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
    class="flex max-w-sm items-center bg-gray-50 p-2 sm:fixed sm:right-0 sm:bottom-0 sm:left-0 sm:mx-auto dark:bg-gray-800">
    <div class="flex flex-1 items-center gap-1">
      <a
        href="https://github.com/JulianElda/kairos"
        aria-label="https://github.com/JulianElda/kairos"
        target="_blank"
        rel="noreferrer"
        class={[
          "size-8 rounded-md p-1",
          $darkMode ? "bg-white" : "bg-slate-700",
        ]}>
        {#if $darkMode}
          <GithubMarkDark />
        {:else}
          <GithubMarkLight />
        {/if}
      </a>

      <Hyperlink
        title="Julius Polar"
        href="https://github.com/JulianElda/kairos"
        asterisk={false} />
    </div>
    {#if $darkMode}
      <button
        aria-label="toggle light mode"
        data-testid="footer-toggle-light"
        class="size-8 cursor-pointer rounded-md bg-white p-1 text-gray-900"
        onclick={() => darkMode.update((value) => !value)}>
        <ThemeSun />
      </button>
    {:else}
      <button
        aria-label="toggle dark mode"
        data-testid="footer-toggle-dark"
        class="size-8 cursor-pointer rounded-md bg-slate-700 p-1 text-white"
        onclick={() => darkMode.update((value) => !value)}>
        <ThemeMoon />
      </button>
    {/if}
  </footer>
{/if}
