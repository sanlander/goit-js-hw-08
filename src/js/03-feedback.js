import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  formTextArea: document.querySelector('.feedback-form textarea'),
  formEmail: document.querySelector('.feedback-form input[name="email"]'),
};

refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
currentTextOnForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  const formDataStringify = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataStringify);
}

function onFormSubmit(e) {
  e.preventDefault();

  refs.feedbackForm.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
}

function currentTextOnForm() {
  const saveText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveText) {
    const { email, message } = saveText;
    if (email) {
      refs.formEmail.value = email;
    }
    if (message) {
      refs.formTextArea.value = message;
    }
  }
}
