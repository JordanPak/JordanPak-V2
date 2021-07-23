/**
 * Accordions block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { formatListNumbered as icon } from '@wordpress/icons';

const BLOCKS_TEMPLATE = [
	[ 'core/heading' ],
	[ 'jordanpak/accordion-list' ],
	[ 'jordanpak/accordion-list' ],
	[ 'jordanpak/accordion-link' ],
];

const ALLOWED_BLOCKS = [
	'core/heading',
	'jordanpak/accordion-list',
	'jordanpak/accordion-link',
];

// import './style.css';
// import './editor.css';

/**
 * Register accordions block.
 *
 * {@link https://wordpress.org/gutenberg/handbook/block-api/}
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'jordanpak/accordions', {
	apiVersion: 2,
	title: __( 'Accordions', 'jordanpak' ),
	icon,
	category: 'text',
	keywords: [ __( 'list' ), __( 'skills' ), __( 'accordion' ) ],

	edit: () => {
		return (
			<aside { ...useBlockProps() }>
				<InnerBlocks
					template={ BLOCKS_TEMPLATE }
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</aside>
		);
	},

	save: () => {
		return (
			<aside { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</aside>
		);
	},
} );
