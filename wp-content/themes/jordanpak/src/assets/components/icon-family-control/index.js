/**
 * Font Awsesome icon family control
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

const IconFamilyControl = ( { value, onChange } ) => {
	const viewIcons = (
		<a
			href="https://fontawesome.com/v6.0/icons"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ __( 'View Icons/Families', 'jordanpak' ) }
		</a>
	);

	return (
		<SelectControl
			label={ __( 'Font Awesome Icon Family', 'jordanpak' ) }
			help={ viewIcons }
			value={ value }
			options={ [
				{ label: __( 'Regular' ), value: 'far' },
				{ label: __( 'Light' ), value: 'fal' },
				{ label: __( 'Brands' ), value: 'fab' },
			] }
			onChange={ onChange }
		/>
	);
};

export default IconFamilyControl;
