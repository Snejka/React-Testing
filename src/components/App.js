import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export const App = () => {
    return (
        <div>
            <CommentBox/>
            <CommentList />
        </div>
    )
}
export default App;
