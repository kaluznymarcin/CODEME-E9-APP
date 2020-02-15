import React from 'react';
import {UNSPLASH_ACCESS_KEY} from '../../constants';

const UNSPLASH_URL = `https://api.unsplash.com/collections/?client_id=${UNSPLASH_ACCESS_KEY}&page=1&per_page=10&order_by=latest`

class HomePage extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {

        fetch(UNSPLASH_URL)
            .then(res => res.json())
            .then(data => {
                return this.setState({
                    apiData: data})});

    }


    createList = () => {

        let content  = [];

        if(this.state.apiData)
        {
            console.dir(this.state.apiData)

            const values = this.state.apiData;
            values.map(function(item){

                const {title, id} = item;
                content.push(<div key={id.toString()}><span>{title}</span>:<span>{id}</span></div>);
            })
        }

        return content;
    }

    render() {


        return  this.createList();
    }
}


export default HomePage;