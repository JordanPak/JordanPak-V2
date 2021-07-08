<?php
/**
 * CSS/JS handling
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
 * CSS/JS asset handling class
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
	 * Hook everything in
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
	}

	/**
	 * Register and enqueue CSS/JS assets
	 *
	 * @since 2.0.0
	 */
	public function enqueue_assets() {
		$build_dir = JORDANPAK_DIR . '/build';
		$build_url = JORDANPAK_URL . '/build';

		wp_enqueue_style(
			self::HANDLE_PREFIX . 'global',
			"$build_url/style-global.css",
			[],
			filemtime( "$build_dir/style-global.css" )
		);
	}
}
