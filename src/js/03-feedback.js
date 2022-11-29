
import throttle from "lodash.throttle";

const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    button: document.querySelector('.feedback-form button')
}

ref.form.addEventListener('input', throttle(onFormTextareaInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
populateTextareaInput();

function onFormTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
}

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    // очищає форму після відправлення

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    // збирає ключі і значення (localStorage.getItem) і парсить їх в об єкт

    localStorage.removeItem(STORAGE_KEY);
    // очищає localStorage після відправлення

}

function populateTextareaInput() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMessage) {
        console.log(saveMessage);
    }
    ref.textarea.value = saveMessage.message || '';
    ref.input.value = saveMessage.email || '';
}

