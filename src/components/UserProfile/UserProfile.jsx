import React, { useState } from 'react'
import GoBack from '../ui/GoBack/GoBack'
import './UserProfile.scss'
import UserProfileFoodCard from '../UserProfileFoodCard/UserProfileFoodCard'
import ManageProfileFormModal from '../ManageProfileFormModal/ManageProfileFormModal'
import LogoutModal from '../LogoutModal/LogoutModal'


const UserProfile = () => {
  const recipe = 29
  const followers = 144
  const following = 100

  const [logoutModal, setLogoutModal] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [active, setActive] = useState(false)

  const handleModalClose = () => {
    setModalIsOpen(false)
  }

  return (
    <div className='userProfile'>
      <h1 className='userProfile__title'>Profile</h1>
      <div className="userProfile__info-wrapper">
        <img src="/assets/images/UserProfilePage/user.png" alt="" className="userProfile__user_img" />
        <div className="userProfile__info">
          <div className="userProfile__info-stats">
            <div className="userProfile__info-stat">
              <span className="userProfile__info-stat-counter">{recipe}</span>
              <span className="userProfile__info-stat-label">Recipe</span>
            </div>
            <div className="userProfile__info-stat">
              <span className="userProfile__info-stat-counter">{followers}</span>
              <span className="userProfile__info-stat-label">Followers</span>
            </div>
            <div className="userProfile__info-stat">
              <span className="userProfile__info-stat-counter">{following}</span>
              <span className="userProfile__info-stat-label">Following</span>
            </div>
          </div>
          <div className="userProfile__info-text-wrapper">
            <h1 className="userProfile__info-title">Sarthak Ranjan Hota</h1>
            <p className="userProfile__info-text">I'm a passionate chef who loves creating delicious dishes with flair.</p>
          </div>
          <button
            className="userProfile__info-button"
            onClick={() => setModalIsOpen(true)}
          >
            Manage Profile
          </button>
          <ManageProfileFormModal
            modalIsOpen={modalIsOpen}
            handleModalClose={handleModalClose}
          />
        </div>
      </div>

      <section className="userProfileFoodCard__section">
        <UserProfileFoodCard />
      </section>
      <LogoutModal
        logoutModal={logoutModal}
        setLogoutModal={setLogoutModal}
      />
    </div>
  )
}

export default UserProfile
