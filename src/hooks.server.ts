import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleTheme: Handle = ({ event, resolve }) => {
	const theme = event.cookies.get('theme');
	if (!theme) return resolve(event);

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%theme%', theme) });
};

export const handle: Handle = sequence(handleTheme);
