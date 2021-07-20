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
		add_filter( 'genesis_seo_title', [ $this, 'set_site_title' ], 10, 3 );
		add_filter( 'genesis_edit_post_link', '__return_false' );
	}

	/**
	 * Set site title
	 *
	 * We had to re-build the whole tag because the "bloginfo" filter doesn't
	 * run unless get_bloginfo() is called with "display", which Genesis
	 * doesn't do.
	 *
	 * @since 2.0.0
	 *
	 * @param  string $title   Existing site title HTML.
	 * @param  string $inside  Contents of the site title (what we're actually changing).
	 * @param  string $wrap    HTML to wrap title.
	 * @return string          Adjusted site title.
	 */
	public function set_site_title( $title, $inside, $wrap ) {

		return genesis_markup(
			[
				'open'    => sprintf( "<{$wrap} %s>", genesis_attr( 'site-title' ) ),
				'close'   => "</{$wrap}>",
				'content' => sprintf(
					'<a href="%s"><span class="title-first">Jordan</span> <span class="title-last">Pakrosnis</span></a>',
					trailingslashit( home_url() )
				),
				'context' => 'site-title',
				'echo'    => false,
				'params'  => [
					'wrap' => $wrap,
				],
			]
		);
	}

	/**
	 * Output background cover
	 *
	 * @since 2.7.0
	 */
	public function do_background_cover() {
		?>
		<div class="background-cover">
			<div class="wrap"></div>
		</div>
		<div class="background-cover-gradient">
			<div class="wrap"></div>
		</div>
		<?php
	}
}
