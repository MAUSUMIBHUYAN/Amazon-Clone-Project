const productImagesContainers = document.querySelectorAll('.products-row1, .products-row2, .products-row3');

const prevBtns = document.querySelectorAll('.control-prev-products');
const nextBtns = document.querySelectorAll('.control-next-products');

productImagesContainers.forEach((productImagesContainer, index) => {
    const imageWidth = productImagesContainer.querySelector('img').offsetWidth + 20;  
    const scrollAmount = imageWidth * 7; 

    function scrollLeft() {
        productImagesContainer.scrollBy({
            left: -scrollAmount,  
            behavior: 'smooth'     
        });
    }

    function scrollRight() {
        productImagesContainer.scrollBy({
            left: scrollAmount,   
            behavior: 'smooth'    
        });
    }

    prevBtns[index].addEventListener('click', (e) => {
        e.preventDefault();
        scrollLeft();
    });

    nextBtns[index].addEventListener('click', (e) => {
        e.preventDefault();
        scrollRight();
    });
});
