import './ProjectsHeader.css'
import Categories from './Categories.jsx'

export default function ProjectsHeader({ activeCategory, setActiveCategory}){
    return(
        <>
            <div className='header'>
                <div className='topOfHeader'>
                    <h2>Projects</h2>
                    <div className='links'>
                        <a className='blueButton link-button' href="">
                            <i className="devicon-github-original icon-styling"></i>
                            GitHub
                            </a>
                        <a className='blueButton link-button' href="">YouTube</a>
                        <a className='blueButton contact-button' href="">Contact Me</a>
                    </div>
                </div>
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}></Categories>
            </div>
        </>
    )
}