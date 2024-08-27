let check = document.querySelector(".form input");
let p = document.querySelector(".form p");
check.oninput = () => {
    if (check.value.length < 6) {
        check.classList.add("input-error");
        p.classList.add("show-message");
    } else {
        p.classList.remove("show-message");
        check.classList.remove("input-error");
    }
};

