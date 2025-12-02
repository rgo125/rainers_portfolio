import './ProjectsHeader.css'
import Categories from './Categories.jsx'

export default function ProjectsHeader({ activeCategory, setActiveCategory}){
    return(
        <>
            <div className='header'>
                <div className='topOfHeader'>
                    <h2>Projects</h2>
                    <div className='links'>
                        <a className='blueButton link-button' href="https://github.com/rgo125">
                            <i className="devicon-github-original icon-styling"></i>
                            GitHub
                            </a>
                        <a className='blueButton link-button' href="https://www.youtube.com/watch?v=V-Imgko83fo">Demo Reel</a>
                        <a className='blueButton link-button' href="https://www.youtube.com/@rainergoproductions7077">YouTube</a>
                        <a className='blueButton contact-button' href="mailto:rainergardnerolesen@gmail.com">Contact Me</a>
                    </div>
                </div>
                {/* <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}></Categories> */}
            </div>
        </>
    )
}