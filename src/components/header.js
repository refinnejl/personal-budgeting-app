import React from "react";

export const Header = props => {
    return (
      <div className="header">
        <h1 className="header__title" >{props.title}</h1>
      </div>
    );
  };
  
  Header.defaultProps = {
    title: "Budget App" 
  };