/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

import type { ToolbarConfig, ToolbarConfigItem } from '@ckeditor/ckeditor5-core';

/**
 * @module ui/toolbar/normalizetoolbarconfig
 */

/**
 * Normalizes the toolbar configuration (`config.toolbar`), which:
 *
 * * may be defined as an `Array`:
 *
 * ```
 * toolbar: [ 'heading', 'bold', 'italic', 'link', ... ]
 * ```
 *
 * * or an `Object`:
 *
 * ```
 * toolbar: {
 * 	items: [ 'heading', 'bold', 'italic', 'link', ... ],
 * 	removeItems: [ 'bold' ],
 * 	...
 * }
 * ```
 *
 * * or may not be defined at all (`undefined`)
 *
 * and returns it in the object form.
 *
 * @param config The value of `config.toolbar`.
 * @returns A normalized toolbar config object.
 */
export default function normalizeToolbarConfig(
	config: ToolbarConfig | undefined
): {
		items: Array<ToolbarConfigItem>;
		removeItems: Array<string>;
		shouldNotGroupWhenFull?: boolean;
		icon?: string;
	} {
	if ( Array.isArray( config ) ) {
		return {
			items: config,
			removeItems: []
		};
	}

	const predefinedConfigOptions = {
		items: [],
		removeItems: []
	};

	if ( !config ) {
		return predefinedConfigOptions;
	}

	return {
		...predefinedConfigOptions,
		...config
	};
}
