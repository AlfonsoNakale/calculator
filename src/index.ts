window.Webflow ||= [];
window.Webflow.push(() => {
  // Query the elements
  const form = document.querySelector('[fs-element="form"]');
  if (!form) return;
  // Listen for form submissions
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get the data form the calculator
    const formData = new FormData(form);
    const amount = formData.get('amount');
    const interest = formData.get('interest');
    const term = formData.get('term');
    const extra = formData.get('extra');
    // Perform any maths
    // I + P * r * t
    const total = Number(amount) * (Number(interest) / 100) * Number(term);
    console.log([total]);
    // Display the results
  });
});
