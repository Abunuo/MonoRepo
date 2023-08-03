export const getUploadFile = (inputId = "file-input", accept) => {
    return new Promise((resove, reject) => {
        const fileInput = document.getElementById(inputId) ?? document.createElement("input");
        fileInput.id = inputId;
        fileInput.type = "file";
        fileInput.accept = accept ?? "*";
        fileInput.style.display = "none";
        document.body.append(fileInput);
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            resove(file);
            fileInput.remove();
        };
        fileInput.click();
    });
};
