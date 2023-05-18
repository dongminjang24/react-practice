import React from 'react';
import { useLocation } from 'react-router-dom';
const List = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search_query');
    return (
        <div>
            {searchQuery}
        </div>
    );
};

export default List;