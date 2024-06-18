<script>
  import { goto } from '$app/navigation';

  export let name;
  export let directoryId;

  const icon = "https://banner2.cleanpng.com/20181204/ucx/kisspng-portable-network-graphics-computer-icons-directory-sonular-trkye-modern-pentatlon-federasyonu-5c06eb5690f414.8519113715439573345937.jpg";

  const goIntoFolder = async () => {
    await goto(`/?directoryId=${directoryId}`);
  }
</script>

<div class="directory-card" on:dblclick={goIntoFolder}>
  <img src={icon} alt="Directory Icon" class="directory-icon"/>
  <div class="directory-info">
    <div class="directory-name">{name}</div>
    <div class="directory-id">ID: {directoryId}</div>
  </div>
</div>

<style>
  .directory-card {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 8px;
  }

  .directory-icon {
    width: 50px;
    height: 50px;
    margin-right: 16px;
  }

  .directory-info {
    flex-grow: 1;
  }

  .directory-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .directory-id {
    color: #666;
    font-size: 14px;
  }
</style>
