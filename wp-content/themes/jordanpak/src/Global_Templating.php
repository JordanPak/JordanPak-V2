<?php
/**
 * Global templating handler
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
 * Global templating handler class
 *
 * @since 2.0.0
 */
class Global_Templating {

	/**
	 * Hook everything in
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'genesis_before', [ $this, 'do_background_cover' ] );
	}

	/**
	 * Output background cover
	 *
	 * @since 2.7.0
	 */
	public function do_background_cover() {
		echo '<div class="background-cover"></div>';
	}
}
