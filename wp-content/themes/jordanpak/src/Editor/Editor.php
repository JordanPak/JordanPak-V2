<?php
/**
 * Posted editor handling
 *
 * @since   2.0.0
 * @package JordanPak
 */

namespace JordanPak\Editor;

// exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Post editor handling class
 *
 * Editor CSS/JS is registered and enqueued in JordanPak\Assets
 *
 * @since 2.0.0
 * @see   Jordanpak\Assets
 */
class Editor {

	/**
	 * Hook everything in
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'after_setup_theme', [ $this, 'add_support' ] );
	}

	/**
	 * Register editor theme support
	 *
	 * @since 2.0.0
	 */
	public function add_support() {

		add_theme_support(
			'editor-color-palette',
			[
				[
					'name'  => esc_attr__( 'black', 'jordanpak' ),
					'slug'  => 'black',
					'color' => '#1f1b1c',
				],
				[
					'name'  => esc_attr__( 'gray', 'jordanpak' ),
					'slug'  => 'gray',
					'color' => '#928e8f',
				],
				[
					'name'  => esc_attr__( 'primary', 'jordanpak' ),
					'slug'  => 'primary',
					'color' => '#f9d900',
				],
				[
					'name'  => esc_attr__( 'dark primary', 'jordanpak' ),
					'slug'  => 'primary-dark',
					'color' => '#f6c800',
				],
				[
					'name'  => esc_attr__( 'white', 'jordanpak' ),
					'slug'  => 'white',
					'color' => '#fff',
				],
			]
		);
	}
}
