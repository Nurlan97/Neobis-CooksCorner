import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ChefsProfileFoodCard.scss'

const ChefsProfileFoodCard = () => {
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
    return (
        <div className='chefsProfileFoodCard'>
            <div className="chefsProfileFoodCard_cards">
                {
                    cards && cards.map((item, index) => {
                        return (
                            <Link to="/dishDetails" className="chefsProfileFoodCard_card_container">
                                <div
                                    className="chefsProfileFoodCard_card"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <h2 className="chefsProfileFoodCard_card_title">
                                        {item.title}
                                    </h2>
                                    <p className="chefsProfileFoodCard_card_subtitle">
                                        {item.chef}
                                    </p>
                                    <div className="chefsProfileFoodCard_card_details">
                                        <div className="chefsProfileFoodCard_card_like_button_details">
                                            <img src="/assets/images/Category/like_button.png" alt="" className="chefsProfileFoodCard_card_like_button" />
                                            <p className="chefsProfileFoodCard__food_card_likes_number">
                                                {item.likes}
                                            </p>
                                        </div>
                                        <div className="chefsProfileFoodCard_card_save_button_details">
                                            <img src="/assets/images/Category/save_button.png" alt="" className="chefsProfileFoodCard_card_save_button" />
                                            <p className="chefsProfileFoodCard_card_save_number">
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

export default ChefsProfileFoodCard
