const config = {
    apiBaseUrl: "https://pedalpress-server.test/api"
};

function getApiUrl(endpoint) {
    return `${config.apiBaseUrl}/${endpoint}`;
}

export {getApiUrl};