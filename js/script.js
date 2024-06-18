document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('digital-log');

  form.addEventListener('submit', submitForm);

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbz1Tp-G2ifohD2yaQ262AZNIiCxin6X7aofrMaDTT5TbfK66ZU6Vy4Tq61Foas35ijh/exec', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert('Form submitted successfully!');
        refreshTable(); // Refresh the table after successful form submission
      } else {
        alert('Form submission failed: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Form submission failed: ' + error.message);
    });
  }
});
