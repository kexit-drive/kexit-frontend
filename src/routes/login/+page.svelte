<script>
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import google from "$lib/assets/google.png";
</script>

<main>
  <a href={`${PUBLIC_BASE_URL}/oauth2/authorization/google`}>
    <img width="200px" src={google} alt="google"/>
  </a>
</main>


<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 100% of the viewport height */
  }
</style>