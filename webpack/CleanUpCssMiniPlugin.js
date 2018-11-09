import _filter from 'lodash/filter'

function CleanUpCssMiniPlugin() {}

CleanUpCssMiniPlugin.prototype.apply = function(compiler) {
	compiler.hooks.done.tap('CleanUpCssMiniPlugin', function(stats) {
		var children = stats.compilation.children;
		if (Array.isArray(children)) {
			// eslint-disable-next-line no-param-reassign
			stats.compilation.children = _filter(children, function(child) {
				return child.name.indexOf('mini-css-extract-plugin') !== 0;
			});
		}
	});
};

module.exports = CleanUpCssMiniPlugin;