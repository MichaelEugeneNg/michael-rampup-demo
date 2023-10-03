function myFunction() {
  alert("This is the correct way to do js ☺️ 😊🥰👉👈");
}

function submit() {
    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    alert('Username:', username.value, 'Email:', email.value, 'Password:', password.value);
    return false;
}


document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
