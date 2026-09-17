const whyItems = document.querySelectorAll('.why-item');
const whyImageDisplay = document.getElementById('why-image-display');

whyItems.forEach(function(item) {
    item.addEventListener('click', function() {
        whyItems.forEach(function(el) {
            el.classList.remove('active');
        });
        item.classList.add('active');

        const newImage = item.getAttribute('data-image');
        whyImageDisplay.src = newImage;
    });
});