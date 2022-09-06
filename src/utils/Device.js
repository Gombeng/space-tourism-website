const size = {
	mobile: '375px',
	tablet: '768px',
	desktop: '1440px',
};

export const device = {
	mobile: `(min-width: ${size.mobile})`,
	tabletmax: `(max-width: ${size.tablet})`,
	tablet: `(min-width: ${size.tablet})`,
	desktopmax: `(max-width: ${size.desktop})`,
	desktop: `(min-width: ${size.desktop})`,
};
