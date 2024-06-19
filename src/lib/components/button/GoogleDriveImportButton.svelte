<script>
  import { fetchService } from "$lib/fetchService";
  import { onMount } from "svelte";
  import {page} from "$app/stores";

  onMount(async () => {
    console.log("onMount");
    await import("https://apis.google.com/js/api.js");
  });

  async function onApiLoad() {
    gapi.load("picker", { callback: await onPickerApiLoad });
  }

  async function getAccessToken() {
    const dto = await fetchService("/user/getAccessToken", "GET");
    const accessToken = dto.token;
    console.log("accessToken = " + accessToken);
    return accessToken;
  }

  async function onPickerApiLoad() {
    let picker = new google.picker.PickerBuilder()
      .addView(google.picker.ViewId.DOCS)
      .setOAuthToken(await getAccessToken())
      .setCallback(pickerCallback)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .build();
    picker.setVisible(true);
  }

  function pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
      const fileIds = data.docs.map((doc) => doc.id);
      // Handle the selected file
      console.log("Selected File ID:", fileIds);
      importFiles(fileIds);
    }
  }

  function importFiles(fileIds) {
    console.log("importing fetch");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const containingDirectoryId = $page.url.searchParams.get('directoryId');
    const rawBody = JSON.stringify({
      fileIds,
      containingDirectoryId
    });

    console.dir(fileIds);

    const requestOptions = {
      method: "POST",
      body: rawBody,
      headers: myHeaders,
      redirect: "follow",
    };

    return fetchService("/file/import", "GET", requestOptions);
  }
</script>

<button class="import-button" on:click={onApiLoad}>
  Import from Google Drive
</button>

<style>
  .import-button {
    padding: 0.75rem 1.5rem;
    margin: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #0a951f;
    color: white;
    border: none;
    border-radius: 4px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .import-button:hover {
    background-color: #357ae8;
  }

  .import-button:active {
    background-color: #3367d6;
  }
</style>
