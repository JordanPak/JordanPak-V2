<?php
/**
 * Plugin Name: JordanPak
 * Plugin URI: https://jordanpak.com
 * Description: Projects and other functionality handling
 * Author: JordanPak
 * Author URI: https://jordanpak.com/
 * Version: 2.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: jordanpak
 *
 * @package JordanPak_Fn
 */

namespace JordanPak_Fn;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get autoloader and helper + template functions.
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/functions.php';
// require_once __DIR__ . '/src/template-functions.php';

/**
 * Plugin wrapper
 *
 * @since 2.0.0
 */
class Plugin {

	/**
	 * The single instance of this class
	 *
	 * @since 2.0.0
	 * @var   Plugin
	 */
	protected static $instance;

	/**
	 * Assets management
	 *
	 * @since 2.0.0
	 * @var   Assets
	 */
	public $assets;

	/**
	 * Projects handler
	 *
	 * @since 2.0.0
	 * @var   Projects
	 */
	public $projects;

	// /**
	//  * Customizer handler
	//  *
	//  * @since 2.0.0
	//  * @var   Customizer
	//  */
	// public $customizer;

	// /**
	//  * Template loading handler
	//  *
	//  * False if not a front end request.
	//  *
	//  * @since 2.0.0
	//  * @var   Template_Loader|boolean
	//  */
	// public $template_loader = false;

	/**
	 * Get main plugin instance.
	 *
	 * @since 2.0.0
	 * @see   instance()
	 *
	 * @return Plugin
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Spin up plugin
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		$this->set_constants();
		add_action( 'plugins_loaded', [ $this, 'init' ] );
		add_action( 'jordanpak_fn_activate', [ $this, 'init' ], 5 );
		add_action( 'jordanpak_fn_activate', 'flush_rewrite_rules' );
		add_action( 'jordanpak_fn_deactivate', 'flush_rewrite_rules' );
	}

	/**
	 * Set constants
	 *
	 * @since 2.0.0
	 */
	private function set_constants() {
		define( 'JORDANPAK_FN_VERSION', '2.0.0' );
		define( 'JORDANPAK_FN_DIR', plugin_dir_path( __FILE__ ) );
		define( 'JORDANPAK_FN_URL', plugin_dir_url( __FILE__ ) );
	}

	/**
	 * Do block and asset registration
	 *
	 * @since 2.0.0
	 */
	public function init() {
		$this->assets   = new Assets();
		$this->projects = new Projects();
		// // $this->customizer   = new Customizer();

		// if ( $this->is_request( 'frontend' ) ) {
		// 	$this->template_loader = new Template_Loader();
		// }

		do_action( 'jordanpak_fn_loaded' );
	}

	/**
	 * What type of request is this?
	 *
	 * @since 2.0.0
	 * @see   WooCommerce's WooCommerce->is_request()
	 *
	 * @todo BOUNCE THIS?
	 *
	 * @param  string $type  admin, ajax, cron or frontend.
	 * @return boolean
	 */
	private function is_request( $type ) {
		switch ( $type ) {
			case 'admin':
				return is_admin();

			case 'ajax':
				return defined( 'DOING_AJAX' );

			case 'cron':
				return defined( 'DOING_CRON' );

			case 'frontend':
				return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
		}
	}

	/**
	 * Handle activation tasks
	 *
	 * @since 2.0.0
	 */
	public function do_activate() {
		do_action( 'jordanpak_fn_activate' );
	}

	/**
	 * Handle deactivation tasks
	 *
	 * @since 2.0.0
	 */
	public function do_deactivate() {
		do_action( 'jordanpak_fn_deactivate' );
	}
}

/**
 * Get instance of main plugin class
 *
 * @since 2.0.0
 *
 * @return Plugin
 */
function instance() {
	return Plugin::instance();
}

// Instantiate plugin wrapper class.
$jordanpak_fn_plugin = instance();

// Register activation/deactivation stuff.
register_activation_hook( __FILE__, [ $jordanpak_fn_plugin, 'do_activate' ] );
register_deactivation_hook( __FILE__, [ $jordanpak_fn_plugin, 'do_deactivate' ] );
