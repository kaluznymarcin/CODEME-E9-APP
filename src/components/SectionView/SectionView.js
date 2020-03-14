import React from 'react';
import { useParams } from "react-router-dom";
//import Content from './Content';

function SectionView(props) {
    let {id} = useParams();
    console.log( {id})
    return (
        <section className="hero">
            <h1 className="section__title">{id}</h1>
        </section>
    )
}

export default SectionView;
//<h1 className="section__title">{props}</h1>