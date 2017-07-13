import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: ''
        }
    }
    componentDidMount() {
        let self = this,
            result;
        $.get("https://api.myjson.com/bins/10ho3b", function(data, textStatus, jqXHR) {
            console.log(data);
            self.setState({
                users: data
            });
        });
    }
    render() {
        let res;

        if (!this.state.users) {
            res = <div className="loader-container"><CircularProgress thickness={7} /></div>
        } else {
            res = <div>Данные загружены</div>
        }

        return (
            <div className="container">
                <MuiThemeProvider>
                    {res}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default UsersListContainer;
