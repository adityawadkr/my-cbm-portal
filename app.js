function uploadFile() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  
  if(!file) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  fetch(config.backendUrl, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    document.getElementById('results').innerHTML = `
      <h3>Analysis Results:</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    alert(`Upload failed: ${error.message}`);
  });
}
