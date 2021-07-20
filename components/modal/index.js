/**
 * Modal Front-end Scripts
 */
const modalTriggers = document.querySelectorAll( 'a[target="_modal"]' )

// Create modal when link with “_modal” target is clicked
for ( let i = 0; i < modalTriggers.length; i++ ) {
	modalTriggers[ i ].addEventListener( 'click', function ( e ) {
		e.preventDefault()

		const url = this.href

		const modal = document.createElement( 'div' )
		modal.classList.add( 'fleximple-components-modal' )

		const modalContent = document.createElement( 'div' )
		modalContent.classList.add( 'fleximple-components-modal__content' )

		const closeButton = document.createElement( 'span' )
		const closeButtonText = document.createTextNode( '×' )
		closeButton.appendChild( closeButtonText )
		closeButton.classList.add( 'fleximple-components-modal__close-button' )

		const iframe = document.createElement( 'iframe' )
		iframe.setAttribute( 'width', '100%' )
		iframe.setAttribute( 'height', '100%' )
		iframe.setAttribute( 'src', url )

		modalContent.appendChild( iframe )
		modal.appendChild( closeButton )
		modal.appendChild( modalContent )
		document.body.appendChild( modal )

		setTimeout( () => modal.classList.add( 'is-visible' ), 100 )
	} )
}

// Remove modal when “×” or modal container is clicked
document.querySelector( 'body' ).addEventListener( 'click', function ( e ) {
	if ( e.target.className === 'fleximple-components-modal__close-button' ) {
		e.target.closest( '.fleximple-components-modal' ).classList.remove( 'is-visible' )
		setTimeout( () => e.target.closest( '.fleximple-modal' ).remove(), 200 )
	}

	if ( e.target.classList[ 0 ] === 'fleximple-components-modal' ) {
		e.target.classList.remove( 'is-visible' )
		setTimeout( () => e.target.remove(), 200 )
	}
} )
