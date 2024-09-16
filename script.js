// Linking the CSS file directley from my github repo.
// This works when I retrieve the RAW url from the file on the repo.  
// However The RAW file on gihub serves the link type as text/plain.
// To fix this we can use jsDelivr to detect and sever the correct file type as text/css.
// Referance https://www.jsdelivr.com/github , https://rawgit.com/ , https://stackoverflow.com/questions/7780550/referencing-a-css-file-in-github-repo-as-stylesheet-in-a-html-file .

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/gh/SunbirG/WfTakeHome@main/style.css';
document.head.appendChild(link);

// create new div in body to act as the glass wall.
const elGlasswall = document.createElement('div');

elGlasswall.setAttribute('id', 'wf-glasswall');
document.body.appendChild(elGlasswall);

// Injecting styles in a style tag.
const wfStyle = document.createElement('style');

wfStyle.innerHTML = `
/* ----------------------------------------------------- New block in new section. -----------------------------------------------------*/
#wf-section {
    background: #f2f2f2;
    border-radius: 4px;
    padding: 60px 35px;
    display: flex;
    flex-direction: column;
    height: fit-content;

}
@media (min-width:768px) and (max-width:955px) {
    #wf-section {
        width: 390px;
    }
}
.wf-section__header {    
}
.wf-section__paragraph {
    margin-bottom: 60px;
}
/* ----------------------------------------------------- New Button UI. -----------------------------------------------------*/
.wf-section__button {
    margin-left: auto;
    width: 40%;
    background-color: #4f8232;
    color: white;
    border: 1px solid #000;
    padding: 10px;
    font-size: 25px;
    font-weight: 900;
}
@media (min-width: 275px) and (max-width:955px) {
    .wf-section__button {
        width: 100%;
    }
}
.wf-section__button:hover {
    background-color: #406e2c;
    cursor: pointer;
}
.wf-section__button:focus {
    border: solid 1px #fff;
}
.wf-section__button:disabled {
    background-color: #ebe1e1;
    border: solid 1px #a5a09c;
    color: #a5a09c;
}
.wf-section__button:active {
    background-color: #375f23;
}
/* -----------------------------------------------------New Glasswall. -----------------------------------------------------*/
#wf-glasswall {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    left: 100%;
    background-color: rgba(29, 29, 27, .74);
    z-index: 99999;
    pointer-events: auto;
    transition: left 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}
#wf-glasswall.wf-show-glasswall {
    left: 0; 
}
.wf-glasswall__container {
    position: relative;
    display: flex;
    justify-content: center;
}
.wf-glasswall__hubspot-form {
    min-height: 500px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
}
@media only screen and (min-width: 375px) {
    .wf-glasswall__hubspot-form {
        width: 90vw;
    }
}
@media only screen and (min-width: 768px) {
    .wf-glasswall__hubspot-form {
        width: 60vw;
    }
}
@media only screen and (min-width: 992px) {
    .wf-glasswall__hubspot-form {
        width: 60vw;
    }
}
.wf-glasswall__close-button {
    position: absolute;
    top: -52px;
    right: 5px;
    background: #fff;
    font-size: 28px;
    color: #000;
    cursor: pointer;
    z-index: 100000;
    border-radius: 50%;
    height: 40px;
    width: 40px;
}

.wf-glasswall__close-button:hover {
    background-color: #000;
    color: #fff;
}
/* -----------------------------------------------------Progress Bar. -----------------------------------------------------*/
.wf-hubspot-form__progress-bar {
    position: relative;
    display: flex;
    gap: 20%;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
}
@media only screen and (min-width: 375px) {
    .wf-hubspot-form__progress-bar {
        width: 90vw;
    }
}
@media only screen and (min-width: 768px) {
    .wf-hubspot-form__progress-bar {
        width: 60vw;
    }
}
@media only screen and (min-width: 992px) {
    .wf-hubspot-form__progress-bar {
        width: 60vw;
    }
}
/* .wf-hubspot-form__progress-bar::before {
    content:"";
    position: absolute;
    top: 45%;
    left: 0; 
    transform: translateY(-50%);
    height: 4px;
    width: 75%;
    background-color: #d5d4d5;
}
@media (min-width: 375px) and (max-width:500px) {
    .wf-hubspot-form__progress-bar::before {
        width: 70%;
    }
} */
.progress-bar__step svg {
    width: 50%;
    height: 50%;
}
.progress-bar__step {
    width: 50px;
    height: 50px;
    background-color: #d5d4d5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: relative;
}
.progress-bar__step::after {
    content: attr(data-title);
    position: absolute;
    top: calc(100% + 4px);
    font-size: 12px;
    width: 60px;
    display: flex;
    justify-content: center;
}
.progress-bar__step-active {
    background-color: #5475cd;
    color: #5475cd;
}
.step-svg-active {
    fill: #fff;
}
.step-svg-tick {
    display: none;
    position: absolute;
    height: 20px !important;
    width: 20px !important;
    top: -6px;
    right: -5px;
    fill: green;
}
/* -----------------------------------------------------New hubspot form fields. -----------------------------------------------------*/
.hubspot-form__step-one > label,
.hubspot-form__step-two > label,
.hubspot-form__step-three > label {
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    display: block;
    float: none;
    width: auto;
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    padding-top: 0;
    margin-bottom: 10px;
    cursor: pointer;
}

.hubspot-form__step-two,
.hubspot-form__step-three {
    display:none;
}

#hubspot-form__firstname,
#hubspot-form__lastname,
#hubspot-form__email,
#hubspot-form__help  {
    display: inline-block;
    width: 100%;
    height: 46px;
    padding: 9px 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #33475b;
    border: 1px solid #cbd6e2;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 20px;
}
#hubspot-form__help  {
    min-height: 120px;
}
#hubspot-form__legal {
    appearance: auto;
}
.hubspot-form__legal-label {
    display: unset !important;
}
.hubspot-form__legal-label,
.hubspot-form__privacy {
    font-size: 12px !important;
    line-height: 18px;
}
.hubspot-form__privacy {
    margin-top: 10px;
}
.hubspot-form__submit {
    display: none;
    margin-bottom: 20px;
}
.hubspot-form__required {
    color: red;
}
.hubspot-form__button-next, .hubspot-form__button-prev, .hubspot-form__submit {
    width: 100%;
}
.hubspot-form__step-three p {
    display: flex;
    justify-content: center;
}

`;

document.head.appendChild(wfStyle);

// Removing forms off page

const elWfWorldForm = document.querySelector('.contact-form__form.kam-world');
const elWfUSForm = document.querySelector('.contact-form__form.kam-uk-us');

if (elWfWorldForm) elWfWorldForm.remove();
if (elWfUSForm) elWfUSForm.remove();

// Show first step and hide others
// Add green tick

let stepOneCompleted = false;
let stepTwoCompleted = false;
let submitClicked = false;

function wfShowStep(step) {
    const wfSteps = document.querySelectorAll('.wf-glasswall__hubspot-form > div');
    const wfProgressSteps = document.querySelectorAll('.progress-bar__step');
    const wfStepOneFields = Array.from(document.querySelectorAll('#hubspot-form__firstname, #hubspot-form__lastname, #hubspot-form__email'));
    const wfStepTwoFields = Array.from(document.querySelectorAll('#hubspot-form__help'));

    wfSteps.forEach((el, index) => {
        el.style.display = index === step ? 'block' : 'none';
    });

    wfProgressSteps.forEach((el, index) => {
        const wfStepSvgTick = el.querySelector('.step-svg-tick');
        if (index <= step) {
            el.classList.add('progress-bar__step-active');
            el.querySelector('.step-svg').classList.add('step-svg-active');

  
            if (index === 0) {
                if (wfStepOneFields.every(field => field.value.trim() !== '') || stepOneCompleted) {
                    wfStepSvgTick.style.display = 'flex';
                    stepOneCompleted = true;
                } else {
                    wfStepSvgTick.style.display = 'none';
                }
            } else if (index === 1) {
                if (wfStepTwoFields.every(field => field.value.trim() !== '') || stepTwoCompleted) {
                    wfStepSvgTick.style.display = 'flex';
                    stepTwoCompleted = true; 
                } else {
                    wfStepSvgTick.style.display = 'none';
                }
            } else if (index === 2) {
          
                if (submitClicked || step === 2) {
                    wfStepSvgTick.style.display = 'flex';
                } else {
                    wfStepSvgTick.style.display = 'none';
                }
            }
        } else {
            el.classList.remove('progress-bar__step-active');
            el.querySelector('.step-svg').classList.remove('step-svg-active');
            wfStepSvgTick.style.display = 'none';
        }
    });
}

function onSubmitButtonClick() {
    submitClicked = true;
    wfShowStep(2);
}


// Call this function when submit button is clicked

function onSubmitButtonClick() {
    submitClicked = true;
    wfShowStep(2);
}

// function to validate the fields in step one

function wfValidateStepOne() {
    const wfFirstName = document.getElementById('hubspot-form__firstname').value.trim();
    const wfLastName = document.getElementById('hubspot-form__lastname').value.trim();
    const wfEmail = document.getElementById('hubspot-form__email').value.trim();
    return wfFirstName && wfLastName && wfEmail;
}

// function to validate the fields in step two

function wfValidateStepTwo() {
    const wfHelpText = document.getElementById('hubspot-form__help').value.trim();
    const wfLegalCheckbox = document.getElementById('hubspot-form__legal').checked;
    return wfHelpText && wfLegalCheckbox;
}

// Creating a Glasswall for the modal.

function showModal() {
    const elWfGlasswall = document.createElement('div');
    elWfGlasswall.setAttribute('id', 'wf-glasswall');
    elWfGlasswall.innerHTML = `
    <div class="wf-hubspot-form__progress-bar">
    <button class="wf-glasswall__close-button" aria-label="Close Modal">&times;</button>
    <div class="progress-bar__step progress-bar__step-active" data-title="User Info"><svg class="step-svg step-svg-active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/></svg><svg class="step-svg-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></div>
    <div class="progress-bar__step" data-title="Inquiry"><svg class="step-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg><svg class="step-svg-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></div>
    <div class="progress-bar__step" data-title="Complete"><svg class="step-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg><svg class="step-svg-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></div>
</div>
        <form class="wf-glasswall__hubspot-form" action="/submit" method="post">
            <!-- Step One -->
            <div class="hubspot-form__step-one">
                <label for="firstname">First Name<span class="hubspot-form__required">*</span></label>
                <input type="text" id="hubspot-form__firstname" name="firstname" placeholder="First Name" required>

                <label for="lastname">Last name<span class="hubspot-form__required">*</span></label>
                <input type="text" id="hubspot-form__lastname" name="lastname" placeholder="Last Name" required>

                <label for="email">Work Email<span class="hubspot-form__required">*</span></label>
                <input type="email" id="hubspot-form__email" name="email" placeholder="Work email" required>
                <div class="wf-glasswall__hubspot-form-nav">
                    <button type="button" class="hubspot-form__button-next wf-section__button" disabled>Next</button>
                </div>
            </div>
            <!-- Step Two -->
            <div class="hubspot-form__step-two">
                <label for="hubspot-form__help">How can we help you?</label>
                <textarea id="hubspot-form__help" name="hubspot-form__help" rows="4" cols="50" placeholder="Tell us more about how we can help "></textarea>

                <input type="checkbox" id="hubspot-form__legal" name="hubspot-form__legal">
                <label for="hubspot-form__legal" class="hubspot-form__legal-label">Yes, I would like to receive updates and other information from Conversion.</label>
                
                <p class="hubspot-form__privacy">I agree to accept the <a href="https://conversion.com/privacy-policy/" target="_blank" rel="noopener">Privacy Terms</a> relating to UK Data Protection Laws and GDPR.&nbsp;</p>
    
                <input class="hubspot-form__submit wf-section__button" type="submit" value="Submit">

                <div class="wf-glasswall__hubspot-form-nav">
                    <button type="button" class="hubspot-form__button-prev wf-section__button" disabled>Previous</button>
                </div>
            </div>
            <!-- Step Three -->
            <div class="hubspot-form__step-three">
                <p class="hubspot-form__thanks">Thank you for contacting us. We will be getting in touch shortly.</p>
            </div>
        </form>
    </div>
    `;

    // elWfGlasswall.addEventListener('click', () => {
    //     elWfGlasswall.remove();
    // }); 

    document.body.appendChild(elWfGlasswall);
    document.getElementById('wf-glasswall').classList.add('wf-show-glasswall');
    wfShowStep(0)

    // Closing the modal

    const wfCloseButton = document.querySelector('.wf-glasswall__close-button');
    if (wfCloseButton) {
        wfCloseButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('wf-glasswall').classList.remove('wf-show-glasswall');
            setTimeout(() => {
                document.getElementById('wf-glasswall').remove();
            }, 100);
        });
    }

     // Validating if all fields are filled before making button usable

    document.querySelectorAll('#hubspot-form__firstname, #hubspot-form__lastname, #hubspot-form__email')
    .forEach(input => input.addEventListener('input', () => {
        document.querySelector('.hubspot-form__button-next').disabled = !wfValidateStepOne();
    }));

     // Adding an Eventlistner to the prvious button in step two

    document.querySelector('.hubspot-form__button-next').addEventListener('click', () => {
        wfShowStep(1);
    });

     // Validating if all fields are filled before making button usable

    document.querySelectorAll('#hubspot-form__help, #hubspot-form__legal')
        .forEach(input => input.addEventListener('input', () => {
            const wfAllValid = wfValidateStepTwo();
            document.querySelector('.hubspot-form__button-prev').disabled = !wfAllValid;
            document.querySelector('.hubspot-form__submit').style.display = wfAllValid ? 'block' : 'none';
        }));
    
    // Adding an Eventlistner to the prvious button in step two

    document.querySelector('.hubspot-form__button-prev').addEventListener('click', () => {
        wfShowStep(0);
    });

    // Adding an Eventlistner to the submit in step two and to stop the submit button from submission

    document.querySelector('.hubspot-form__submit').addEventListener('click', (e) => {
        e.preventDefault();
        wfShowStep(2);
    });
}

    // Creating a function to add a new section where the form was with a clickable button to open show the modal

(function() {
    const elWfNewSectionContainer = document.querySelector('.contact-form__inner');
    const elWfNewSection = document.createElement('div');
    elWfNewSection.setAttribute('id', 'wf-section');
    elWfNewSection.innerHTML = `
        <h3 class="wf-section__header">Hello Conversion!</h3>
        <p class="wf-section__paragraph">Click on the button below to contact us</p>
        <button class="wf-section__button">Click here</button>
    `;
    elWfNewSectionContainer.appendChild(elWfNewSection);


    const elWfNewSectionButton = document.querySelector('#wf-section .wf-section__button');

    if (elWfNewSectionButton) {
        elWfNewSectionButton.addEventListener('click', showModal);
    }
})();