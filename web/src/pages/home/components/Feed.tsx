import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Feed.css';
import CreatePostPopup from '../../../components/CreatePostPopup'; // Import your popup component
import InputOption from './InputOption';
import { CalendarViewDay, Image, MessageSharp } from '@material-ui/icons';
import Post from '../../../components/posts/Post';

export default function Feed()
{
    const [showPopup, setShowPopup] = useState(false);

    const handleFeedInputClick = () =>
    {
        setShowPopup(true);
    };

    const handleClosePopup = () =>
    {
        setShowPopup(false);
    };

    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className='feed_topInput'>
                    <Avatar className='feed_inputAvatar' />
                    <div className="feed_input" onClick={handleFeedInputClick}>
                        Write a new post
                    </div>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title='Media' Icon={Image} color='#70B5F9' />
                    <InputOption title='Contribute expertise' Icon={MessageSharp} color='#E7A33E' />
                    <InputOption title='Write article' Icon={CalendarViewDay} color='#7FC15E' />
                </div>
            </div>
            <Post
                name='Harold Rajaonarison'
                description='developer'
                content='First post'
            />
            <Post
                name='Harold Rajaonarison'
                description='developer'
                content='First post'
            />
            <Post
                name='Harold Rajaonarison'
                description='developer'
                content='First post'
            />
            <Post
                name='Harold Rajaonarison'
                description='developer'
                content='First post'
            />
            <Post
                name='Harold Rajaonarison'
                description='developer'
                content='First post'
            />

            {showPopup && <CreatePostPopup onClose={handleClosePopup} />}
        </div>
    );
}