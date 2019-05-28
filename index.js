function init() {
  const subscribeButtonLink = document.getElementById('subscribe-button-link');
  const subscribeInput = document.getElementById('subscribe-input');
  const subscribeForm = document.getElementById('subscribe-form');
  const logoBox = document.getElementById('logo-box');

  subscribeButtonLink.addEventListener('click', () => {
    window.scrollTo({
      top: subscribeForm.offsetTop - 300,
      behavior: 'smooth',
    });

    subscribeForm.classList.add('training-subscribe_blink');

    setTimeout(() => {
      subscribeInput.focus();
    }, 500);

    setTimeout(() => {
      subscribeForm.classList.remove('training-subscribe_blink');
    }, 1500);
  });

  // window.addEventListener('scroll', () => {
  //   console.log(window.pageYOffset);

  //   if (window.pageYOffset > 170) {
  //     logoBox.classList.add('_active');

  //     return;
  //   }

  //   logoBox.classList.remove('_active');
  // });

  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(subscribeInput.value);
  });
}

init();
