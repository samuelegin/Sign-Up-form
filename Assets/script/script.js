const submit = document.getElementById("submit")

submit.addEventListener("submit", ()=>{
    const password = document.getElementById("password").value;
    const email = document.getElementById("email");

    if (email === "") {
        email.style.offsetColor = "red"
        alert("Fill out this field")
    }

    if (password.lenght < 8) {
        alert("Password should be 8 characters long at least")
        password.style.offsetColor = "red"
    }
})
