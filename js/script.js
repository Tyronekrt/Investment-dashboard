document.querySelectorAll(".membership-header").forEach(header => {
    header.addEventListener("click", function () {
        const body = this.parentElement.querySelector(".membership-body");
        const btn = this.querySelector(".toggle-btn");
        if (body.style.display === "block") {
            body.style.display = "none";
            btn.textContent = "+";
        } else {
            body.style.display = "block";
            btn.textContent = "-";
        }
    });
});
