// Initialize Dragula for the drag-and-drop functionality
var containers = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3')
];

dragula(containers).on('drag', function(el) {
    el.classList.add('is-moving');
}).on('dragend', function(el) {
    el.classList.remove('is-moving');
    setTimeout(function() {
        el.classList.add('is-moved');
        setTimeout(function() {
            el.classList.remove('is-moved');
        }, 600);
    }, 100);
});

// Disable passive event listener behavior for touch events
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

// Function to toggle the visibility of options
var showOptions = (function () {
    var moreIcons = document.querySelectorAll('.drag-header-more');

    function toggleOptions() {
        var targetId = this.getAttribute('data-target');
        var optionsContainer = document.getElementById(targetId);
        optionsContainer.classList.toggle('active');
    }

    function init() {
        moreIcons.forEach(function(icon) {
            icon.addEventListener('click', toggleOptions, false);
        });
    }

    return { init: init };
})();


