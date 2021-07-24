/**
 * Add features to list block
 *
 * @since 2.0.0
 */

import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { registerBlockStyle } from '@wordpress/blocks';

import './style.scss';

registerBlockStyle( 'core/list', [
	{
		name: 'checklist',
		label: __( 'Checklist', 'jordanpak' ),
		isDefault: false,
	},
] );

const isList = ( name ) => {
	return name === 'core/list';
};

/**
 * Add classes for custom features to block
 *
 * @since 2.0.0
 *
 * @param  {Object}  props       block properties
 * @param  {Object}  blockType   block type/registration details
 * @param  {Object}  attributes  block attributes
 * @return {Object}  props
 */
const addClasses = ( props, blockType, attributes ) => {
	if ( ! isList( blockType.name ) ) {
		return props;
	}

	// always add bulleted-list
	props.className = classnames( props.className, {
		'bulleted-list': ! attributes.ordered,
	} );

	return props;
};

// Add classes to block wrapper
addFilter(
	'blocks.getSaveContent.extraProps',
	'jordanpak/list/add-classes',
	addClasses
);
