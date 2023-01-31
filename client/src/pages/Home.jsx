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
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 2,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 3,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 04:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 4,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2022/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 5,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 6,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/15 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 7,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2013/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 8,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 9,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 10,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 11,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 12,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 13,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 14,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
        },
        {
            id: 15,
            image: 'https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw',
            length: '2:00:00',
            title: 'Land of Rising Sun',
            channel: 'Beyond Skys',
            views: 613382,
            uploadDate: '2023/01/25 08:15:13',
            avatar: 'https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj',
            link: 'https://www.youtube.com/watch?v=xHlqSABb7pI&ab_channel=BeyondSkys'
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