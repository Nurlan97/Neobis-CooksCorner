import React, { useEffect, useState } from 'react'
import { MdSearch } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import './Search.scss'
import { useDispatch, useSelector } from 'react-redux';
import { searchRepices } from '../redux/actions/searchRecipesAPI';
import { FaHeart } from "react-icons/fa6";
import { BsBookmarkDashFill } from "react-icons/bs";
import _ from 'lodash';
import { useDebounce } from '../useDebounce';

const Search = () => {
    const [option, setOption] = useState('search__recipes')
    const [searchValue, setSearchValue] = useState('')
    const { data } = useSelector((state) => state.searchSlice)


    const debouncedValue = useDebounce(searchValue, 500)
    const dispatch = useDispatch()


    const handleSelect = (option) => {
        setOption(option)
    }

    useEffect(() => {
        dispatch(searchRepices(searchValue))
    },[debouncedValue])
    

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className='search'>
            <h1 className='search__title'>What to eat today?</h1>
            <div className="search__options-container">
                <div className="search__options">
                    <span
                        className={`search__chefs ${option === 'search__chefs' ? 'active' : ''}`}
                        onClick={() => handleSelect('search__chefs')}
                    >
                        Chefs
                    </span>

                    <span
                        className={`search__recipes ${option === 'search__recipes' ? 'active' : ''}`}
                        onClick={() => handleSelect('search__recipes')}
                    >
                        Recipes
                    </span>

                </div>
            </div>
            <div className='search__block'>

                <div className="search__input-wrapper">
                    <input

                        type="text"
                        className="search__input"
                        placeholder='Search recipes'
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <div className="search__input-logo">
                        <MdSearch />
                    </div>
                    <ul className="search__results">
                        {
                            data?.map((item) => (

                                <li className='search__results-block'
                                    key={item.recipeId}
                                >
                                    <img src={`${item.imageUrl}`} alt="" className='search__results-img' />
                                    <h2 className="search__results-title">
                                        {item.title}
                                    </h2>
                                    <p className="search__results-subtitle">
                                        by {item.author}
                                    </p>
                                    <div className="search__results-actions">
                                        <div className="search__results_like-button-wrapper">
                                            <FaHeart />
                                            <p className="search__results_likes_number">
                                                {item.likes}
                                            </p>
                                        </div>
                                        <div className="search__results_saved-button-wrapper">
                                            <BsBookmarkDashFill />
                                            <p className="search__results_saved_number">
                                                {item.bookmarks}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="search__addRecipe-wrapper">
                    <button className="search__addRecipe_btn">
                        <IoAddCircle />
                        Add your recipe
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Search
