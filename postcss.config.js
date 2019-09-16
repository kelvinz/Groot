module.exports = {
	plugins: [
		require( '@fullhuman/postcss-purgecss' )({
			content: [ 'dist/**/*.html', 'dist/**/*.vue','dist/**/*.js' ],
			css: [ 'dist/css/app.css' ],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
		}),
		require( 'autoprefixer' )({
			overrideBrowserslist: '>0.2%, last 4 versions, Firefox ESR,  not ie < 10'
		}),
		require( 'cssnano' )({
			preset: 'default'
		})
	]
}
