---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
    <TabItem value="book" label="Book" default>
        Một quyển sách 
    </TabItem>
     <TabItem value="painting" label="Painting" default>
        Một bức tranh 
    </TabItem>
     <TabItem value="music" label="Music" default>
        Âm nhạc
    </TabItem>
</Tabs>
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


:::info 

Here's some **info** with _Markdown_ styling.