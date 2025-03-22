---
title: CodeBlocks
sidebar_position: 6 
---

```jsx title="CodeBlock"
function Greeting (props){
    return <p> Xin chào, {props.userName}</p>
}

export default Greeting;
```

```jsx title="Highlight Lines"
function HighlightText (highlight){
    if (highlight){
        //highlight-next-line
        return 'Dòng này được in đậm';
    }
    return 'Không được in đậm';
}

function HighlightMoreText(highlight){
    //highlight-start
    if (highlight){
        return 'This range is highlighted!';
    }
    //highlight-end
    return'Nothing highlighted';
}
```
```jsx title="Line Number" showLineNumbers
import React from 'react';

function UserProfile (props){
    const {username, email,isAdmin} = props;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Email:{email}</p>
            {isAdmin && <p>Admin User</p>}
        </div>
    );
}
export default UserProfile;
```

```jsx title="Line Numbers with Highlight" {4,9-11} showLineNumbers
import React from 'react';

function UserProfile (props){
    const {username, email,isAdmin} = props;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Email:{email}</p>
            {isAdmin && <p>Admin User</p>}
        </div>
    );
}
```