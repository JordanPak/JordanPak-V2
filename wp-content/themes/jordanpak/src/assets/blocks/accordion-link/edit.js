/**
 * Accordion link block edit
 *
 * @since 2.0.0
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import IconNameControl from '../../components/icon-name-control';
import IconFamilyControl from '../../components/icon-family-control';

export default function Edit( { attributes, setAttributes } ) {
	const { text, icon, iconFamily } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon', 'jordanpak' ) }>
					<IconNameControl
						value={ icon }
						onChange={ ( value ) =>
							setAttributes( { icon: value } )
						}
					/>
					<IconFamilyControl
						value={ iconFamily }
						onChange={ ( value ) =>
							setAttributes( { iconFamily: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<span { ...useBlockProps() }>
				<FontAwesomeIcon icon={ [ iconFamily, icon ] } />

				<RichText
					tagName="h3"
					className="jp-accordion-link-text"
					value={ text }
					onChange={ ( value ) => setAttributes( { text: value } ) }
					placeholder={ __( 'Ex: Resume', 'jordanpak' ) }
					allowedFormats={ [] }
				/>
			</span>
		</>
	);
}
