import {Route, Routes} from 'react-router-dom'
import Random from './components/Random'
import Search from './components/Search'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'

function Container(){
    return(
        <div className='container-div'>
            <Routes>
                <Route path = "/" />
                <Route path = "/random" element = {<Random />}/>
                <Route path = "/search" element = {<Search />}/>
                <Route path = "/about" element = {<AboutUs/>} />
                <Route path = "*" element = {<NotFound />}/>
            </Routes>
        </div>
    )
}
export default Container;