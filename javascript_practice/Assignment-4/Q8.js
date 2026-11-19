// Populate, update, and display a user object through a form.
const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.querySelector("#user-form");
Object.entries(user).forEach(([key, value]) => { userForm.elements[key].value = value; });
const renderUser = () => { document.querySelector("#user-details").textContent = JSON.stringify(user, null, 2); };
renderUser();
userForm.addEventListener("submit", event => {
    event.preventDefault();
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);
    renderUser();
});
