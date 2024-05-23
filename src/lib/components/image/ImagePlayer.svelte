<script>
  import { onMount, onDestroy } from 'svelte';
  let imageFile;
  export let url;
  export let imageName;

  let loading = true;
  let progress = 0;
  let zoom = 100;

  function setupImage() {
    if (imageFile) {
      imageFile.src = '';
    }
    imageFile = new Image();
    imageFile.src = url;
    imageFile.onloadstart = () => {
      loading = true;
      progress = 0;
    };
    imageFile.onprogress = (event) => {
      if (event.lengthComputable) {
        progress = (event.loaded / event.total) * 100;
      }
    };
    imageFile.onload = () => {
      loading = false;
      progress = 100;
    };
    imageFile.onerror = () => {
      loading = false;
      progress = 0;
    };
  }

  function adjustZoom(event) {
    zoom = event.target.value;
  }

  // Handle URL changes
  $: if (url) {
    setupImage();
  }

  onMount(() => {
    setupImage();
  });

  onDestroy(() => {
    if (imageFile) {
      imageFile.src = '';
    }
  });
</script>

<main>
  <section class="image-viewer">
    <h3>{imageName}</h3>
    {#if loading}
      <div class="loading">
        Loading... {progress}%
      </div>
    {:else}
      <div class="image-container">
        <img src={url} alt={imageName} style="width: {zoom}%; height: auto;" />
      </div>
    {/if}
    <div class="zoom-control">
      <label for="zoom">Zoom</label>
      <input
        type="range"
        id="zoom"
        min="10"
        max="200"
        value={zoom}
        on:input={adjustZoom}
      />
      <span>{zoom}%</span>
    </div>
  </section>
</main>

<style>
  .image-viewer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
    color: #bbb;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 300px;
    margin: 20px auto;
  }

  .loading {
    margin: 20px 0;
  }

  .image-container {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .zoom-control {
    margin-top: 10px;
    width: 100%;
  }

  .zoom-control label {
    display: block;
    margin-bottom: 5px;
  }

  .zoom-control input[type="range"] {
    width: 100%;
  }
</style>
