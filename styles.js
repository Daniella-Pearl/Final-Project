// sidebar
document.querySelector(".menu-btn").onclick = () => {
  document.querySelector(".sidebar").classList.toggle("active");
};

var typed = new typed('#typed', {
  strings: ['Nails.', 'Iron Bars.', 'Cement.', 'Paint.'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});