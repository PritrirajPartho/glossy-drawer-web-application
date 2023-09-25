import React, { useState } from 'react';
import "./UserAllPostCard.css"

const UserAllPostCard = ({AllPostU}) => {

    console.log(AllPostU)


    return (
        <div className='PostParent bg-white mt-4 pb-[16px] rounded-[10px]'>

        <div className="PostHead flex justify-between items-center px-[16px] pt-[16px]">
            <div className="flex items">
                <div className="overflow-hidden">
                    <img className='w-[50px] h-[50px] rounded-[50%]' src={AllPostU?.photo} alt="img" />
                </div>
                <div className="info ml-2">
                    <h3 className='text-[20px] font-bold'>{AllPostU?.name}</h3>
                    <h5 className='leading-[14px]'>{AllPostU.date}</h5>
                </div>
            </div>
            <div className="Icons">
                <button>
                    ...
                </button>
            </div>
        </div>

        <div className="PostStatus px-[16px]">
            <p className='py-[14px] text-left text-[17px] font-semibold'>{AllPostU?.status}</p>
        </div>

        <div className="PostImage">
            <div className="overflow-hidden">
                {
                    AllPostU?.image &&
                    <img className='w-[100%] h-[600px]' src={AllPostU?.image} alt="img" />
                }
            </div>
        </div>

        <div className="PostLikeOptions px-[16px] pt-3">

            <div className="flex justify-between items-center pb-3">
                <div className="TotalLike flex items-center">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    <h5>10 Others</h5>
                </div>
                <div className="flex items-center">
                    <div className="TotalComment flex items-center pr-4">
                        <h5 className='mr-2'>100</h5>
                        <i class="fa fa-comment-o" aria-hidden="true"></i>
                    </div>
                    <div className="TotalShare flex items-center">
                        <h5 className='mr-2'>20</h5>
                        <i class="fa fa-share" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-between px-0 md:px-10 pt-3">
                <div className="flex items-center">
                    <i class="mr-2 fa fa-thumbs-o-up" aria-hidden="true"></i>
                    <h5 className='text-[16px] font-bold'>Like</h5>
                </div>
                <div className="flex items-center">
                    <i class="mr-2 text-[20px] fa fa-comment-o" aria-hidden="true"></i>
                    <h5 className='text-[16px] font-bold'>Comment</h5>
                </div>
                <div className="flex items-center">
                    <i class="mr-2 text-[20px] fa fa-share" aria-hidden="true"></i>
                    <h5 className='text-[16px] font-bold'>share</h5>
                </div>
            </div>
        </div>







    </div>
    );
};

export default UserAllPostCard;