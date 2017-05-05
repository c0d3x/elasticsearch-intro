const ELASTICSEARCH = require('elasticsearch');
const CLIENT = new ELASTICSEARCH.Client({
	host: 'localhost:9200',
	apiVersion: '5.0'
});

CLIENT.get({
	index: 'simpsons',
	type: 'episode',
	id: 1
}, function(err, resp){
	if(err) {
		console.log(err);
	} else {
		console.log(resp);
	}
});