import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
import './Collection.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
const UNSPLASH_URL = `https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}&page=1&per_page=10&order_by=latest`

class Collection extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {

        console.log('XXXXXXX');
    }


    // createList = () => {
    //
    //     let content  = [];
    //
    //     if(this.state.apiData)
    //     {
    //         console.dir(this.state.apiData)
    //
    //         const values = this.state.apiData;
    //         values.map(function(item){
    //
    //             const {title, id, cover_photo} = item;
    //            // console.log(cover_photo)
    //             content.push(<div className='unsplash__item' key={id.toString()} data-id={id}>
    //                 <Link to={id}><img src={cover_photo.urls.small} /><span>{title}</span>
    //                 </Link>
    //             </div>);
    //         })
    //     }
    //
    //     return content;
    // }

    render() {


        return (
            <div>HEllo world</div>
        )
    }
}


export default Collection;