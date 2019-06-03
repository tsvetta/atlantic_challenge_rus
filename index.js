(() => {
const initForm = () => {
  const subscribeForm = document.getElementById('subscribe-form');
  const subscribeInput = document.getElementById('subscribe-input');
  const subscribeInputMessage = document.getElementById('subscribe-input-message');

  const formMessages = {
    empty: 'Введите email, на который вы хотите получать рассылку',
    fail: 'Не удалось отправить email, проверьте соединение и попробуйте еще раз',
    success: 'Вы успешно подписаны на рассылку',
    invalidEmail: 'Вы ввели некорректный email',
  };

  const showInputError = (errorText) => {
    subscribeInputMessage.classList.add('_error');
    subscribeInputMessage.innerText = errorText;
  };

  const showInputSuccessMessage = (successText) => {
    subscribeInputMessage.classList.add('_success');
    subscribeInputMessage.innerText = successText;
  };

  const isEmailValid = (email) => {
    return /^.+@.+\..{2,}$/.test(email);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (subscribeInput.value === '') {
      showInputError(formMessages.empty);

      return;
    }

    if (!isEmailValid(subscribeInput.value)) {
      showInputError(formMessages.invalidEmail);

      return;
    }

    fetch('https://quiet-oasis-75701.herokuapp.com/emails', {
      method: 'PUT',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: subscribeInput.value,
      },
    })
      .then(response => {
        console.info(response);
        subscribeInput.value = '';
        showInputSuccessMessage(formMessages.success);
      })
      .catch(error => {
        console.error(error);
        showInputError(formMessages.fail);
      });
  };

  subscribeForm.addEventListener('submit', handleFormSubmission);
}

initForm();

const initSubscribeLink = () => {
  const subscribeButtonLink = document.getElementById('subscribe-button-link');
  const subscribeInput = document.getElementById('subscribe-input');
  const subscribeForm = document.getElementById('subscribe-form');

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
}

initSubscribeLink();

// const initLogoScroll = () => {
//   const logoBox = document.getElementById('logo-box');

//   window.addEventListener('scroll', () => {
//     console.log(window.pageYOffset);

//     if (window.pageYOffset > 170) {
//       logoBox.classList.add('_active');

//       return;
//     }

//     logoBox.classList.remove('_active');
//   });
// };

// initLogoScroll();
})();
