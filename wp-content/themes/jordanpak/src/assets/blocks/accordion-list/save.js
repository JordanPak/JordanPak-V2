/**
 * Accordion list block save
 *
 * @since 2.0.0
 */

import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { open, heading, icon, iconFamily } = attributes;

	return (
		<details { ...useBlockProps.save( { open } ) }>
			<summary className="jp-accordion-list-heading">
				<i
					className={ `${ iconFamily } fa-${ icon }` }
					data-icon={ icon }
					data-icon-family={ iconFamily }
				/>
				<RichText.Content
					tagName="h3"
					className="jp-accordion-list-heading-text"
					value={ heading }
				/>
			</summary>

			<ul className="jp-accordion-list-items">
				<InnerBlocks.Content />
			</ul>
		</details>
	);
}
