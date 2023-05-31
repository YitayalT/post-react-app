

const names = ['Abebe', 'Belete'];
const Post = () => {
    const name = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>{name}</div>
  )
}

export default Post