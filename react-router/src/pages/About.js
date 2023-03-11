import { useUser } from '../context/userContext';
import { Navigate } from 'react-router-dom'
const About = () => {
  const user = useUser();
  console.log(user)
  if (!user.name) {
    
    return <Navigate to ="/" />
  }
  return (
    <div className="home">
    <h2>About Me</h2>
    <p>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        perspiciatis!
      </span>
      <span>
        Veniam atque officia id rerum nobis repudiandae quod sapiente ipsa.
      </span>
      <span>
        Fugiat consequuntur vitae nostrum quam tempora, sit fugit ut
        voluptatem!
      </span>
    </p>
  </div>
  )
}

export default About