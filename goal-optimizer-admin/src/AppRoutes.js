import React from 'react';
import { Route } from 'react-router-dom';

import Balance from './modules/Balance';

export default [
    <Route exact path="/balance/view/:id" component={Balance} />,
    // <Route exact path="/bar" component={Dashboard} />,
    // <Route exact path="/baz" component={Dashboard} noLayout />,
];