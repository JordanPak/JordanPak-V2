<?php
/**
 * Plugin Name: DZ SEO Adjustments
 * Plugin URI: https://wordpress.org/plugins/dz-seo-adjustments
 * Description: Disables Rank Math sitemap cache and moves its meta box to footer.
 * Author: Designzillas
 * Author URI: https://www.designzillas.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: dz-seo-adjustments
 *
 * @package DZ_SEO_Adjustments
 */

namespace DZ_SEO_Adjustments;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get autoloader.
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Plugin wrapper
 *
 * @since 1.0.0
 */
class Plugin {

	/**
	 * Spin up plugin
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->set_constants();

		/**
		 * Disable sitemap cache
		 *
		 * @see https://rankmath.com/kb/filters-hooks-api-developer/
		 */
		add_filter( 'rank_math/sitemap/enable_caching', '__return_false' );

		add_filter( 'rank_math/metabox/priority', [ $this, 'set_metabox_priority' ] );
	}

	/**
	 * Set constants
	 *
	 * @since 1.0.0
	 */
	private function set_constants() {
		define( 'DZ_SEO_ADJUSTMENTS_VERSION', '1.0.0' );
		define( 'DZ_SEO_ADJUSTMENTS_DIR', plugin_dir_path( __FILE__ ) );
		define( 'DZ_SEO_ADJUSTMENTS_URL', plugin_dir_url( __FILE__ ) );
	}

	/**
	 * Set Rank Math's meta box to "default" priority
	 *
	 * This allows other meta boxes (like for ACF) to be ordered before Rank
	 * Math's by default.
	 *
	 * @return string  New meta box priority.
	 * @since 1.0.0
	 */
	public function set_metabox_priority() {
		return 'default';
	}
}

// Instantiate plugin wrapper class.
$dz_seo_adjustments_plugin = new Plugin();
