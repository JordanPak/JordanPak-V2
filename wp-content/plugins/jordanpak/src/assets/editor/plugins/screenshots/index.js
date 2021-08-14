/**
 * Post screenshots
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import pluginMetaHandler from '../../../util/plugin-meta-handler';
import FileControl from '../../../components/file-control';

const render = pluginMetaHandler( {
	mobile: {
		key: 'screenshot_mobile',
	},
} )( ( { postType, mobile, setMobile } ) => {
	// sanity check for project
	if ( postType !== 'jpk_project' ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			className="jordanpak-screenshots"
			title={ __( 'Screenshots', 'jordanpak' ) }
		>
			<FileControl
				label={ __( 'Mobile', 'jordanpak' ) }
				attachmentID={ mobile }
				onSelect={ ( media ) => setMobile( Number( media.id ) ) }
				onClear={ () => setMobile( 0 ) }
			/>
		</PluginDocumentSettingPanel>
	);
} );

// register the sidebar plugin
registerPlugin( 'jordanpak-screenshots', { render, icon: 'laptop' } );
