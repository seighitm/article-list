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
    console.log(params);
    
    const currentParams = parseQueryParams(router.currentURL);

    console.log(currentParams);
    
    router.transitionTo({ queryParams: { ...currentParams, ...params } });
}