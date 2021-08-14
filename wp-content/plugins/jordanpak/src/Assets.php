<?php
/**
 * CSS/JS/Fonts handling
 *
 * @since   2.0.0
 * @package JordanPak_Fn
 */

namespace JordanPak_Fn;

// exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * CSS/JS/Fonts asset handling class
 *
 * @since 2.0.0
 */
class Assets {

	/**
	 * Asset registration handle prefix
	 *
	 * @since 2.0.0
	 * @var   string
	 */
	const HANDLE_PREFIX = 'jordanpak-fn-';

	/**
	 * Hook everything in
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'after_setup_theme', [ $this, 'add_editor_styles' ] );
		add_action( 'init', [ $this, 'do_asset_registration' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ], 5000 );
	}

	/**
	 * Add editor styles
	 *
	 * Required for proper editor canvas scoping.
	 *
	 * @since 2.0.0
	 */
	public function add_editor_styles() {
		// add_editor_style( 'build/style-global.css' );
		// add_editor_style( 'build/global.css' );
		// add_editor_style( 'build/style-editor.css' );
		// add_editor_style( 'build/editor.css' );
	}

	/**
	 * Register CSS/JS assets
	 *
	 * @since 2.0.0
	 */
	public function do_asset_registration() {
		$build_dir = JORDANPAK_FN_DIR . '/build';
		$build_url = JORDANPAK_FN_URL . '/build';

		// // Global styles.
		// wp_register_style(
		// 	self::HANDLE_PREFIX . 'global',
		// 	"$build_url/style-global.css",
		// 	[],
		// 	filemtime( "$build_dir/style-global.css" )
		// );

		/**
		 * Editor
		 */
		$editor = require "$build_dir/editor.asset.php";

		// Editor script.
		wp_register_script(
			self::HANDLE_PREFIX . 'editor',
			"$build_url/editor.js",
			$editor['dependencies'],
			$editor['version'],
			true
		);

		// // Front end + editor styles.
		// wp_register_style(
		// 	self::HANDLE_PREFIX . 'editor',
		// 	"$build_url/style-editor.css",
		// 	[ 'wp-editor' ],
		// 	// [ 'wp-editor', self::HANDLE_PREFIX . 'global' ],
		// 	filemtime( "$build_dir/style-editor.css" )
		// );
	}

	/**
	 * Enqueue front end CSS/JS assets
	 *
	 * @since 2.0.0
	 */
	public function enqueue_assets() {
		// wp_enqueue_style( self::HANDLE_PREFIX . 'global' );
		// wp_enqueue_style( self::HANDLE_PREFIX . 'editor' );
	}

	/**
	 * Enqueue editor assets
	 *
	 * @since 2.0.0
	 */
	public function enqueue_editor_assets() {
		wp_enqueue_script( self::HANDLE_PREFIX . 'editor' );
	}
}
