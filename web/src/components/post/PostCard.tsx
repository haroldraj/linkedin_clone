import './PostCard.css'
import InputOption from '../../pages/home/components/InputOption';
import { InsertCommentOutlined, LoopOutlined, SendOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_avatar/UserAvatar';

interface Props
{
    name: string;
    description: string;
    content: string;
    profileId: number;
    title: string;
}

export default function PostCard({ name, description, content, profileId, title }: Props)
{
    return (
        <div className='post'>
            <Link to={`/profile/${profileId}`}>
                <div className="post_header">
                    <UserAvatar />
                    <div className="post_info">
                        <strong>{name}</strong>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
            <div className="post_body">
                <h3>{title}</h3>
                <p>{content}</p>
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
