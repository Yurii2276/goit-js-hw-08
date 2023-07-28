import throttle from 'lodash.throttle';

const KEY_INPUT_FIELD = `feedback-form-state`;
const refs = {
    emailInput: document.querySelector(`input[name="email"]`),
    messageInput: document.querySelector('textarea[name="message"]'),
    submitBtn: document.querySelector('.feedback-form'),
}



refs.emailInput.addEventListener('input', throttle(emailProcessing, 500)); 
refs.messageInput.addEventListener('input', throttle(messageProcessing, 500));
refs.submitBtn.addEventListener('submit', handleSubmit);




 function emailProcessing(event) {
    const emailValue = event.target.value;
     saveToLocalStorage({ email: emailValue });
     console.log(`Email: ${emailValue}`);
};

function messageProcessing(event) {
    const messageValue = event.target.value;
    saveToLocalStorage({ message: messageValue });
  console.log(`Message: ${messageValue}`);
    };

    function saveToLocalStorage(data) {
      const savedFormData = JSON.parse(localStorage.getItem(KEY_INPUT_FIELD)) || {};
      const updatedFormData = { ...savedFormData, ...data };
      localStorage.setItem(KEY_INPUT_FIELD, JSON.stringify(updatedFormData));

};
    
function handleSubmit(event) {
      
      event.preventDefault();

      const formData = JSON.parse(localStorage.getItem(KEY_INPUT_FIELD));
      console.log('Form data:', formData);

      localStorage.removeItem(KEY_INPUT_FIELD);

      refs.emailInput.value = '';
      refs.messageInput.value = '';
};