document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add more client-side validation here if needed

        // Submit the form using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Display success message
                successMessage.style.display = 'block';
            }
        };

        // Serialize form data
        var formData = new FormData(form);
        var encodedData = new URLSearchParams(formData).toString();

        xhr.send(encodedData);
    });
});
