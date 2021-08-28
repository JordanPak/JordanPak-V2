<?php
/**
 * Abstraction of a post
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
 * Base class for setting post's basic things and getting cached meta
 *
 * @since 2.0.0
 */
class Post {

	/**
	 * Associated post object
	 *
	 * @since 2.0.0
	 * @var   WP_Post
	 */
	private $post;

	/**
	 * Associated post ID
	 *
	 * @since 2.0.0
	 * @var   integer
	 */
	private $id;

	/**
	 * Meta cache
	 *
	 * @since 2.0.0
	 * @var   array
	 */
	private $meta = [];

	/**
	 * Set everything up
	 *
	 * @since 2.0.0
	 *
	 * @param WP_Post|integer $post  Associated post ID.
	 */
	public function __construct( $post = null ) {

		if ( is_a( $post, 'WP_Post' ) ) {
			$this->post = $post;
			$this->id   = $post->ID;
		} else {
			$this->id = $post ?? get_the_ID();
		}
	}

	/**
	 * Get associated post object
	 *
	 * @return WP_Post
	 * @since  1.0.0
	 */
	public function get_post() {

		if ( isset( $this->post ) ) {
			return $this->post;
		}

		$this->post = get_post( $this->get_id() );
		return $this->post;
	}

	/**
	 * Get post ID
	 *
	 * @since 2.0.0
	 *
	 * @return integer
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Check and retrive something from the post's meta
	 *
	 * @since 2.0.0
	 *
	 * @param  string $key  Meta key/field.
	 * @return mixed
	 */
	protected function get( $key ) {

		if ( isset( $this->meta[ $key ] ) ) {
			return $this->meta[ $key ];
		}

		$this->meta[ $key ] = \get_post_meta( $this->get_id(), $key, true );
		return $this->meta[ $key ];
	}

	/**
	 * Get post title
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	public function get_title() {
		return \get_the_title( $this->get_id() );
	}

	/**
	 * Output post title
	 *
	 * @since 2.0.0
	 */
	public function do_title() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $this->get_title();
	}

	/**
	 * Get a comma-separated list of terms for the post.
	 *
	 * @since 1.0.0
	 *
	 * @param  string|array $taxonomy Taxonomy(s).
	 * @return string
	 */
	public function get_terms_list( $taxonomy = 'category' ) {
		$names = wp_list_pluck( get_the_terms( $this->post, $taxonomy ) ?: [], 'name' );

		return $names
			? '<span class="terms-list"><span class="screen-reader-text">' . __( 'Filed Under:', 'jordanpak' ) . ' </span>' . implode( ', ', $names ) . '</span>'
			: '';
	}
}
