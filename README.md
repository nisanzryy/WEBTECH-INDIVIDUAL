# WEBTECH-INDIVIDUAL
WEBTECH INDIVIDUAL ASSIGNMENT INDIVIDUAL 
Java Script Interaction
1. This line selects the form element in the HTML document with the ID ‘salaryDeductionForm’
    
        const form = document.getElementById('salaryDeductionForm');

2. An event listener is added to the form element for the 'submit' event. When the form is submitted which is by clicking the submit button,
this function is triggered. ‘event.preventDefault()’ prevents the default behavior of the form, 
which is to submit and refresh the page. It's used here to stop the form from being submitted immediately so that we can perform validation.

          form.addEventListener('submit', function(event) 
        {
            event.preventDefault(); 

3. Inside the event listener function, this code segment checks if the 'name' field is empty when the form is submitted. 
It retrieves the value of the 'name' input field and uses trim() to remove any leading whitespace. 
If the field is empty, it displays an alert message asking the user to enter their name.

           const nameField = document.getElementById('name');
            if (nameField.value.trim() === '') {
                alert('Please enter your name.');
                return;
            }

4. This line represents the placeholder for handling form submission after all validations pass. 
 
            alert('Form submitted successfully!');
        });

References
1.https://fonts.google.com/ 
2.https://www.pinterest.com/ 
3.https://www.w3schools.com/js/js_htmldom_eventlistener.asp 
4.https://youtu.be/HEpqi6im8CY?si=2pv-j_VOa_chR41K 
5.https://youtu.be/zHZRFwWQt2w?si=VJfjR_m1fnsY3Ia1 
6.https://www.w3schools.com/css/css_form.asp 
7.https://www.w3schools.com/html/html_css.asp 
