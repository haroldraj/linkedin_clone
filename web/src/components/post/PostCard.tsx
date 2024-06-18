import './PostCard.css'
import InputOption from '../../pages/home/components/InputOption';
import { InsertCommentOutlined, LoopOutlined, SendOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_avatar/UserAvatar';
import { PostInfo } from '../../utils/post-info';

interface Props
{
    post: PostInfo;
}

export default function PostCard({ post }: Props)
{
    return (
        <div className='post'>
            <Link to={`/profile/${post.profile.id}`}>
                <div className="post_header">
                    <UserAvatar />
                    <div className="post_info">
                        <strong>{post.profile.user.firstName + ' ' + post.profile.user.lastName}</strong>
                        <p>{post.profile.summary}</p>
                    </div>
                </div>
            </Link>
            <div className="post_body">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
                <InputOption Icon={InsertCommentOutlined} title='Comment' color='gray' />
                <InputOption Icon={LoopOutlined} title='Repost' color='gray' />
                <InputOption Icon={SendOutlined} title='Send' color='gray' />
            </div>
            <div className="add-comment">
                <UserAvatar />
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    )
}
