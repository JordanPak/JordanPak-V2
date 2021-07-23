/**
 * Add features to paragraph block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle } from '@wordpress/blocks';

import './style.scss';

registerBlockStyle( 'core/paragraph', [
	{
		name: 'footnote',
		label: __( 'Footnote', 'jordanpak' ),
		isDefault: false,
	},
] );
