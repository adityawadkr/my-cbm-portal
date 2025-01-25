function uploadFile() {
    try {
        const fileInput = document.getElementById('file-input');
        if(!fileInput) throw new Error("File input not found!");
        
        const file = fileInput.files[0];
        if(!file) {
            alert("Please select a file first!");
            return;
        }

        console.log("Attempting to upload:", file.name); // Debug log
        
        const formData = new FormData();
        formData.append('file', file);

        fetch(config.backendUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log("Server response:", response.status);
            return response.text();
        })
        .then(data => {
            console.log("Full response:", data);
            document.getElementById('results').innerHTML = data;
        })
        .catch(error => {
            console.error("Upload failed:", error);
            alert("Upload failed: " + error.message);
        });
    } catch(error) {
        console.error("Critical error:", error);
        alert("System error: " + error.message);
    }
}
