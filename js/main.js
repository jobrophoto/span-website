const whyItems = document.querySelectorAll('.why-item');

whyItems.forEach(function(item) {
    item.addEventListener('click', function() {
        whyItems.forEach(function(el) {
            el.classList.remove('active');
        });
        item.classList.add('active');
    });
});