import { MouseEventHandler } from 'react';
import { Modal } from '@material-ui/core';
import './CreatePostPopup.css'

interface Props
{
    onClose: MouseEventHandler;
}

const CreatePostPopup = ({ onClose }:Props) =>
{
    return (
        <Modal open={true} onClose={onClose} className='createPost_popup'>
            <div className='createPost_popupContent'>
                <h2>Create a new post</h2>
                {/* Add your form or other content here */}
            </div>
        </Modal>
    );
}

export default CreatePostPopup;