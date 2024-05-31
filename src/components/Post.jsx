import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ data, id }) => {
    if (data) {
        return (
            <div className="post" >
                <div className="post-author">
                    <img
                        className="post-avatar"
                        src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
                    />
                    <p className="post-author-name">Anonym</p>
                </div>
                <div className="post-main">
                    <div className="post-content">
                        <p className="post-text"><Link to={`/posts/${id}`} className='post-link'>{data.content}</Link></p>
                    </div>
                    <div className="post-footer">
                        <div className="post-react-buttons">
                            <button className="post-like-button">Like</button>
                            <button className="post-comment-button">Comment</button>
                        </div>
                        <textarea
                            className="comment-textarea"
                            placeholder="Write comment..."
                        ></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
