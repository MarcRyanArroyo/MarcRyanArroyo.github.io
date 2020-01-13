$(document).ready(() => {
  //for NavBar
  if (window.matchMedia('(max-width: 700px)').matches) {
    $('.navbar').css('background', 'rgba(36,20,71,1)');
  } else {
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      if (scroll > 500) {
        $('.navbar').css('background', 'rgba(36,20,71,1)');
      } else {
        $('.navbar').css('background', 'transparent');
      }
    });
  }

  //burger menu toggle navlist active Class
  $('.burger-menu').on('click', () => {
    $('.nav-list').toggleClass('active-nav');
  });
});
