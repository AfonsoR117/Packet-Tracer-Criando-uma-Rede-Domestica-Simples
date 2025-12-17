const chk = document.getElementById("chk")

chk.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin"){
        location.href = 'home.html';
    } else {
        alert("Usuario ou senha incorretos");
    }
}