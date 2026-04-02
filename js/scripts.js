$(document).ready(function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    $(form).on('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      $(this).addClass('was-validated');
    });
  });
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70 
      }, 800, function(){
      });
      $('.navbar-collapse').collapse('hide');
    }
  });
  $('.view-project-btn').on('click', function() {
    const title = $(this).data('title');
    const desc = $(this).data('desc');
    const link = $(this).data('link');
    $('#projectModalLabel').text(title);
    $('#projectModalDesc').text(desc);
    $('#projectModalLink').attr('href', link);
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
  });
  $('.card-custom').hover(
    function() {
      $(this).find('.card-body').stop().animate({ paddingLeft: '1.5rem', paddingRight: '1.5rem' }, 200);
    },
    function() {
      $(this).find('.card-body').stop().animate({ paddingLeft: '1rem', paddingRight: '1rem' }, 200);
    }
  );
  $('#secret-btn').on('click', function() {
    $('#secret-message').fadeToggle(500);
    $(this).toggleClass('btn-primary-custom btn-outline-light');
  });
});
