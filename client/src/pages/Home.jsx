import React from 'react';
import './home.scss';
import Card from '../components/Card'

function Home(){

    const dummy = [
        {
            id: 1,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 2,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 3,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 4,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 5,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 6,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 7,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 8,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 9,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 10,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 11,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 12,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 13,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 14,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
        {
            id: 15,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: 'hace 9 años',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI'
        },
    ]

    return(
        <div className="home">
            {dummy.map((item) => (
                <Card key={item.id} video={item}/>
            ))}
        </div>
    )
}
export default Home;