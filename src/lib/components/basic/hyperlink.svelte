<script lang="ts">
  type HyperlinkProps = {
    href: string;
    title: string;
    asterisk?: boolean;
  };
  const { href, title, asterisk }: HyperlinkProps = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-sky-950 decoration-dotted hover:text-sky-800 hover:underline dark:text-sky-100 dark:hover:text-sky-400">
  {title}
  {asterisk === false ? "" : "*"}
</a>
