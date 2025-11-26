import React from 'react';

/**
 * A simple HOC to connect a component to the StateProvider.
 * This HOC assumes that the component is wrapped within a StateProvider.
 */
const connect = (Component) => {
    const ConnectedComponent = (props) => {
        return <Component {...props} />;
    };

    return ConnectedComponent;
};

export default connect;