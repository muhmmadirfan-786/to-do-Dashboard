document.addEventListener("DOMContentLoaded", function(){
    const togglerIcons = document.querySelectorAll(".toggle-btn");
    const dashboardLayout = document.querySelector(".main-layout");

    togglerIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            dashboardLayout.classList.toggle("show");
        });
    });
});
