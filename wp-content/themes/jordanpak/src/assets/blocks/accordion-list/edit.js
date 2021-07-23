/**
 * Accordion list block edit
 *
 * @since 2.0.0
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import IconNameControl from '../../components/icon-name-control';
import IconFamilyControl from '../../components/icon-family-control';

const BLOCKS_TEMPLATE = [
	[ 'jordanpak/accordion-list-item' ],
	[ 'jordanpak/accordion-list-item' ],
	[ 'jordanpak/accordion-list-item' ],
];

const ALLOWED_BLOCKS = [ 'jordanpak/accordion-list-item' ];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, icon, iconFamily } = attributes;

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

			<details { ...useBlockProps() }>
				<summary className="jp-accordion-list-heading">
					<FontAwesomeIcon icon={ [ iconFamily, icon ] } />

					<RichText
						tagName="h3"
						className="jp-accordion-list-heading-text"
						value={ heading }
						onChange={ ( value ) =>
							setAttributes( { heading: value } )
						}
						placeholder={ __( 'Ex: WordPress', 'jordanpak' ) }
						allowedFormats={ [] }
					/>
				</summary>

				<ul className="jp-accordion-list-items">
					{/* <InnerBlocks
						template={ BLOCKS_TEMPLATE }
						allowedBlocks={ ALLOWED_BLOCKS }
					/> */}
				</ul>
			</details>
		</>
	);
}
