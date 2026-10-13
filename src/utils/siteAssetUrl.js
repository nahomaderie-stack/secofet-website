const siteOrigin = 'https://secofet.com';

export const toSiteAssetUrl = (assetUrl) => new URL(assetUrl, siteOrigin).href;
