<script lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  interface HyperlinkProps {
    asterisk?: boolean;
    href: string;
    title: string;
  }
  const { asterisk, href, title }: HyperlinkProps = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-primary-900 decoration-dotted hover:text-primary-700 hover:underline dark:text-primary-100 dark:hover:text-primary-300">
  {title}{asterisk === false ? "" : "*"}
</a>
