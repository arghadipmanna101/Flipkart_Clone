document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sellForm');
    const formSteps = Array.from(document.querySelectorAll('.form-step'));
    const nextButtons = Array.from(document.querySelectorAll('.btn-next'));
    const prevButtons = Array.from(document.querySelectorAll('.btn-prev'));
    const submitButton = form.querySelector('.btn-submit');
    
    let currentStep = 0;

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (validateFormStep(index)) {
                currentStep++;
                updateFormSteps();
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire(
            'Good job!',
            'Form Submitted Successfully!',
            'success'
        );
    });

    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            step.classList.toggle('form-step-active', index === currentStep);
        });
    }

    function validateFormStep(index) {
        const inputs = formSteps[index].querySelectorAll('input');
        for (let input of inputs) {
            if (!input.value) {
                alert(`Please fill in the ${input.previousElementSibling.innerText}`);
                return false;
            }
        }
        return true;
    }

    updateFormSteps();
});
