    var appointmentBtn = document.querySelector('.map-contacts .btn');
    var appointmentForm = document.querySelector('.appointment-form-popup' );
    var overlay = document.querySelector('.popup-overlay');
    var appointmentFormCloseBtn = appointmentForm.querySelector('.btn-delete');
    var navigationCatalogBtn = document.querySelector('.navigation-catalog');
    var catalogPopup = document.querySelector('.catalog-popup');
    var chart = document.querySelector('.chart');

    appointmentBtn.addEventListener('click', function(event) {
      event.preventDefault();
      appointmentForm.classList.add('popup-show');
      overlay.classList.add('popup-show');
    });

    appointmentFormCloseBtn.addEventListener('click', function(event) {
      event.preventDefault();
      appointmentForm.classList.remove('popup-show');
      overlay.classList.remove('popup-show');
    });

    navigationCatalogBtn.addEventListener('click', function(event) {
      event.preventDefault();
      catalogPopup.classList.toggle('popup-show');
    });

    document.addEventListener('click', function(event) {
      if (event.target != navigationCatalogBtn && catalogPopup.classList.contains('popup-show')  && !event.target.closest('.popup-show')) {
        catalogPopup.classList.remove('popup-show');
      }
    });

    chart.addEventListener('mouseover', function(event) {
      chart.innerHTML = '2 товара';
      chart.style.paddingRight = '15px';
    });

    chart.addEventListener('mouseout', function(event) {
      chart.innerHTML = 'Пусто';
      chart.style.paddingRight = '33px';
    });