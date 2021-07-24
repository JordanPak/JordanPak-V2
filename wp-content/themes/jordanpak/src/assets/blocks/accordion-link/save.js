/**
 * Accordion link block save
 *
 * @since 2.0.0
 */

import { RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, icon, iconFamily } = attributes;

	return (
		<>
			<i
				className={ `${ iconFamily } fa-${ icon }` }
				data-icon={ icon }
				data-icon-family={ iconFamily }
			/>
			<RichText.Content
				tagName="span"
				className="jp-accordion-link-text"
				value={ text }
			/>
		</>
	);
}
