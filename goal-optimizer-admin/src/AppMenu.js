import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, DashboardMenuItem } from 'react-admin';
import { withRouter } from 'react-router-dom';

// import Responsive from '../layout/Responsive';

const AppMenu = ({ resources, onMenuClick, logout }) => (
    <div>
        <DashboardMenuItem onClick={onMenuClick} />

        {resources.map(resource => (

            <MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={resource.options.label ? resource.options.label : resource.name}
                leftIcon={createElement(resource.icon)}
                onClick={onMenuClick}
            />)

        )}

        {/* <MenuItemLink
            to="/foo"
            primaryText="Balance sheet"
            leftIcon={<LabelIcon />}
            onClick={onMenuClick} /> */}
        
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(AppMenu));