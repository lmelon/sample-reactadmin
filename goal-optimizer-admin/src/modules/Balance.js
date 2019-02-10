import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { config } from '../config'; 

import { Title } from 'react-admin';

import BalanceRenderer from '../components/BalanceRenderer'

class Balance extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file_id: props.id,
            data: null,
            keys: null,
        };
      }

    componentDidMount() {
        setTimeout(this.recompute.bind(this), 0);
    }

    recompute() {

        const port = config.port;
        const id = this.state.file_id;

        fetch(`http://localhost:${port}/api/computeBalanceForFile/${id}`)
        .then(response => response.json())
        .then(json => {
            var { data, keys} = json;
            this.setState({ data, keys })
        })
        .catch(error => {
            console.log(error);
            setTimeout(this.recompute.bind(this), 5000);
        })
    
        
    }

    render() {

        var { data, keys} = this.state;

        if (!data) {
            return <p>Loading ...</p>;
          }

        return (
            <div className="About">
                <BalanceRenderer tag="d3rendering" data={data} keys={keys}></BalanceRenderer>
            </div>
        );
    }
}

export default (props) => {

    return (
        <Card>
            <Title title="Balance sheet" />
            <CardContent>
                <Balance {...props.match.params}></Balance>
            </CardContent>
        </Card>
    )
};