/**
 * Add features to heading block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle } from '@wordpress/blocks';

import './style.scss';

registerBlockStyle( 'core/heading', [
	{
		name: 'condensed-font-family',
		label: __( 'Condensed font', 'jordanpak' ),
		isDefault: false,
	},
	{
		name: 'icon-list-heading',
		label: __( 'Icon list', 'jordanpak' ),
		isDefault: false,
	},
] );
