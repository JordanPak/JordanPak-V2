/**
 * Demo link
 *
 * @since 2.0.0
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { URLInput } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import pluginMetaHandler from '../../../util/plugin-meta-handler';

const render = pluginMetaHandler( {
	url: {
		key: 'demo_url',
	},
	linkText: {
		key: 'demo_link_text',
	},
} )( ( { postType, url, linkText, setUrl, setLinkText } ) => {
	// sanity check for project
	if ( postType !== 'jpk_project' ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			className="jordanpak-demo-link"
			title={ __( 'Demo Link', 'jordanpak' ) }
		>
			<TextControl
				label={ __( 'Button Text', 'jordanpak' ) }
				help={ __( 'Defaults to "Visit Website"', 'jordanpak' ) }
				value={ linkText }
				onChange={ ( value ) => setLinkText( value ) }
			/>

			<URLInput
				label={ __( 'URL', 'jordanpak' ) }
				value={ url }
				onChange={ ( value ) => setUrl( value ) }
			/>
		</PluginDocumentSettingPanel>
	);
} );

// register the sidebar plugin
registerPlugin( 'jordanpak-demo-link', { render, icon: 'admin-links' } );
