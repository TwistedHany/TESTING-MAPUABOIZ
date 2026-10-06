const passwordInput = document.getElementById("password");
const revealButton = document.querySelector('[data-action="toggle-password"]');

if (passwordInput && revealButton) {
  revealButton.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";

    revealButton.setAttribute("aria-pressed", String(isHidden));
    revealButton.setAttribute(
      "aria-label",
      isHidden ? "Hide password" : "Show password"
    );
  });
}