<script lang="ts">
  interface HyperlinkProps {
    href: string;
    title: string;
    asterisk?: boolean;
  }
  const { href, title, asterisk }: HyperlinkProps = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-primary-900 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300 decoration-dotted hover:underline">
  {title}
  {asterisk === false ? "" : "*"}
</a>
