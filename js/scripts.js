$(document).ready(function() {
    // 1. Initialize Bootstrap Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // 2. Initialize Bootstrap Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // 3. Form Validation with jQuery
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

    // 4. Custom jQuery Interactions
    
    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Offset for fixed navbar
            }, 800, function(){
                // window.location.hash = hash;
            });
            
            // Close mobile menu on click
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Handle interactive project modal content dynamically
    $('.view-project-btn').on('click', function() {
        // Fetch data attributes from the clicked button
        const title = $(this).data('title');
        const desc = $(this).data('desc');
        const link = $(this).data('link');

        // Update modal content
        $('#projectModalLabel').text(title);
        $('#projectModalDesc').text(desc);
        $('#projectModalLink').attr('href', link);

        // Programmatically trigger the modal
        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModal.show();
    });

    // Show/Hide Elements & Hover Effects using jQuery
    $('.card-custom').hover(
        function() {
            // Mouse enter
            $(this).find('.card-body').stop().animate({ paddingLeft: '1.5rem', paddingRight: '1.5rem' }, 200);
        },
        function() {
            // Mouse leave
            $(this).find('.card-body').stop().animate({ paddingLeft: '1rem', paddingRight: '1rem' }, 200);
        }
    );

    // Fade in text effect (Custom Interactive Section)
    $('#secret-btn').on('click', function() {
        $('#secret-message').fadeToggle(500);
        $(this).toggleClass('btn-primary-custom btn-outline-light');
    });
});
