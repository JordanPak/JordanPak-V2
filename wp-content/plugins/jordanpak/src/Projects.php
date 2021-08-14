<?php
/**
 * Project post type + functionality handler
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
 * CPT registration and general "projects" stuff
 *
 * @since 1.0.0
 */
class Projects extends Post_Type {

	/**
	 * Post type key
	 *
	 * @since 1.0.0
	 * @var   string
	 */
	const CPT_KEY = 'jpk_project';

	/**
	 * Object class to be used for indivudal instances of the post type
	 *
	 * @since 1.0.0
	 * @var   string
	 */
	protected $singular_class = 'Project';

	/**
	 * Flag for global post variable in look
	 *
	 * @since 1.0.0
	 * @var   boolean
	 */
	protected $loop_global_name = 'project';

	/**
	 * Get general post type label
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public function get_label() {
		return __( 'Project', 'jordanpak' );
	}

	/**
	 * Get plural post type label
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public function get_plural_label() {
		return __( 'Projects', 'jordanpak' );
	}

	/**
	 * Get non-default post type args
	 *
	 * @since 1.0.0
	 *
	 * @return array
	 */
	public function get_cpt_args() {
		return [
			'description'         => __( "One of JordanPak's projects.", 'jordanpak' ),
			'labels'              => [
				'archives'              => __( 'Project Archives', 'jordanpak' ),
				'attributes'            => __( 'Project Attributes', 'jordanpak' ),
				'parent_item_colon'     => __( 'Parent Project:', 'jordanpak' ),
				'all_items'             => __( 'All Projects', 'jordanpak' ),
				'add_new_item'          => __( 'Add New Project', 'jordanpak' ),
				'new_item'              => __( 'New Project', 'jordanpak' ),
				'edit_item'             => __( 'Edit Project', 'jordanpak' ),
				'update_item'           => __( 'Update Project', 'jordanpak' ),
				'view_item'             => __( 'View Project', 'jordanpak' ),
				'view_items'            => __( 'View Projects', 'jordanpak' ),
				'search_items'          => __( 'Search Event', 'jordanpak' ),
				'insert_into_item'      => __( 'Insert into project', 'jordanpak' ),
				'uploaded_to_this_item' => __( 'Uploaded to this project', 'jordanpak' ),
				'items_list'            => __( 'Projects list', 'jordanpak' ),
				'items_list_navigation' => __( 'Projects list navigation', 'jordanpak' ),
				'filter_items_list'     => __( 'Filter projects list', 'jordanpak' ),
			],
			'supports'            => [ 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'revisions' ],
			'public'              => true,
			'show_ui'             => true,
			'menu_icon'           => 'dashicons-hammer',
			'show_in_nav_menus'   => true,
			'has_archive'         => 'projects',
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'rewrite'             => [
				'slug'       => 'project',
				'with_front' => false,
				'pages'      => true,
				'feeds'      => true,
			],
			'taxonomies'          => [ 'category' ],
		];
	}

	/**
	 * Get editor title field placeholder
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	protected function get_title_placeholder() {
		return __( 'Add project name', 'jordanpak' );
	}
}
