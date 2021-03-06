import React from 'react'
import abc from '../images/abc.jpg'
const CardContact = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={abc} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i
                className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px" }}
                onclick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};

export default CardContact;