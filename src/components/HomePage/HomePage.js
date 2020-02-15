import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
import './home.css';
import {
    Link
} from 'react-router-dom'
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

                const {title,user, id, cover_photo} = item;
                console.log(item)

                content.push(<div className='unsplash__item' key={id.toString()}>
                    <Link to={`/collection/${id}`}><img src={cover_photo.urls.small} /><span>{title}</span>
                    </Link>
                </div>);
            })
        }

        return content;
    }

    render() {


        return  (
            <div className="unsplash__gallery">{this.createList()}</div>
        )
    }
}


export default HomePage;