import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './styles.css'
import {Icon} from './index';


export default function Category(props) {
    const { catType, setCatType, cat } = props;
    console.log(cat, catType);

    function CatSwitch() {
        switch (catType) {
          case "view-cat":
            return (
              <ViewCategory
                cat={cat}
                catType={catType}
                setCatType={setCatType}
              />
            );
          case "edit-cat":
            return (
              <EditCategory
                cat={cat}
                catType={catType}
                setCatType={setCatType}
              />
            );
          case "new-cat":
            return (
              <NewCategory
                cat={cat}
                catType={catType}
                setCatType={setCatType}  
              />
            );
          default:
            return <h3>No Type Selected</h3>;
        }
      }
    return(
        <CatSwitch />
    )

}

function ViewCategory(props) {
    const { cat } = props;
    return(
        <>
            <Icon icon={cat.icon}/>
            <h4>Category information</h4>
            <div>Name: {cat.name}</div>
            <div>Start considering: {cat.t3}</div>
            <div>Better get started: {cat.t2}</div>
            <div>Urgent: {cat.t1}</div>
        </>
    )
}

function EditCategory(props) {
    const { cat } = props;
    return(
        <>
            <Icon icon={cat.icon} />
            <h4>Category information</h4>
            <div>Name: {cat.name}</div>
            <div>Start considering: {cat.t3}</div>
            <div>Better get started: {cat.t2}</div>
            <div>Urgent: {cat.t1}</div>
        </>
    )
}

function NewCategory(props) {
    const {cat} = props;
    return(
        <>
            <Icon icon={cat.icon} />
            <h4>Category information</h4>
            <div>Name: {cat.name}</div>
            <div>Start considering: {cat.t3}</div>
            <div>Better get started: {cat.t2}</div>
            <div>Urgent: {cat.t1}</div>
        </>
    )

}