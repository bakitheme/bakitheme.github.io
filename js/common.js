$(function() {
	var containerEl = document.querySelector('.container');

    var mixer = mixitup(containerEl);

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['Previous','Next'],
        items: 1,
    })
    
});
