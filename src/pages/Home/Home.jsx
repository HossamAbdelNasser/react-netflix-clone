import './home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
 

const Home = () => {
  return (
    <div className='home'>
       <Navbar />
       <Featured type = "movie" />
       <List listTitle='Continue to watch'/>
       <List listTitle='Action Movies'/>
       <List listTitle='Comdies'/>
       <List listTitle='Historical'/>
    </div>
  )
}

export default Home