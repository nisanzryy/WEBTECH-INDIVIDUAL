     
        const form = document.getElementById('salaryDeductionForm');
        form.addEventListener('submit', function(event) 
        {
            event.preventDefault(); 
            const nameField = document.getElementById('name');
            if (nameField.value.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            alert('Form submitted successfully!');
        });
