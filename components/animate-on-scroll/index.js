/**
 * Animate On Scroll Front-end Scripts
 */


/**
 * Internal dependencies
 */
import {
	animationList,
	animationOutList,
	delayList,
	durationList,
	repeatList,
} from '../animation-controls/definitions'

window.onload = () => {
	const elements = document.querySelectorAll( '.animate__animated' )
	for ( const element of elements ) {
		const classes = element.classList.value.split( ' ' )
		element.animateClasses = []

		if ( ! isElementInViewport( element ) ) {
			let animationClass
			animationList.forEach( animation => {
				if ( classes.find( ( currentValue ) => currentValue.endsWith( animation ) ) ) {
					animationClass = `animate__${ animation }`
				}
			} )
			let delayClass
			delayList.forEach( delay => {
				if ( classes.find( ( currentValue ) => currentValue.endsWith( delay ) ) ) {
					delayClass = `animate__delay-${ delay }`
				}
			} )
			let durationClass
			durationList.forEach( duration => {
				if ( classes.find( ( currentValue ) => currentValue.endsWith( duration ) ) ) {
					durationClass = `animate__${ duration }`
				}
			} )
			let repeatClass
			repeatList.forEach( repeat => {
				if ( classes.find( ( currentValue ) => currentValue.endsWith( repeat ) ) ) {
					repeatClass = `animate__${ repeat }`
				}
			} )

			element.classList.add( 'is-hidden' )

			if ( animationClass ) {
				element.animateClasses.push( animationClass )
				element.classList.remove( animationClass )
			}
			if ( delayClass ) {
				element.animateClasses.push( delayClass )
				element.classList.remove( delayClass )
			}
			if ( durationClass ) {
				element.animateClasses.push( durationClass )
				element.classList.remove( durationClass )
			}
			if ( repeatClass ) {
				element.animateClasses.push( repeatClass )
				element.classList.remove( repeatClass )
			}
		}

		animationOutList.forEach( ( i ) => {
			const isAnimateOut = element.className.includes( i )

			if ( isAnimateOut ) {
				element.addEventListener( 'animationend', () => {
					element.classList.remove( i )
				} )
			}
		} )
	}

	window.onscroll = () => {
		for ( const element of elements ) {
			if ( element.getBoundingClientRect().top <= window.innerHeight * 0.75 && 0 < element.getBoundingClientRect().top ) {
				if ( element.animateClasses && 0 < element.animateClasses.length ) {
					const classes = element.animateClasses
					classes.forEach( ( i ) => element.classList.add( i ) )
					element.classList.remove( 'is-hidden' )
					delete element.animateClasses
				}
			}
		}
	}
}

const isElementInViewport = ( el ) => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll

	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}

	const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}

	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top )
}
