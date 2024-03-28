import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FoodCard from '../FoodCard/FoodCard'
import './Category.scss'
import { useDispatch } from 'react-redux'



const Category = () => {

    const categories = ['Breakfast', 'Seafoods', 'Beverages', 'Salads', 'Desserts', 'Soups', "Pasta"]
    const [category, setCategory] = useState('1')
    const [active, setAcitve] = useState(0)

    const handleCategoryClick = (index) => {
        setAcitve(index)
        setCategory(index + 1)

    }
   

    return (
        <div className='category'>
            <div className="category__greetings_wrapper">
                <h1 className="category__greetings">
                    Hi,
                </h1>
                <p className="category__username">
                    Sarthak. UI Designer & Cook
                </p>
            </div>

            <h2 className="category__title">
                Category
            </h2>

            <ul className='category__list'>
                {categories.map((categoryItem, index) => (
                    <li key={index}
                        className={`category__item ${active === index ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(index)}
                    >
                        <Link to="#">{categoryItem}</Link>

                    </li>
                ))}

            </ul>

            <FoodCard 
                category={category}
            />
        </div>
    )
}

export default Category
