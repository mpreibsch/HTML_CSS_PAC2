import Swal from 'sweetalert2';

const boto = document.querySelector("#boto");
boto.addEventListener("click", () => {
    Swal.fire({
        title: "Gràcies per participar!",
        icon: "success"
        });
});