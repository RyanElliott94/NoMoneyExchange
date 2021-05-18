const apiURL = process.env.REACT_APP_API_URL;

const uploadFiles = fileData => {
    const formData = new FormData();
    formData.append("fileData", fileData);

    return new Promise((resolve, reject) => {
        fetch(`${apiURL}/main/upload-media-files`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
        .then(data => data.successful ? resolve({fileData: data.fileData, token: data.token}) : reject({failed: true}));
    });
}

const getFileFromToken = token => {
    return new Promise((resolve, reject) => {
        fetch(`${apiURL}/main//fetch-file-with-token/token/${token}`).then(res => res.json())
        .then(data => data.successful ? resolve(data) : reject({failed: true}));
    });
}

module.exports = {
    uploadFiles,
    getFileFromToken
}