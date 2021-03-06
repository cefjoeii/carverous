// Alert
// Allow the users of this framework need to invoke these functions explicitly.
// Use getAttribute('data-close') instead of dataset.close for it to work in IE10+.

function alertHide(duration = 0) {

  let alerts = document.querySelectorAll('.alert');

  for (let i = 0, n = alerts.length; i < n; i++) {

    alerts[i].addEventListener('click', function (event) {

      if (this.querySelector('[data-close]')) {

        let closer = this.querySelector('[data-close]');
        let isCloserClicked = closer.contains(event.target);

        if (isCloserClicked && closer.getAttribute('data-close') === 'alert') {

          this.style.transition = 'all ' + duration + 's';
          this.style.opacity = '0';

          setTimeout(() => {
            this.style.display = 'none';
          }, duration * 1000);
        }
      }
    });
  }
}

function alertShow(el, duration = 0) {

  el.style.transition = 'all ' + duration + 's';
  el.style.opacity = '0';
  el.style.display = 'block';

  setTimeout(function () {
    el.style.opacity = '1';
  }, 250);
}
