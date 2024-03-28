import React, { useState } from 'react'
import './ManageProfileFormModal.scss'

const ManageProfileFormModal = ({ modalIsOpen, handleModalClose }) => {

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected File")


    const handleNameInput = (event) => {
        setName(event.target.value)
    }
    const handleBioInput = (event) => {
        setBio(event.target.value)
    }

    const handlePhotoInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            console.log(fileName)

            setImage(URL.createObjectURL(file));
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return (
        modalIsOpen && (
            <div className='manageProfileFormModal'>
                <form className="manageProfileFormModal__form"
                    onSubmit={handleSubmit}
                >
                    <h1 className="manageProfileFormModal__form_title">
                        Manage Profile
                    </h1>
                    <img
                        src="/assets/images/ManageProfileModal/close_button.png" alt="close_button" className='manageProfileFormModal__close_button'
                        onClick={handleModalClose}
                    />
                    <div className="manageProfileFormModal__form-content">
                        <div className="manageProfileFormModal__form-input-wrapper">
                            <label htmlFor="name" className="manageProfileFormModal__form_name-label">
                                Change your name
                            </label>
                            <input
                                id="name"
                                type="text" className="manageProfileFormModal__form_name-input"
                                placeholder='Enter your new name to make changes'
                                value={name}
                                onChange={handleNameInput}
                            />

                        </div>
                        <div className="manageProfileFormModal__form-input-wrapper">
                            <label htmlFor="bio" className="manageProfileFormModal__form_bio-label">
                                Change your bio
                            </label>
                            <input
                                id="bio"
                                type="text" className="manageProfileFormModal__form_bio-input"
                                placeholder='Make changes here'
                                value={bio}
                                onChange={handleBioInput}
                            />

                        </div>

                        <div className="manageProfileFormModal__form-input-wrapper"
                            onClick={() => console.log(document.querySelector(".manageProfileFormModal__form_photo-input").click())}

                        >
                            <label htmlFor="photo" className="manageProfileFormModal__form_photo-label">
                                Add a recipe photo
                            </label>
                            <div className="manageProfileFormModal__form_photo-input-container">
                                <input
                                    id="photo"
                                    type="file"
                                    accept='image/*'
                                    className="manageProfileFormModal__form_photo-input"
                                    placeholder='Upload a new photo'
                                    hidden
                                    onChange={handlePhotoInputChange}
                                />
                                {image ?

                                    <div className='manageProfileFormModal__form_uploaded_image-wrapper'>
                                        <img src={image} width={150} height={150} alt={fileName}
                                            className='manageProfileFormModal__form_uploaded_image'
                                        />

                                        <p className="manageProfileFormModal__form_uploaded_image-text">
                                            Change photo
                                        </p>

                                    </div>
                                    :
                                    <>
                                        <img src='assets/images/ManageProfileModal/solar_camera-broken.png' />
                                        <a className="manageProfileFormModal__form-input-text">Upload a new photo</a>
                                    </>
                                }
                            </div>
                        </div>

                    </div>


                    <button className="manageProfileFormModal__button">
                        Save changes
                    </button>

                </form>

            </div>
        )
    )
}

export default ManageProfileFormModal
