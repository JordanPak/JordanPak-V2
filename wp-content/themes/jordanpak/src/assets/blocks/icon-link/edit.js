/**
 * Icon/arrow link block edit
 *
 * @since 2.0.0
 */

import IconNameControl from '../../components/icon-name-control';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';

export default function edit( { attributes, setAttributes } ) {
	const { text, icon, iconPosition } = attributes;

	return (
		<>
			<RichText
				tagName="span"
				className="icon-link-text"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ __( 'Ex: View All', 'jordanpak' ) }
				allowedFormats={ [] }
			/>

			<FontAwesomeIcon
				icon={ [ 'far', icon ] }
				className={ `icon-position-${ iconPosition }` }
			/>

			<InspectorControls>
				<PanelBody title={ __( 'Icon', 'jordanpak' ) }>
					<IconNameControl
						value={ icon }
						onChange={ ( value ) =>
							setAttributes( { icon: value } )
						}
					/>

					<RadioControl
						label={ __( 'Position', 'jordanpak' ) }
						options={ [
							{
								label: __( 'Right', 'jordanpak' ),
								value: 'right',
							},
							{
								label: __( 'Left', 'jordanpak' ),
								value: 'left',
							},
						] }
						selected={ iconPosition }
						onChange={ ( value ) =>
							setAttributes( { iconPosition: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
