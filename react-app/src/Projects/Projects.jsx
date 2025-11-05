import { useState } from "react";
import './Projects.css'
import ProjectsHeader from './Header/ProjectsHeader'
import ProjectsContent from './ProjectsContent'

export default function Projects(){
    const [activeCategory, setActiveCategory] = useState('All')

    return(
        <>
            <div className='projects-container'>
                <ProjectsHeader activeCategory={activeCategory} setActiveCategory={setActiveCategory}></ProjectsHeader>
                <ProjectsContent className='content' activeCategory={activeCategory}></ProjectsContent>
            </div>
        </>
    )
}