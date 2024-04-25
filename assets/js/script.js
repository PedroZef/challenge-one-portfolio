const messages = {
    nome: {
      valueMissing: 'O campo de nome não pode estar vazio.',
      patternMismatch: 'Por favor, preencha um nome válido.',
    },
    email: {
      valueMissing: 'O campo de e-mail não pode estar vazio.',
      typeMismatch: 'Por favor, preencha um email válido.',
    },
    assunto: {
      valueMissing: 'O campo de assunto não pode estar vazio.',
      patternMismatch: 'Por favor, preencha com um assunto válido.',
    },
    mensagem: {
      valueMissing: 'O campo de mensagem não pode estar vazio.',
      patternMismatch: 'Por favor, preencha com uma mensagem válida.',
    },
  };
  
  const formsInput = document.querySelectorAll('input[required], textarea[required]');
  
  formsInput.forEach((field) => {
    field.addEventListener('blur', () => checkFieldValidity(field));
  });
  
  const errorTypes = ['valueMissing', 'typeMismatch', 'patternMismatch'];
  
  function checkFieldValidity(field) {
    let message = '';
  
    errorTypes.forEach((errorType) => {
      if (field.validity[errorType]) {
        message = messages[field.name][errorType];
        console.log(message);
      }
    });
  
    const messageError = field.parentNode.querySelector('.formcontato__error');
    const inputCheck = field.checkValidity();
  
    if (!inputCheck) {
      messageError.textContent = message;
    } else {
      messageError.textContent = '';
    }
  }

