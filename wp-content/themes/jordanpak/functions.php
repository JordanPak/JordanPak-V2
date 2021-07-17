<?php
/**
 * JordanPak functions and definitions
 *
 * @package JordanPak
 * @since   2.0.0
 */

namespace JordanPak;

// Setup autoloader (via Composer or custom).
if ( file_exists( get_stylesheet_directory() . '/vendor/autoload.php' ) ) {
	require get_stylesheet_directory() . '/vendor/autoload.php';
} else {
	/**
	 * Custom autoloader function for theme classes.
	 *
	 * @since 2.0.0
	 *
	 * @param  string $class_name  Class name to load.
	 * @return bool                True if the class was loaded, false otherwise.
	 */
	function autoload( $class_name ) {
		$namespace = 'JordanPak';

		if ( strpos( $class_name, $namespace . '\\' ) !== 0 ) {
			return false;
		}

		$parts = explode( '\\', substr( $class_name, strlen( $namespace . '\\' ) ) );

		$path = get_stylesheet_directory() . '/src';
		foreach ( $parts as $part ) {
			$path .= '/' . $part;
		}
		$path .= '.php';

		if ( ! file_exists( $path ) ) {
			return false;
		}

		require_once $path;

		return true;
	}

	spl_autoload_register( __NAMESPACE__ . '\\autoload' );
}

// Get functions.
require_once __DIR__ . '/src/functions.php';

/**
 * Child theme wrapper
 *
 * @since 2.0.0
 */
class Theme {

	/**
	 * The single instance of this class
	 *
	 * @since 2.0.0
	 * @var   Theme
	 */
	protected static $instance;

	/**
	 * Assets handler
	 *
	 * @since 2.0.0
	 * @var   Assets
	 */
	public $assets;

	/**
	 * Global templating handler
	 *
	 * @since 2.0.0
	 * @var   Global_Templating
	 */
	public $global_templating;

	/**
	 * Get child theme instance.
	 *
	 * @since 2.0.0
	 * @see   instance()
	 *
	 * @return Theme
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Spin up theme
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		$this->set_constants();
		$this->init();
	}

	/**
	 * Set constants
	 *
	 * @since 2.0.0
	 */
	private function set_constants() {
		define( 'JORDANPAK_VERSION', '2.0.0' );
		define( 'JORDANPAK_DIR', get_stylesheet_directory() );
		define( 'JORDANPAK_URL', get_stylesheet_directory_uri() );
	}

	/**
	 * Do class/asset registration
	 *
	 * @since 2.0.0
	 */
	public function init() {
		// $this->base_support = new Base_Support();
		$this->assets = new Assets();
		$this->global_templating = new Global_Templating();

		// if ( $this->is_request( 'frontend' ) ) {
		// 	$this->template_loader = new Template_Loader();
		// 	$this->template_hooks  = new Template_Hooks();
		// }

		do_action( 'jordanpak_loaded' );
	}
}

/**
 * Get instance of child theme class
 *
 * @since 2.0.0
 *
 * @return Theme
 */
function instance() {
	return Theme::instance();
}

// Instantiate theme wrapper class.
$jordanpak_theme = instance();
