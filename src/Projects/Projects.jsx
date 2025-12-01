import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Projects.css'
import ProjectsHeader from './Header/ProjectsHeader'
import ProjectsContent from './ProjectsContent'
import Project from './Project'
import projectsData from './projects.json'

export default function Projects(){
    const [activeCategory, setActiveCategory] = useState('All')

    function Portfolio(){
        return<><ProjectsHeader activeCategory={activeCategory} setActiveCategory={setActiveCategory}></ProjectsHeader>
                <ProjectsContent className='content' activeCategory={activeCategory}></ProjectsContent></>
    }

    return(
        <>
            <div className='projects-container'>
                <Routes>
                    <Route index element={<Portfolio />}/>
                    <Route path="artissn-landing" element={<Project metadata={projectsData['ARTISSN (2025)']}/>}/>
                    <Route path="portfolio" element={<Project metadata={projectsData["Rainer's Portfolio (2025)"]}/>}/>
                    {/* Other project routes would follow in similar fashion. */}
                </Routes>
            </div>
        </>
    )
}