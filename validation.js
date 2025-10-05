function validateForm() {
  let valid = true;

  // Resetting all labels to default appearance
  document.querySelectorAll("label").forEach(l => {
    l.classList.remove("error", "warning");
  });

  // Username section
  const username = document.getElementById("username").value.trim();
  const usernameLabel = document.getElementById("lblUsername");
  const usernameRegex = /^[a-z0-9]{4,12}$/;
  if (username === "") {
    usernameLabel.classList.add("error");
    valid = false;
  } else if (!usernameRegex.test(username)) {
    usernameLabel.classList.add("warning");
    valid = false;
  }

  // Email section
  const email = document.getElementById("email").value.trim();
  const emailLabel = document.getElementById("lblEmail");
  const emailRegex = /^[^@]+@[^@]+\.(net|com|org|edu)$/;
  if (email === "") {
    emailLabel.classList.add("error");
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailLabel.classList.add("warning");
    valid = false;
  }

  // Phone section
  const phone = document.getElementById("phone").value.trim();
  const phoneLabel = document.getElementById("lblPhone");
  const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
  if (phone === "") {
    phoneLabel.classList.add("error");
    valid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneLabel.classList.add("warning");
    valid = false;
  }

  // Password section
  const password = document.getElementById("password").value;
  const passLabel = document.getElementById("lblPassword");
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;// >8 chars, letters/numbers/_
  if (password === "") {
    passLabel.classList.add("error");
    valid = false;
  } else if (!passRegex.test(password)) {
    passLabel.classList.add("warning");
    valid = false;
  }

  // Confirming password
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmLabel = document.getElementById("lblConfirm");
  if (confirmPassword === "") {
    confirmLabel.classList.add("error");
    valid = false;
  } else if (confirmPassword !== password) {
    alert("Passwords do not match!");
    confirmLabel.classList.add("warning");
    valid = false;
  }

  // Gender section
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    alert("Please select a gender.");
    valid = false;
  }

  // Age group section
  const ageGroup = document.getElementById("ageGroup");
  if (ageGroup.value === "") {
    ageGroup.style.borderColor = "red";
    valid = false;
  } else {
    ageGroup.style.borderColor = "";
  }

  return valid;
}

// Clearing all label styles on reset
function clearWarnings() {
  document.querySelectorAll("label").forEach(l => {
    l.classList.remove("error", "warning");
  });
  document.getElementById("ageGroup").style.borderColor = "";
}
