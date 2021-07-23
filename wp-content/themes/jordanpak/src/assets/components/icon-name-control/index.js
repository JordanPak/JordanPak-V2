/**
 * Font Awsesome icon name control
 *
 * @since 2.0.0
 */

import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

const IconNameControl = ( { value, onChange } ) => {
	const viewIcons = (
		<a
			href="https://fontawesome.com/v6.0/icons?d=gallery&p=1&s=regular"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ __( 'View Icons', 'jordanpak' ) }
		</a>
	);

	return (
		<TextControl
			label={ __( 'Font Awesome Icon Name', 'jordanpak' ) }
			placeholder={ __( 'Ex: rocket', 'jordanpak' ) }
			help={ viewIcons }
			onChange={ onChange }
			value={ value }
		/>
	);
};

export default IconNameControl;
