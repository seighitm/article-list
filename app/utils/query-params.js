export function parseQueryParams(url) {
    const params = {};
    const queryString = url.split('?')[1];
    if (queryString) {
        queryString.split('&').forEach(pair => {
            const [key, value] = pair.split('=');
            params[key] = decodeURIComponent(value || '');
        });
    }
    return params;
}

export function updateQueryParams(router, params) {
    const currentParams = parseQueryParams(router.currentURL);
    router.transitionTo({ queryParams: { ...currentParams, ...params } });
}