<script lang="ts">
  import Hyperlink from "./hyperlink.svelte";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const COOKIE_KEY = "dark-theme";
  const DARKMODE_CLASS = "dark";

  const darkMode = writable(false);

  onMount(() => {
    const cookieValue = Cookies.get(COOKIE_KEY);
    const prefersDark = window?.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      cookieValue === "true" || (!cookieValue && prefersDark);

    darkMode.set(shouldUseDark);
    document.documentElement.classList.toggle(DARKMODE_CLASS, shouldUseDark);

    darkMode.subscribe((value) => {
      Cookies.set(COOKIE_KEY, String(value));
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(DARKMODE_CLASS, value);
      }
    });
  });
</script>

<footer
  class="max-w-lg bg-gray-50 p-2 sm:fixed sm:right-0 sm:bottom-0 sm:left-0 sm:mx-auto sm:h-10 dark:bg-gray-800">
  <div class="flex">
    {#if $darkMode}
      <button
        aria-label="toggle light mode"
        data-testid="footer-toggle-light"
        class="block h-6 w-6 cursor-pointer rounded-md border border-gray-100 bg-white p-1 text-gray-900"
        onclick={() => darkMode.update((value) => !value)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 26"
          stroke-width={2}
          stroke="currentColor"
          class="h-4 w-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </button>
    {:else}
      <button
        aria-label="toggle dark mode"
        data-testid="footer-toggle-dark"
        class="block h-6 w-6 cursor-pointer rounded-md border border-gray-700 bg-slate-700 p-1 text-white"
        onclick={() => darkMode.update((value) => !value)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 26"
          stroke-width={2}
          stroke="currentColor"
          class="h-4 w-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      </button>
    {/if}

    <div class="flex-1 text-end">
      <Hyperlink
        title="Julius Polar@GitHub"
        href="https://github.com/JulianElda/kairos" />
    </div>
  </div>
</footer>
