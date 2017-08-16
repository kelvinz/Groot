// rand( 1, 10, 1 )
// random number between range
// possible to hit min, but not max
// if round instead of floor, possible to hit max
function rand( min, max, floor ) {
	let val = min + ( Math.random() * ( max - min ) );
	if ( floor ) val = Math.floor( val );
	return val;
}

// const oneTimeFunction = once( function() {
// 	// function goes here
// });
// creates function that only runs once
function once( fn, context ) {
	let result;
	return function() {
		if( fn ) {
			result = fn.apply( context || this, arguments );
			fn = null;
		}
		return result;
	};
}

// const myFunction = debounce( function() {
// 	// stuff I want to do
// }, 500);
// window.addEventListener( 'resize', myFunction );
// function waits or immediately activates only after x is done
function debounce( func, wait, immediate ) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if ( !immediate ) func.apply( context, args );
		};
		let callNow = immediate && !timeout;
		clearTimeout( timeout );
		timeout = setTimeout( later, wait );
		if ( callNow ) func.apply( context, args );
	};
};
