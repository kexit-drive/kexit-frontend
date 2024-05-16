<script>
  export let data;
  let profile = data.currentUser;
</script>

<style>
  .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      max-width: 400px;
      margin: 20px auto;
      background-color: #f9f9f9;
  }

  .profile-image {
      border-radius: 50%;
      width: 96px;
      height: 96px;
      margin-bottom: 20px;
  }

  .profile-details {
      text-align: center;
  }

  .profile-details h2 {
      margin: 0;
      font-size: 1.5em;
      color: #333;
  }

  .profile-details p {
      margin: 5px 0;
      color: #666;
  }

  .profile-details span {
      display: block;
      font-weight: bold;
  }
</style>

<div class="profile-container">
  <img class="profile-image" src={profile.pictureLink} alt="user profile icon" />
  <div class="profile-details">
      <h2>{profile.name}</h2>
      <p><span>First Name:</span> {profile.firstName}</p>
      <p><span>Last Name:</span> {profile.lastName}</p>
      <p><span>External ID:</span> {profile.externalId}</p>
  </div>
</div>
