function init() {
  const subscribeButtonLink = document.getElementById('subscribe-button-link');
  const subscribeInput = document.getElementById('subscribe-input');
  const subscribeBox = document.getElementById('subscribe-box');

  subscribeButtonLink.addEventListener('click', () => {
    window.scrollTo({
      top: subscribeBox.offsetTop - 300,
      behavior: 'smooth',
    });

    subscribeBox.classList.add('training-subscribe_blink');

    setTimeout(() => {
      subscribeInput.focus();
    }, 500);

    setTimeout(() => {
      subscribeBox.classList.remove('training-subscribe_blink');
    }, 1500);
  });
}

init();
