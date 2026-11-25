/**
 * Fonts load at runtime via globals.css (@import) so `next build` in Docker
 * does not need to reach fonts.googleapis.com (next/font/google fails on EC2).
 */

export const fontSans = { className: '' };

export const fontVariables = '';