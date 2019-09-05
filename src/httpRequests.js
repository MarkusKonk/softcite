const axios = require('axios');

function searchBinding(term, metadata){
    return axios.post(_env.api + 'bindings/searchBinding', {term:term, metadata: metadata});
}

function testRequest() {
    return axios.get("https://api.github.com/repos/MarkusKonk/Zenodo-test/contributors");
}

module.exports = {
    testRequest: testRequest,
};