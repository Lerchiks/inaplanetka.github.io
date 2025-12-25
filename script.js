const modal = document.getElementById('serviceModal');

const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalPrice = modal.querySelector('.modal-price');

const modalTextFirst = modal.querySelector('.modal-text-first');
const modalTextSecond = modal.querySelector('.modal-text-second');

document.querySelectorAll('.service-content').forEach(service => {
    service.addEventListener('click', () => {

        modalTitle.innerHTML = service.dataset.title || '';

        if (service.dataset.textFirst) {
            modalTextFirst.innerHTML = service.dataset.textFirst;
            modalTextFirst.parentElement.style.display = 'block';
        } else {
            modalTextFirst.parentElement.style.display = 'none';
        }

        modalDescription.innerHTML = service.dataset.description || '';

        if (service.dataset.textSecond) {
            modalTextSecond.innerHTML = service.dataset.textSecond;
            modalTextSecond.parentElement.style.display = 'block';
        } else {
            modalTextSecond.parentElement.style.display = 'none';
        }

        if (service.dataset.price) {
            modalPrice.innerHTML = service.dataset.price;
            modalPrice.closest('.modal-cost').style.display = 'block';
        } else {
            modalPrice.closest('.modal-cost').style.display = 'none';
        }

        modal.classList.add('active');
    });
});

modal.querySelector('.modal-close').onclick = () => {
    modal.classList.remove('active');
};

modal.querySelector('.modal-overlay').onclick = () => {
    modal.classList.remove('active');
};
