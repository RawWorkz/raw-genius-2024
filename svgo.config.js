// svgo.config.js
module.exports = {
	js2svg: {
		indent: 2, // string with spaces or number of spaces. 4 by default
		pretty: true, // boolean, false by default
	},
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {

					// or disable plugins
					cleanupIds: false, // we need the ids to toggle the groups
					removeHiddenElems: false, // need the hidden elements (with ids)
					removeEmptyContainers: false, // need the hidden elements (with ids)
				},
			},
		},
	],

};
