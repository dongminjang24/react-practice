import React from 'react';

const NotFound = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <img id="error-page-hh-illustration" src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt=""></img>
            <div>
                <p>죄송합니다. 이 페이지를 사용할 수 없습니다.</p>
                <p>다른 검색어로 검색해 보세요.</p>
            </div>
        </div>
    );
};

export default NotFound;