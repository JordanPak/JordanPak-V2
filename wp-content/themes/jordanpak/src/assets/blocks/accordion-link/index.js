/**
 * Accordion link block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { link as icon } from '@wordpress/icons';

import URLWrapper from '../../components/url-wrapper';

import edit from './edit';
import save from './save';

// import './style.scss';

const config = {
	apiVersion: 2,
	title: __( 'Accordion Link', 'jordanpak' ),
	description: __( 'Link for an accordions block', 'jordanpak' ),
	icon,
	category: 'design',
	keywords: [
		__( 'accordion link', 'jordanpak' ),
		__( 'icon link', 'jordanpak' ),
		__( 'button', 'jordanpak' ),
	],

	parent: [ 'jordanpak/accordions' ],

	attributes: {
		text: {
			type: 'html',
			source: 'html',
			selector: '.jp-accordion-link-text',
		},

		icon: {
			type: 'string',
			source: 'attribute',
			selector: '[class^=fa]',
			attribute: 'data-icon',
			default: 'download',
		},

		iconFamily: {
			type: 'string',
			source: 'attribute',
			selector: '[class^=fa]',
			attribute: 'data-icon-family',
			default: 'far',
		},
	},

	edit,
	save,
};

/**
 * Register accordion link block
 *
 * {@link https://wordpress.org/gutenberg/handbook/block-api/}
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully registered; otherwise `undefined`.
 */
registerBlockType( 'jordanpak/accordion-link', URLWrapper( config ) );
