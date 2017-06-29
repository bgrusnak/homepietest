import React from 'react'
import { Route, Redirect } from 'react-router'
import App from './containers/App.jsx'
import List from './containers/pages/List.jsx'
import Page from './containers/pages/Page.jsx'
import NotFound from './containers/pages/NotFound.jsx'
/**
 * Asynchronously load a file
 * @param main {String} - Main component
 * @returns {Function}
 */
function requireAsync(main) {
    return function (location, next) {
        next(null, require('./containers/pages/' + main + '.jsx'))
    }
}

/**
 * Routes are defined here. They are loaded asynchronously.
 * Paths are relative to the "components" directory.
 * @param {Object}
 * @returns {Object}
 */
export default function createRoutes() {
    return (
        <Route component={App}>
            <Route exact path="/" component={List} />
            <Route exact path="/pages/new" component={Page} />
            <Route path="/pages/:PAGEID" component={Page} />
            <Route path="*" component={NotFound} />
        </Route>
    )
}
