const SITE_NAME = 'TGS Bank'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
