<script>
  import { fetchService } from "$lib/fetchService";
  import PlayerComponent from "../PlayerComponent.svelte";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import Modal from "../modal/Modal.svelte";
  import DeleteButton from "$lib/components/button/DeleteButton.svelte";

  export let title;
  export let fileId;
  export let onDeleteCallback;

  let mediaType = "";
  $: url = `${PUBLIC_BASE_URL}/file/${fileId}/play`;

  let isModalOpen = false;

  function openModal() {
    console.log("Modal opened");
    isModalOpen = true;
  }

  function closeModalCallback() {
    console.log("Modal closed");
    isModalOpen = false;
  }

  const playFile = async () => {
    mediaType = await getFileMediaType();
    openModal();
  };

  async function getFileMediaType() {
    const responseJson = await fetchService(
      `/file/${fileId}/player-content-type`,
      "GET"
    );
    return await responseJson.dataType;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="file-card">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    on:click={playFile}
    src="https://cdn-icons-png.freepik.com/512/183/183625.png"
    alt="File Icon"
    class="file-icon"
  />
  <div class="file-info">
    <div><span class="file-title">{title}</span></div>
    <div class="file-id">ID: {fileId}</div>
    <DeleteButton name={title} fileId={fileId} onDeleteCallback={onDeleteCallback}/>
  </div>
</div>

<Modal isOpen={isModalOpen} closeCallback={closeModalCallback}>
  {#if isModalOpen}
    <PlayerComponent {mediaType} {url} />
  {/if}
</Modal>

<style>
  span {
    word-break: break-word;
  }

  .file-card {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    height: 150px;
    margin: 8px;
  }

  .file-icon {
    width: 50px;
    height: 50px;
    margin-right: 16px;
    cursor: pointer;
  }

  .file-info {
    flex-grow: 1;
  }

  .file-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .file-id {
    color: #666;
    font-size: 14px;
  }
</style>
