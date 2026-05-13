/* =========================
   CART & REVEAL (ORIGINAL)
========================= */
let totalItems = 0;
document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", function () {
        totalItems++;
        document.querySelector("#cartCount").textContent = "Selected: " + totalItems;
        this.textContent = "Added";
        this.disabled = true;
        
        // Luxury Toast Notification
        Swal.fire({
            toast: true, position: 'top-end', icon: 'success',
            title: 'Item added to royal cart', showConfirmButton: false, timer: 2000,
            background: '#111', color: '#c5a059'
        });
    });
});

function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) { el.classList.add("active"); }
    });
}
window.addEventListener("scroll", reveal);
reveal();

/* =========================
   AESTHETIC PAYMENT LOGIC
========================= */
const bookBtn = document.querySelector("#bookBtn");
const paymentArea = document.querySelector("#paymentArea");

bookBtn.addEventListener("click", function () {
    let name = document.querySelector("#name").value;
    if (name === "") {
        Swal.fire({
            icon: 'error', title: 'Wait...', text: 'Royal guest, please enter your name.',
            background: '#111', color: '#fff', confirmButtonColor: '#c5a059'
        });
    } else {
        // Aesthetic Reveal: Button hide hoga aur payment options niche se ayenge
        this.style.display = "none";
        paymentArea.style.display = "block";
    }
});

function processPay(method) {
    let name = document.querySelector("#name").value;
    
    // Luxury Loading State
    Swal.fire({
        title: 'Verifying Transaction', text: `Connecting to ${method} secure server...`,
        background: '#111', color: '#fff', allowOutsideClick: false,
        didOpen: () => { Swal.showLoading(); }, timer: 2500, showConfirmButton: false
    }).then(() => {
        // Final Success Alert
        Swal.fire({
            icon: 'success', title: 'Reservation Confirmed',
            html: `Thank you <b>${name}</b>. Your payment via ${method} is successful.`,
            background: '#111', color: '#fff', confirmButtonColor: '#c5a059'
        });

        paymentArea.style.display = "none";
        document.querySelector("#msg").innerHTML = `<h5 class="gold-text mt-2">✅ Table Reserved for ${name}</h5>`;
    });
}
