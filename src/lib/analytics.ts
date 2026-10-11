/**
 * Tiny wrapper around the Umami tracker. Events wait until the script has
 * loaded (or give up quietly after ~10 s, e.g. when it is blocked).
 */
type Umami = { track: (event: string, data?: Record<string, string>) => void };

export function track(event: string, data?: Record<string, string>, tries = 20) {
	const umami = (window as unknown as { umami?: Umami }).umami;
	if (umami) umami.track(event, data);
	else if (tries > 0) setTimeout(() => track(event, data, tries - 1), 500);
}

/** Sends "section-view" once per section, the first time it reaches the upper half of the screen. */
export function trackSections(ids: string[]) {
	const seen = new Set<string>();
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const id = entry.target.id;
				if (entry.isIntersecting && !seen.has(id)) {
					seen.add(id);
					track('section-view', { section: id });
					observer.unobserve(entry.target);
				}
			}
		},
		// Works for sections taller than the screen, unlike a visibility ratio.
		{ rootMargin: '0px 0px -50% 0px' }
	);
	for (const id of ids) {
		const el = document.getElementById(id);
		if (el) observer.observe(el);
	}
	return () => observer.disconnect();
}
