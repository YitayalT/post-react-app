

import './post.css'
const Post = ({title, lecture}) => {

  return (
   <div className="card">
    <h4>The title of the course is: {title}</h4>
    <h3>The lecture of <i>{title} </i> is {lecture}</h3>
   </div>
  )
}

export default Post