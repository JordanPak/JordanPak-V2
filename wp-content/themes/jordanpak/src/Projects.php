<?php
/**
 * General projects/archive handler
 *
 * @since   2.0.0
 * @package JordanPak
 */

namespace JordanPak;

// exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function JordanPak_Fn\instance;

/**
 * Global + archive adjustments for projects
 *
 * @since 2.0.0
 */
class Projects {

	/**
	 * Hook everything in
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'wp', [ $this, 'init' ] );
	}

	/**
	 * Apply hooks if projects archive
	 *
	 * @since 2.0.0
	 */
	public function init() {

		if ( ! instance()->projects->is_archive() ) {
			return;
		}

		// Remove excerpt and entry footer.
		remove_action( 'genesis_entry_content', 'genesis_do_post_content' );
		remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

		// Customize "post info".
		add_filter( 'genesis_pre_get_option_entry_meta_before_content', [ $this, 'set_post_info' ] );

		// Wrap entry in link.
		add_filter( 'genesis_link_post_title', '__return_false' );
		add_action( 'genesis_entry_header', [ $this, 'do_entry_link_open' ], 6 );
		add_action( 'genesis_entry_header', [ $this, 'do_entry_link_arrow' ], 13 );
		add_action( 'genesis_entry_header', [ $this, 'do_entry_link_close' ], 14 );

		// Add screenshot flipper.
		add_action( 'genesis_after_content', [ $this, 'do_screenshot_flipper' ] );
	}

	/**
	 * Override "post info" for entry
	 *
	 * @since 2.0.0
	 *
	 * @return string Adjusted post info.
	 */
	public function set_post_info() {
		global $jordanpak_project;
		return $jordanpak_project->get_terms_list();
	}

	/**
	 * Output entry link wrap
	 *
	 * @since 2.0.0
	 */
	public function do_entry_link_open() {

		global $jordanpak_project;

		echo '<a ';
		do_attrs(
			[
				'href'  => get_the_permalink(),
				'class' => [
					'loop-entry-link',
					'project-loop-entry-link',
				],
				'data'  => [
					'screenshot' => $jordanpak_project->get_desktop_screenshot(),
				],
			]
		);
		echo '>';
	}

	/**
	 * Output entry link wrap close
	 *
	 * @since 2.0.0
	 */
	public function do_entry_link_close() {
		echo '</a>';
	}

	/**
	 * Do entry link arrow icon
	 *
	 * @since 2.0.0
	 */
	public function do_entry_link_arrow() {
		echo '<span class="loop-entry-link-arrow"><i class="far fa-long-arrow-alt-right"></i></span>';
	}

	/**
	 * Output screenshot flipper
	 *
	 * @since 1.0.0
	 */
	public function do_screenshot_flipper() {
		do_screenshot( 'screenshot-flipper', '', 'project-screenshot-flipper' );
	}
}
