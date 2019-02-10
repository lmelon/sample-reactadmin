import jsonServerProvider from 'ra-data-json-server';
import hasuraServerProvider from 'ra-data-hasura';

const testProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const headers = {
    'content-type': 'application/json',
    'X-Hasura-User-Id':2,
    'X-Hasura-Role': 'admin'
};

const hasuraUrl = window.location.protocol + "//" + window.location.hostname + ":8080";
const hasuraProvider = hasuraServerProvider(hasuraUrl, headers);

const exceptions = {
    posts: testProvider,
}

// refer to: https://marmelab.com/react-admin/DataProviders.html
const dataProvider = (type, resource, params) => {
    
    //console.log(type, resource, params);

    var newParams = { ...params, filter: makeLike(params.filter)};

    if (exceptions[resource]) {
        return exceptions[resource](type, resource, params);
    }
    
    return hasuraProvider(type, resource, newParams);

}

const makeLike= (filter) => {

    if (!filter) return filter;

    var newFilter = {};
    Object.keys(filter).forEach((key) => {

        if (key.endsWith("__")) {
            var newKey = key.substr(0, key.length - 2)
            newFilter[newKey] = { "_like": "%" + filter[key] + "%" }    
        } else {
            newFilter[key] = filter[key]
        }

    })

    return newFilter;
}

export default dataProvider;