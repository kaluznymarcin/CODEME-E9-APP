import React from 'react';
  

 const UNSPLASH_BASE_URL = "https://api.unsplash.com/photos/?client_id=";
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
/*         const content = this.state.imgs.map(value => console.log(value.urls.small)
        ) */
        
    
        
         return  ( 
        <div>imgs{console.log(this.state.imgs)}</div>
         
        );
      }
    }
    
    export default Importer; 