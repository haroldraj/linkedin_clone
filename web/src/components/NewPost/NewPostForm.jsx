import React, { useState } from 'react';
import { Card, Form, Button, Image, Modal, Container, Row } from 'react-bootstrap';
import { FcPicture, FcClapperboard, FcPlanner, FcViewDetails } from 'react-icons/fc';
import { BiWorld, BiMessageRoundedDetail } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { MdPhotoSizeSelectActual, MdPoll } from 'react-icons/md';
import { RiVideoFill, RiHandbagFill, RiSettings2Fill } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io5';
import NewPostService from './NewPostService';
import './NewPostForm.module.css';

const NewPostForm = () => {
    const [show, setShow] = useState(false);
    const [newPost, setNewPost] = useState({ text: '' });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createNewPost = async (e) => {
        e.preventDefault();
        try {
            const response = await NewPostService.createPost(newPost);
            if (response.ok) {
                const newPostJson = await response.json();
                console.log(newPostJson);
                setNewPost(newPostJson);
                alert('Post was sent!');
            } else {
                console.log('error');
                alert('Something went wrong');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Card className="feed">
                <Card.Body>
                    <div className="d-flex flex-row">
                        <Image src="/assets/profile-photo.jpg" alt="profile" className="start__img" />
                        <span className="d-flex flex-column ml-3">
              <Card.Title>
                <div style={{ marginTop: '1vh' }} className="">
                  <Container onClick={handleShow} className="search__container__onscroll">
                    <Row className="search__bar__elements__row">
                      <small className="">Start a post</small>
                    </Row>
                  </Container>
                </div>
              </Card.Title>
            </span>
                    </div>
                    <div className="feed__inputOptions d-flex justify-content-between mt-2 mx-1">
                        <Button className="d-flex start__btn">
                            <FcPicture size={26} />
                            <small className="text-muted ml-2 mt-1 start__txt">Photo</small>
                        </Button>
                        <Button className="d-flex start__btn">
                            <FcClapperboard size={26} />
                            <small className="text-muted ml-2 mt-1 start__txt">Video</small>
                        </Button>
                        <Button className="d-flex start__btn">
                            <FcPlanner size={26} />
                            <small className="text-muted ml-2 mt-1 start__txt">Event</small>
                        </Button>
                        <Button className="d-flex start__btn">
                            <FcViewDetails size={26} />
                            <small className="text-muted ml-2 mt-1 start__txt">Write article</small>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <span id="modal__title">Create a post</span>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Card.Body>
                                <div className="d-flex flex-row">
                                    <Image src="/assets/profile-photo.jpg" alt="profile" className="start__img" />
                                    <span className="d-flex flex-column ml-3">
                    <Card.Text className="">User Name</Card.Text>
                    <Card.Subtitle className="text-muted">
                      <Button variant="light" className="anyone__btn">
                        <BiWorld className="mr-2 text-muted" />
                        Anyone
                      </Button>
                    </Card.Subtitle>
                  </span>
                                </div>
                            </Card.Body>
                        </Row>
                        <Row>
                            <Form onSubmit={createNewPost}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="What do you want to talk about?"
                                        rows={5}
                                        style={{ border: 'transparent', width: '60vh' }}
                                        value={newPost.text}
                                        onChange={(e) =>
                                            setNewPost({
                                                text: e.currentTarget.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <div className="d-flex">
                                    <Button variant="light" className="hashtag__btn">
                                        Add hashtag
                                    </Button>
                                    <Button className="post__btn" variant="light" type="submit">
                                        Post
                                    </Button>
                                </div>
                            </Form>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-around">
                    <Row className="ml-3 text-muted ">
                        <MdPhotoSizeSelectActual className="mr-3" size={23} />
                        <RiVideoFill className="mr-3" size={23} />
                        <IoDocumentText className="mr-3" size={23} />
                        <RiHandbagFill className="mr-3" size={23} />
                        <RiSettings2Fill className="mr-3" size={23} />
                        <MdPoll className="mr-3" size={23} />
                        <BsThreeDots className="mr-2" size={23} />
                        <hr />
                        <Button variant="light" className="anyone__btn__footer">
                            <BiMessageRoundedDetail className="mr-2 text-muted" />
                            Anyone
                        </Button>
                        <Button variant="light" className="close__btn ml-2" onClick={handleClose}>
                            Close
                        </Button>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NewPostForm;
