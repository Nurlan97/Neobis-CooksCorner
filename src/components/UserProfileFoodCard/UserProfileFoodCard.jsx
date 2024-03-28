import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './UserProfileFoodCard.scss'

const UserProfileFoodCard = () => {
    const [userRecipeActive, setUserRecipeActive] = useState(true)
    const [savedRecipeActive, setSavedRecipeActive] = useState(false)

    const cards = [
        {
            title: "Egg Omlet",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Chicken Burger",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Onion Pizza",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Cheery Pastry",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Egg Omlet",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Chicken Burger",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Onion Pizza",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Cheery Pastry",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Egg Omlet",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Chicken Burger",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Onion Pizza",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
        {
            title: "Cheery Pastry",
            chef: 'by Ainsley Harriott',
            image: '/assets/images/Category/food_img.png',
            likes: 118,
            saved: 118
        },
    ]

    const handleUserRecipeClick = () => {
        setUserRecipeActive(!userRecipeActive)
        setSavedRecipeActive(false)
    }

    const handleSavedRecipeClick = () => {
        setSavedRecipeActive(!savedRecipeActive)
        setUserRecipeActive(false)
    }

    return (
        <div className='userProfileFoodCard'>
            <div className="userProfileFoodCard__actions">
                <p className={`userProfileFoodCard__userRecipe ${userRecipeActive ? 'active' : ''}`}
                    onClick={handleUserRecipeClick}
                >
                    My recipe
                </p>
                <p className={`userProfileFoodCard__savedRecipe ${savedRecipeActive ? 'active' : ''}`}
                    onClick={handleSavedRecipeClick}
                >
                    Saved recipe
                </p>

            </div>
            <div className="userProfileFoodCard__cards">

                {
                    cards && cards.map((item, index) => {
                        return (
                            <Link to="/dishDetails"
                                key={index}
                                className="userProfileFoodCard_card_container">
                                <div
                                    className="userProfileFoodCard__card"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <h2 className="userProfileFoodCard__card_title">
                                        {item.title}
                                    </h2>
                                    <p className="userProfileFoodCard__card_subtitle">
                                        {item.chef}
                                    </p>
                                    <div className="userProfileFoodCard__card_details">
                                        <div className="userProfileFoodCard__card_like_button_details">
                                            <img src="/assets/images/Category/like_button.png" alt="" className="userProfileFoodCard__card_like_button" />
                                            <p className="userProfileFoodCard__food_card_likes_number">
                                                {item.likes}
                                            </p>
                                        </div>
                                        <div className="userProfileFoodCard__card_save_button_details">
                                            <img src="/assets/images/Category/save_button.png" alt="" className="userProfileFoodCard__card_save_button" />
                                            <p className="userProfileFoodCard__card_save_number">
                                                {item.saved}
                                            </p>


                                        </div>
                                    </div>

                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserProfileFoodCard
