/**
 * Icon list item block save
 *
 * @since 2.0.0
 */
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { icon, text, smallText } = attributes;

	return (
		<Fragment>
			<i className={ `far fa-${ icon }` } data-icon={ icon } />
			<RichText.Content
				tagName="span"
				className="jp-icon-list-item-text"
				value={ text }
			/>
			<RichText.Content
				tagName="small"
				className="jp-icon-list-item-small-text"
				value={ smallText }
			/>
		</Fragment>
	);
}
