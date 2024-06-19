<script>
  import logo from '$lib/assets/logo.png';
</script>

<main>
  <div class="text">
    Програмне забезпечення Kexit Drive - це файлове сховище, розроблене для задоволення
    різноманітних потреб користувачів у зберіганні файлів та перегляду онлайн.

  </div>
  <div class="images">
    <img alt="The project logo" src={logo} width={500}/>
  </div>
</main>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Comic+Sans+MS:wght@400&display=swap');

  main {
    display: flex;
    justify-content: space-between;
  }
  .text {
    flex: 1;
    padding: 20px;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    color: #555555;
    font-size: 30px;
  }
  .images {
    flex: 1;
    padding: 20px;
  }
</style>