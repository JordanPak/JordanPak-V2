<?php
/**
 * CSS/JS/Fonts handling
 *
 * @since   2.0.0
 * @package JordanPak
 */

namespace JordanPak;

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
	const HANDLE_PREFIX = 'jordanpak-';

	/**
	 * Asset build directory
	 *
	 * @since 2.0.0
	 * @var   string
	 */
	private $build_dir = JORDANPAK_DIR . '/build';

	/**
	 * Asset build URL
	 *
	 * @since 2.0.0
	 * @var   string
	 */
	private $build_url = JORDANPAK_URL . '/build';

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
	 * @since 2.7.0
	 */
	public function add_editor_styles() {
		add_theme_support( 'editor-styles' );
		add_editor_style( 'build/style-global.css' );
		add_editor_style( 'build/global.css' );
		add_editor_style( 'build/style-blocks.css' );
		add_editor_style( 'build/blocks.css' );
	}

	/**
	 * Register CSS/JS assets
	 *
	 * @since 2.0.0<script src="https://kit.fontawesome.com/36781a6ab4.js" crossorigin="anonymous"></script><script src="https://kit.fontawesome.com/36781a6ab4.js" crossorigin="anonymous"></script>
	 */
	public function do_asset_registration() {

		// Global styles.
		wp_register_style(
			self::HANDLE_PREFIX . 'global',
			"$this->build_url/style-global.css",
			[],
			filemtime( "$this->build_dir/style-global.css" )
		);

		// Font loader.
		wp_register_script(
			self::HANDLE_PREFIX . 'font-loader',
			'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
			[],
			'1.6.26',
			true
		);

		wp_add_inline_script(
			self::HANDLE_PREFIX . 'font-loader',
			"
				WebFont.load({ google: { families: [
					'Roboto Condensed:400,700',
					'Roboto:400,400i,500,600,700',
					'Bebas Neue',
				] } });
			"
		);

		// Icons.
		wp_register_script(
			self::HANDLE_PREFIX . 'font-awesome',
			'https://kit.fontawesome.com/36781a6ab4.js',
			[],
			'6.x',
			false
		);

		/**
		 * Blocks
		 */
		$blocks = require "$this->build_dir/blocks.asset.php";

		// Editor script.
		wp_register_script(
			self::HANDLE_PREFIX . 'blocks',
			"$this->build_url/blocks.js",
			$blocks['dependencies'],
			$blocks['version'],
			true
		);

		// Front end + editor styles.
		wp_register_style(
			self::HANDLE_PREFIX . 'blocks',
			"$this->build_url/style-blocks.css",
			[ 'wp-editor', self::HANDLE_PREFIX . 'global' ],
			filemtime( "$this->build_dir/style-blocks.css" )
		);

	}

	/**
	 * Enqueue front end CSS/JS assets
	 *
	 * @since 2.0.0
	 */
	public function enqueue_assets() {
		wp_enqueue_style( self::HANDLE_PREFIX . 'global' );
		wp_enqueue_script( self::HANDLE_PREFIX . 'font-loader' );
		wp_enqueue_script( self::HANDLE_PREFIX . 'font-awesome' );
		wp_enqueue_style( self::HANDLE_PREFIX . 'blocks' );
	}

	/**
	 * Enqueue editor assets
	 *
	 * @since 2.0.0
	 */
	public function enqueue_editor_assets() {
		wp_enqueue_script( self::HANDLE_PREFIX . 'font-loader' );
		wp_enqueue_script( self::HANDLE_PREFIX . 'blocks' );
	}
}
