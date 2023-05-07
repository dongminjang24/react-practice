import React from 'react';


const List = ({id,shoes}) => {
    const shoe = shoes.find((obj) => obj['id'] === id);

    return (
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="80%" />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
      </div>
    

    );
};

export default List;