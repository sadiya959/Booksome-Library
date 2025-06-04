window.addEventListener("DOMContentLoaded", () => {
  const changeBtn = document.querySelector(".change-btn");
  if (changeBtn) {
    changeBtn.addEventListener("click", changePicture);
  }

  loadProfile();
});

function changePicture() {
  const url = prompt("Paste the URL of your new profile picture:");
  if (url) {
    document.getElementById("profileImage").src = url;
  }
}

function saveChanges(e) {
  e.preventDefault();

  const about = document.getElementById("about").value;
  const img = document.getElementById("profileImage").src;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    const profileData = {
      about,
      image: img,
      username: currentUser.username,
      email: currentUser.email,
    };

    localStorage.setItem("profileData_" + currentUser.email, JSON.stringify(profileData));
    alert("Profile updated!");
  }
}

function loadProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("You must be logged in.");
    window.location.href = "../index.html";
    return;
  }

  document.getElementById("username").value = currentUser.username;
  document.getElementById("email").value = currentUser.email;

  const savedProfile = JSON.parse(localStorage.getItem("profileData_" + currentUser.email));

  if (savedProfile) {
    document.getElementById("about").value = savedProfile.about || "";
    document.getElementById("profileImage").src = savedProfile.image || "/assets/images/profile.png";
  }

  const form = document.querySelector(".profile-form");
  if (form) {
    form.addEventListener("submit", saveChanges);
  }
}
