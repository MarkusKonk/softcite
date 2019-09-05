const axios = require('axios');

function testRequest() {
    return axios.get("https://api.github.com/repos/MarkusKonk/Zenodo-test/contributors");
}

module.exports = {
    testRequest: testRequest,
};