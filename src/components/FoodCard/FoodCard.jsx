import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './FoodCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../redux/actions/recipesAPI'

const FoodCard = ({category}) => {
    // const cards = [
    //     {
    //         title: "Egg Omlet",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Chicken Burger",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Onion Pizza",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Cheery Pastry",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Egg Omlet",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Chicken Burger",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Onion Pizza",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Cheery Pastry",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Egg Omlet",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Chicken Burger",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Onion Pizza",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    //     {
    //         title: "Cheery Pastry",
    //         chef: 'by Ainsley Harriott',
    //         image: '/assets/images/Category/food_img.png',
    //         likes: 118,
    //         saved: 118
    //     },
    // ]

    const dispatch = useDispatch()
    // const [category, setCategory] = useState('1')

    const {data} = useSelector(state => state.recipesSlice)
    console.log(data)
    
    useEffect(() => {
        dispatch(getRecipes(category))
    }, [category])

    return (
        <div className='foodCard'>
            <div className="foodCard_cards">
                {/* {
                    cards && cards.map((item, index) => {
                        return (
                            <Link to="/dishDetails" className="foodCard_card_container">
                                <div
                                    className="foodCard_card"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <h2 className="foodCard_card_title">
                                        {item.title}
                                    </h2>
                                    <p className="foodCard_card_subtitle">
                                        {item.chef}
                                    </p>
                                    <div className="foodCard_card_details">
                                        <div className="foodCard_card_like_button_details">
                                            <img src="/assets/images/Category/like_button.png" alt="" className="foodCard_card_like_button" />
                                            <p className="category__food_card_likes_number">
                                                {item.likes}
                                            </p>
                                        </div>
                                        <div className="foodCard_card_save_button_details">
                                            <img src="/assets/images/Category/save_button.png" alt="" className="foodCard_card_save_button" />
                                            <p className="foodCard_card_save_number">
                                                {item.saved}
                                            </p>


                                        </div>
                                    </div>

                                </div>
                            </Link>

                        )
                    })
                } */}
                {
                    data && data.map((item, index) => (

                        <Link to="/dishDetails" className="foodCard_card_container"
                            key={index}
                        >
                            <div
                                className="foodCard_card"
                                style={{ backgroundImage: `url(${item.imageUrl})` }}
                            >
                                <h2 className="foodCard_card_title">
                                    {item.title}
                                </h2>
                                <p className="foodCard_card_subtitle">
                                    {item.chef}
                                </p>
                                <div className="foodCard_card_details">
                                    <div className="foodCard_card_like_button_details">
                                        <img src="/assets/images/Category/like_button.png" alt="" className="foodCard_card_like_button" />
                                        <p className="category__food_card_likes_number">
                                            {item.likes}
                                        </p>
                                    </div>
                                    <div className="foodCard_card_save_button_details">
                                        <img src="/assets/images/Category/save_button.png" alt="" className="foodCard_card_save_button" />
                                        <p className="foodCard_card_save_number">
                                            {item.saved}
                                        </p>


                                    </div>
                                </div>

                            </div>
                        </Link>


                    ))
                }
            </div>
        </div>
    )
}

export default FoodCard
