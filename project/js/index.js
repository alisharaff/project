$(window).on('load', function() {
    $('#loader').delay(3000).fadeOut();
    $('#preloader').delay(3500).fadeOut('slow');
})



document.querySelector(".toggle").addEventListener("click", function () {
	this.classList.add("animate");
  
	setTimeout(() => {
	  this.classList.toggle("active");
	  document.querySelector(".wave").classList.toggle("active");
	}, 150);
  
	setTimeout(() => this.classList.remove("animate"), 300);
  });
  
