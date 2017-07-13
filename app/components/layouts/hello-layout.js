import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import withRouter from 'react-router-v4-hocs/lib/withRouter';

import SomeComponent from './some-component';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class HelloLayout extends React.Component {

    constructor(props) {
        super(props);

        this.handleStartClick = this.handleStartClick.bind(this);
    }

    getChildContext() {
        return {
            getUser: () => ({ name: 'Bob' })
        };
    }

    handleStartClick(e) {
        e.preventDefault();
        this.props.router.history.push('/show-data');
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="hello-block">
                    <div className="hello-block__inner">
                        <h1 className="hello-block__header">Hello!</h1>
                        <div className="hello-block__text">This is simple react app that renders data from json file</div>
                        <RaisedButton className="hello-block__btn" label="Start" onClick={this.handleStartClick} onTouchTap={this.handleStartClick} primary={true} />
                        <SomeComponent />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

HelloLayout.childContextTypes = {
    getUser: React.PropTypes.func
};


export default withRouter(HelloLayout);