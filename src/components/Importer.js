import React from 'react';
 import Funkcja from '/.Utis' 

 const UNSPLASH_BASE_URL = "https://api.unsplash.com/collections?page=1&per_page=10&order_by=latest&client_id=";
 const UNSPLASH_ACCESS_KEY = "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";

class Importer extends React.Component {
  state = {
    imgs: [{}]
  }

  componentDidMount() {
    fetch(UNSPLASH_BASE_URL+UNSPLASH_ACCESS_KEY)
      .then(res => res.json())
      .then(data => this.setState({
        imgs: data
      }));
    }


      render() {
        console.log(this.state.imgs[0].cover_photo);
         return  ( 
          
        <div>
        <ul>
         {/* <li> {this.state.imgs[0].cover_photo.urls.thumb}</li> */}
        </ul>
        </div>
        );
      }
    }
    
    export default Importer; 