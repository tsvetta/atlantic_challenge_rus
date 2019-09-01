;(() => {
  const initForm = () => {
    const subscribeForm = document.getElementById('subscribe-form')
    if (!subscribeForm) {
        return
    }

    const subscribeInput = document.getElementById('subscribe-input')
    const subscribeInputMessage = document.getElementById('subscribe-input-message')

    const formMessages = {
      empty: subscribeInputMessage.dataset.messageEmptyError,
      fail: subscribeInputMessage.dataset.messageError,
      success: subscribeInputMessage.dataset.messageSuccess,
      invalidEmail: subscribeInputMessage.dataset.messageInvalid,
    }

    const showInputError = errorText => {
      subscribeInputMessage.classList.add('_error')
      subscribeInputMessage.classList.remove('_success')
      subscribeInputMessage.innerText = errorText
    }

    const showInputSuccessMessage = successText => {
      subscribeInputMessage.classList.add('_success')
      subscribeInputMessage.classList.remove('_error')
      subscribeInputMessage.innerText = successText
    }

    const isEmailValid = email => {
      return /^.+@.+\..{2,}$/.test(email)
    }

    const handleFormSubmission = e => {
      e.preventDefault()

      if (subscribeInput.value === '') {
        showInputError(formMessages.empty)

        return
      }

      if (!isEmailValid(subscribeInput.value)) {
        showInputError(formMessages.invalidEmail)

        return
      }

      fetch('https://atlantic-emails.firebaseio.com/emails.json', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: subscribeInput.value,
          addedAt: new Date().toISOString(),
        }),
      })
        .then(res => res.json().then(data => ({ res, data })))
        .then(({ res, data }) => {
          if (res.ok) {
            subscribeInput.value = ''
            showInputSuccessMessage(formMessages.success)

            return
          }

          return Promise.reject(data)
        })
        .catch(error => {
          showInputError(formMessages.fail)
          console.error(error)
        })
    }

    subscribeForm.addEventListener('submit', handleFormSubmission)
  }

  initForm()

  const initSubscribeLink = () => {
    const subscribeButtonLink = document.getElementById('subscribe-button-link')
    const subscribeInput = document.getElementById('subscribe-input')
    const subscribeForm = document.getElementById('subscribe-form')

    subscribeButtonLink.addEventListener('click', () => {
      window.scrollTo({
        top: subscribeForm.offsetTop - 300,
        behavior: 'smooth',
      })

      subscribeForm.classList.add('training-subscribe_blink')

      setTimeout(() => {
        subscribeInput.focus()
      }, 500)

      setTimeout(() => {
        subscribeForm.classList.remove('training-subscribe_blink')
      }, 1500)
    })
  }

  initSubscribeLink()
})()
