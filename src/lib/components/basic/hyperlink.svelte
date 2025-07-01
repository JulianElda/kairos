<script lang="ts">
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
  class="text-primary-900 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300 decoration-dotted hover:underline">
  {title}{asterisk === false ? "" : "*"}
</a>
