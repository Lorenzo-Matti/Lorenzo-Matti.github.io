/**
 * ─── ANALYTICS ──────────────────────────────────────────────────────────
 * Cookieless, aggregate visitor statistics with Umami Cloud (EU region).
 * Leave `websiteId` empty to switch analytics off completely.
 * The privacy page (/privacy) describes what is collected: update it if
 * you change tool or settings.
 * ────────────────────────────────────────────────────────────────────────
 */
export const analytics = {
	/** "Website ID" from Umami → Website → Edit → Tracking code. */
	websiteId: '711dd3cc-f00d-480c-9f91-ad9f640e1f01',
	/** The address after src= in the same tracking code. */
	scriptUrl: 'https://cloud.umami.is/script.js',
	/** Only these domains are counted, so local previews are ignored. */
	domain: 'lorenzo-matti.github.io'
};
