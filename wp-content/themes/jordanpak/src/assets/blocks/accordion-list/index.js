/**
 * Accordion list block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { formatListNumbered as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

// import './style.css';
// import './editor.css';

/**
 * Register accordion list block.
 *
 * {@link https://wordpress.org/gutenberg/handbook/block-api/}
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'jordanpak/accordion-list', {
	apiVersion: 2,
	title: __( 'Accordion List', 'jordanpak' ),
	icon,
	category: 'text',
	keywords: [ __( 'list' ), __( 'skills' ), __( 'accordion' ) ],

	attributes: {
		heading: {
			type: 'html',
			source: 'html',
			selector: '.jp-accordion-list-heading-text',
			default: __( 'Edit This Heading', 'jordanpak' ),
		},

		icon: {
			type: 'string',
			source: 'attribute',
			selector: '[class^=fa]',
			attribute: 'data-icon',
			default: 'wordpress',
		},

		iconFamily: {
			type: 'string',
			source: 'attribute',
			selector: '[class^=fa]',
			attribute: 'data-icon-family',
			default: 'fab',
		},
	},

	edit,
	save,
	// /**
	//  * Block edit
	//  *
	//  * @return {Object}  JSX Component.
	//  */
	// edit: () => {
	// 	return (
	// 		<div { ...useBlockProps() }>
	// 			<InnerBlocks
	// 				template={ BLOCKS_TEMPLATE }
	// 				allowedBlocks={ ALLOWED_BLOCKS }
	// 			/>
	// 		</div>
	// 	);
	// },

	// /**
	//  * Block save
	//  *
	//  * @return {Object}  JSX Frontend HTML.
	//  */
	// save: () => {
	// 	return (
	// 		<ul { ...useBlockProps.save() }>
	// 			<InnerBlocks.Content />
	// 		</ul>
	// 	);
	// },
} );
