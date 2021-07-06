=== DZ SEO Adjustments ===
Contributors: designzillas
Tags: dz, designzillas, rank math, sitemap cache
Requires at least: 5.2
Tested up to: 5.5
Requires PHP: 7.1
Stable tag: 1.0.0
License: GPL2+
License URI: https://www.gnu.org/licenses/gpl-2.0.txt

DZ SEO Adjustments disables the Rank Math sitemap cache and changes its meta box priority to "default".

== Description ==
By default, Rank Math caches its sitemap items and it may not clear as intended. This disables the transient cache and changes the priority of its editor meta box to "default" so it's easier for other plugin meta boxes to be ordered before it.

== Installation ==
1. Extract `dz-seo-adjustments.zip` archive content to the `/wp-content/plugins/dz-seo-adjustments` directory.
1. Activate **DZ SEO Adjustments** plugin in your admin.

== Changelog ==
[1.0.0]
* Initial release with disabled sitemap cache and meta box priority filters.