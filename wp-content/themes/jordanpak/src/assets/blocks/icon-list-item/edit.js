/**
 * Icon list item block edit
 *
 * @since 2.0.0
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import IconNameControl from '../../components/icon-name-control';

export default function edit( { attributes, setAttributes } ) {
	const { icon, text, smallText } = attributes;

	return (
		<>
			<FontAwesomeIcon icon={ [ 'far', icon ] } />

			<RichText
				tagName="span"
				className="jp-icon-list-item-text"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ __( 'Ex: View All', 'jordanpak' ) }
				allowedFormats={ [] }
			/>

			<RichText
				tagName="small"
				className="jp-icon-list-item-small-text"
				value={ smallText }
				onChange={ ( value ) => setAttributes( { smallText: value } ) }
				placeholder={ __( 'Ex: (DZ)', 'jordanpak' ) }
				allowedFormats={ [] }
			/>

			<InspectorControls>
				<PanelBody title={ __( 'Icon', 'jordanpak' ) }>
					<IconNameControl
						value={ icon }
						onChange={ ( value ) =>
							setAttributes( { icon: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
