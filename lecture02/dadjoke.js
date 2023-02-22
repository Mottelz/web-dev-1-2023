const axios = require("axios");
const showName = 'Doctor Who';

axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${showName}`).then((res) => { 
    console.log(`${res.data.id}: ${res.data.name} (${res.data.status})`);
}
);