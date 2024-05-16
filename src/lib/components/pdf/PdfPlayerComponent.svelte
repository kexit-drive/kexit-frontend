<script>
  export let sourceUrl;

  import { onMount } from "svelte";

  onMount(async () => {
    console.log("onMount");
    await import("pdfjs-viewer-element");
  });

  $: src = sourceUrl;
  const viewerPath = "/pdfjs-4.2.67-dist";
  const page = "1";
  const locale = "en";
  const zoom = "auto";
  const pagemode = "none";
  const search = null;
  const phrase = true;
  const textLayer = "hover";
</script>

<main>
  <pdfjs-viewer-element
    class="viewer"
    {src}
    viewer-path={viewerPath}
    {locale}
    {page}
    {search}
    {phrase}
    {zoom}
    {pagemode}
    text-layer={textLayer}
  />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .viewer {
    height: 80vh;
    height: 80dvh;
  }
</style>
