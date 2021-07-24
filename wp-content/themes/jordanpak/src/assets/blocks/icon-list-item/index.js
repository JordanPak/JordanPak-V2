/**
 * Icon list item block
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { heading as icon } from '@wordpress/icons';

import URLWrapper from '../../components/url-wrapper';

import './style.scss';

import edit from './edit';
import save from './save';

const config = {
	apiVersion: 2,
	title: __( 'Icon list item', 'jordanpak' ),
	icon,
	keywords: [ __( 'projects' ), __( 'icon' ), __( 'list' ) ],
	category: 'text',

	attributes: {
		icon: {
			type: 'string',
			source: 'attribute',
			selector: '.fa-light',
			attribute: 'data-icon',
			default: 'hammer',
		},

		text: {
			type: 'html',
			source: 'html',
			selector: '.jp-icon-list-item-text',
		},

		smallText: {
			type: 'html',
			source: 'html',
			selector: '.jp-icon-list-item-small-text',
		},
	},

	edit,
	save,
};

registerBlockType( 'jordanpak/icon-list-item', URLWrapper( config ) );
