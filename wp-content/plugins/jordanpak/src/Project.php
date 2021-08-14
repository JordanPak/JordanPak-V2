<?php
/**
 * Representation of a project
 *
 * @since   1.0.0
 * @package JordanPak_Fn
 */

namespace JordanPak_Fn;

// exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Individual project handler
 *
 * @since 2.0.0
 */
class Project extends Post {

	/**
	 * Get a screenshot image
	 *
	 * @since 2.0.0
	 *
	 * @param  string $size        Screenshot meta size to get (mobile/desktop).
	 * @param  string $image_size  Registered image size for attachment.
	 * @return string              Screenshot <img>, if available.
	 */
	private function get_screenshot( $size, $image_size = 'large' ) {
		return wp_get_attachment_image( $this->get( "screenshot_{$size}" ), $image_size );
	}

	/**
	 * Get the mobile screenshot <img>
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	public function get_mobile_screenshot() {
		return $this->get_screenshot( 'mobile' );
	}

	/**
	 * Get the desktop screenshot <img>
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	public function get_desktop_screenshot() {
		return $this->get_screenshot( 'desktop' );
	}
}
