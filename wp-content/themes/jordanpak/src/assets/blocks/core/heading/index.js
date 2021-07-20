/**
 * Add features to heading block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/heading', [
	{
		name: 'condensed-font-family',
		label: __( 'Condensed font', 'jordanpak' ),
		isDefault: false,
	},
] );
