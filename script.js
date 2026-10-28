document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const badge = document.querySelector('.cart-count');
    const buttons = document.querySelectorAll('.add-cart-lux');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            badge.textContent = cartCount;
            
            // Animation effect on button click
            btn.textContent = "Added ✓";
            btn.style.background = "#10b981";
            btn.style.color = "#fff";
            
            setTimeout(() => {
                btn.textContent = "Add To Cart";
                btn.style.background = "";
                btn.style.color = "";
            }, 1200);
        });
    });
});
