import React from 'react'
import './Chefs.scss'
import GoBack from '../../components/ui/GoBack/GoBack';
import ChefsProfileFoodCard from '../ChefsProfileFoodCard/ChefsProfileFoodCard';

const Chefs = () => {
    const recipesCount = 29;
    const followersCount = 144;
    const followingCount = 100;

    return (
        <div className='chefs'>
            <GoBack />
            <div className="chefs__profile-info_container">
                <div className="chefs__profile-info_wrapper">
                    <div className="chefs__profile-info_content">
                        <img src="/assets/images/ChefsPage/chef.png" alt="" className="chefs__profile-info_img" />
                        <p className="chefs__profile-info_name">
                            Ainsley Harriott
                        </p>
                        <div className="chefs__profile-info_stats">
                            <div className="chefs__profile-info_stat">
                                <span className="chefs__profile-info_stat_count">{recipesCount}</span>
                                <span className="chefs__profile-info_stat_label">Recipes</span>
                            </div>
                            <div className="chefs__profile-info_stat">
                                <span className="chefs__profile-info_stat_count">{followersCount}</span>
                                <span className="chefs__profile-info_stat_label">Followers</span>
                            </div>
                            <div className="chefs__profile-info_stat">
                                <span className="chefs__profile-info_stat_count">{followingCount}</span>
                                <span className="chefs__profile-info_stat_label">Following</span>
                            </div>

                        </div>


                        <p className="chefs__profile-info_text">
                            Ainsley Denzil Dubriel Harriott MBE is an English chef and television presenter. He is known for his BBC cooking

                        </p>

                        <button className="chefs__profile-info_button">
                            Follow
                        </button>
                    </div>

                </div>

            </div>
            <ChefsProfileFoodCard/>
        </div>
    )
}

export default Chefs
