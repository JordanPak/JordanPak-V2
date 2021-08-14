<?php
/**
 * Misc. helper functions
 *
 * @since   2.0.0
 * @package JordanPak
 */

namespace JordanPak;

/**
 * Break array into string of attributes
 *
 * @since 1.0.0
 *
 * @param  array  $attrs   Attributes (keys) and values.
 * @param  string $prefix  Prefix for data attributes (ex: "data-").
 * @return string          Inline string of data attributes.
 */
function get_attrs( $attrs, $prefix = '' ) {

	// Remove initially empty args.
	$attrs = array_filter( $attrs );

	foreach ( $attrs as $attr => $value ) {

		// data- attributes.
		if ( 'data' === $attr && is_array( $value ) ) {
			$attrs[ $attr ] = get_attrs( array_filter( $value ), 'data-' );
			continue;
		}

		// Array of classes.
		if ( 'class' === $attr && is_array( $value ) ) {
			$value = implode( ' ', array_filter( $value ) );
		}

		// Array of classes + all other cases.
		$attrs[ $attr ] = $prefix . $attr . '="' . esc_attr( $value ) . '"';
	}

	return implode( ' ', $attrs );
}

/**
 * Output HTML string off attributes
 *
 * @since 1.0.0
 *
 * @param  array  $attrs   Attributes and their values.
 * @param  string $prefix  A prefix for data attributes (ex: "data-").
 */
function do_attrs( $attrs, $prefix = '' ) {
	echo get_attrs( $attrs, $prefix ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Output screenshot markup
 *
 * @since 2.0.0
 *
 * @param string $class Additional classname.
 * @param string $img   <img> tag/contents.
 * @param string $id    ID attribute.
 */
function do_screenshot( $class = '', $img = '', $id = '' ) {

	$attrs = [
		'class' => [
			'screenshot',
			$class,
		],
		'id'    => $id,
	];
	?>
	<figure <?php do_attrs( $attrs ); ?>>

		<div class="screenshot-header">
			<div class="screenshot-window-controls"></div>
			<div class="screenshot-tab"></div>
		</div>

		<?php echo $img; // phpcs:ignore xss ?>
	</figure>
	<?php
}
