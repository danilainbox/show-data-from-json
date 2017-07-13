
import React from 'react';

class SomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        const user = this.context.getUser();
        return <p>Hello {user.name}!</p>;
    }
}

SomeComponent.contextTypes = {
    getUser: React.PropTypes.func.isRequired
};

export default SomeComponent;