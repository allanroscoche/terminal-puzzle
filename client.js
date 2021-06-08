const axios = require('axios');
axios.defaults.baseURL= "http://localhost:3000";

axios.get('/unlock?key=123').
	then( (res) => {
		const { data } = res;
		if (data) {
			console.log(data);
		}
	});
