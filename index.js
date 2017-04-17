'use strict'

var Apriori = require('apriori.js');

module.exports = {
	apriori: function (data, options) {
		return new Promise((resolve, reject) => {
			try {
				var result = Apriori(data, options);
				resolve(result);
			} catch (e) {
				reject(e);
			}
		});
	}
}