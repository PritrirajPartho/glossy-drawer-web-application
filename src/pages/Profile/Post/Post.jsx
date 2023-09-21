import React from 'react';
import "./Post.css"
import Swal from 'sweetalert2';

const Post = ({ postsAll, photo, name }) => {

    // console.log(postsAll)
    let { id, date, _id } = postsAll
    console.log(postsAll)

    let handleDeletePost = () => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://glossy-drawer-web-application-server.vercel.app/deletePost/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='PostParent bg-white mt-4 pb-[16px] rounded-[10px]'>

            <div className="PostHead flex justify-between items-center px-[16px] pt-[16px]">
                <div className="flex items">
                    <div className="overflow-hidden">
                        <img className='w-[50px] h-[50px] rounded-[50%]' src={photo} alt="img" />
                    </div>
                    <div className="info ml-2">
                        <h3 className='text-[20px] font-bold'>{name}</h3>
                        <h5 className='leading-[14px]'>{date}</h5>
                    </div>
                </div>
                <div className="Icons">
                    <button onClick={handleDeletePost}>
                        <i class="fa text-[20px] fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div className="PostStatus px-[16px]">
                <p className='py-[14px] text-left text-[17px] font-semibold'>{postsAll?.status}</p>
            </div>

            <div className="PostImage">
                <div className="overflow-hidden">
                    {
                        postsAll?.image &&
                        <img className='w-[100%] h-[300px]' src={postsAll?.image} alt="img" />
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

export default Post;