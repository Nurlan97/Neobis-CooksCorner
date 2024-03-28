import React from 'react'
import './DishDetails.scss'
import GoBack from '../ui/GoBack/GoBack'
import { useNavigate } from 'react-router-dom'

const DishDetails = () => {
  const navigate = useNavigate()


  const handleNavigateToChefsPage = () => {
    navigate('/chefsProfilePage')
  }
  return (
    <div className='dishDetails'>
      <GoBack />
      <div
        className="dishDetails__img"
        style={{ backgroundImage: `url('/assets/images/Category/dishDetails.png')` }}

      ></div>
      <div className="dishDetails__info">
        <div className="container">
          <h1
            className="dishDetails__title"

          >
            Ainsley’s Jerk Chicken
          </h1>
          <p
            className="dishDetails__subtitle"
            onClick={handleNavigateToChefsPage}
          >
            by Ainsley Harriott
          </p>

          <div className="dishDetails__time-container">
            <img src="/assets/images/dishDetails/clock.png" alt="" className="dishDetails__time_icon" />
            <p className="dishDetails__time">
              20-30 min
            </p>

          </div>
          <div className="dishDetails__level">
            Easy
          </div>

          <div className="dishDetails__actionsIconsBlock">
            <div className="dishDetails__like_button_wrapper">
              <img src="/assets/images/dishDetails/like_button.png" alt="" className="dishDetails__like_button" />
              <p className="dishDetails__like_button_text">12 likes</p>
            </div>
            <img src="/assets/images/dishDetails/save_button.png" alt="" className="dishDetails__save_button" />

          </div>

          <div className="dishDetails__description">
            <h2 className="dishDetails__description_title">
              Description
            </h2>
            <p className="dishDetails__description_text">
              You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...
            </p>
          </div>

          <div className="dishDetails__ingredients">
            <h2 className="dishDetails__ingredients_title">
              Ingredients
            </h2>
            <ul className="dishDetails__ingredients_list">
              <li className="dishDetails__ingredients_item-container">
                <p className="dishDetails__ingredients_item">
                  Chicken
                </p>
                <p className="dishDetails__ingredients_item_measure">
                  1 kg
                </p>
              </li>
              <li className="dishDetails__ingredients_item-container">
                <p className="dishDetails__ingredients_item">
                  Chicken
                </p>
                <p className="dishDetails__ingredients_item_measure">
                  1 kg
                </p>
              </li>

            </ul>
          </div>

        </div>
      </div>


    </div>
  )
}

export default DishDetails
