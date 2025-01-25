function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    const formData = new FormData();
    formData.append('file', file);

    fetch(config.backendUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('results').innerHTML = `
            <h3>Analysis Results:</h3>
            <pre>${data}</pre>
        `;
    });
}
