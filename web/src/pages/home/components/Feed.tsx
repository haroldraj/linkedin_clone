import { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Feed.css';
import InputOption from './InputOption';
import { CalendarViewDay, Image, MessageSharp } from '@material-ui/icons';
import Post from '../../../components/posts/PostCard';
import { PostInfo } from '../../../utils/post-info';
import { Link } from 'react-router-dom';
import postAPI from '../../../api/postAPI';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Feed()
{
    const [posts, setPosts] = useState<PostInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            setIsLoading(true);
            try
            {
                const fetchedPosts = await postAPI.getAllPosts();
                setPosts(fetchedPosts);
            } catch (error)
            {
                console.error('Failed to fetch posts:', error);
            }
            setIsLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <div className='feed'>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <div className="feed_inputContainer">
                        <div className='feed_topInput'>
                            <Avatar className='feed_inputAvatar' />
                            <Link to='/new-post'>
                                <div className="feed_input" >
                                    Write a new post
                                </div>
                            </Link>

                        </div>
                        <div className="feed_inputOptions">
                            <InputOption title='Media' Icon={Image} color='#70B5F9' />
                            <InputOption title='Contribute expertise' Icon={MessageSharp} color='#E7A33E' />
                            <InputOption title='Write article' Icon={CalendarViewDay} color='#7FC15E' />
                        </div>
                    </div>

                    {
                        posts && posts.map((post) => (
                            <Post key={post.id}
                                name={post.profile.user.firstName + ' ' + post.profile.user.lastName}
                                description={post.profile.summary}
                                content={post.content} profileId={post.profile.id}
                                title={post.title}
                            />
                        ))
                            
                    }
                </>
            )}
        </div>);
}