/**
 * Accordion list item block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { formatListNumbered as icon } from '@wordpress/icons';
import { useBlockProps, RichText } from '@wordpress/block-editor';

// import './style.css';
// import './editor.css';

/**
 * Register accordion list item block
 *
 * {@link https://wordpress.org/gutenberg/handbook/block-api/}
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully registered; otherwise `undefined`.
 */
registerBlockType( 'jordanpak/accordion-list-item', {
	apiVersion: 2,
	title: __( 'List Item', 'jordanpak' ),
	icon,
	category: 'text',
	keywords: [ __( 'accordion' ), __( 'list' ), __( 'item' ) ],

	parent: [ 'jordanpak/accordion-list' ],

	attributes: {
		content: {
			type: 'html',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { content } = attributes;

		return (
			<div { ...useBlockProps() }>
				<RichText
					tagName="span"
					value={ content }
					onChange={ ( value ) =>
						setAttributes( { content: value } )
					}
					placeholder={ __( 'Ex: Custom theming', 'jordanpak' ) }
				/>
			</div>
		);
	},

	save: ( { attributes } ) => {
		const { content } = attributes;

		return (
			<li { ...useBlockProps.save() }>
				<RichText.Content
					tagName="span"
					className="jp-accordion-list-item-content"
					value={ content }
				/>
			</li>
		);
	},
} );
