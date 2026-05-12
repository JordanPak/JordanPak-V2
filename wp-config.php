<?php
/**
 * The base configuration for WordPress
 *
 * This is modified from the default sample to load a local config for version
 * control security.
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 * @package WordPress
 */

/**
 * Load local configuration
 */
require dirname( __FILE__ ) . '/wp-config-local.php';

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
if ( empty( $table_prefix ) ) {
	$table_prefix = 'wp_';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
