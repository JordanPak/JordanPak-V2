<?php
/**
 * Misc. helper functions
 *
 * @since   2.0.0
 * @package JordanPak_Fn
 */

namespace JordanPak_Fn;

/**
 * Wrapper for edit_posts capability check
 *
 * @since 1.0.0
 *
 * @return bool
 */
function get_can_user_edit_posts() {
	return current_user_can( 'edit_posts' );
}
