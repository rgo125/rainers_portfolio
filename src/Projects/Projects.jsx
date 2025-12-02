import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Projects.css'
import ProjectsHeader from './Header/ProjectsHeader'
import ProjectsContent from './ProjectsContent'
import Project from './Project'
import projectsData from './projects.json'

export default function Projects(){
    console.log("rerendering");
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
                    <Route path="wild-card" element={<Project metadata={projectsData["Wild Card (2025)"]}/>}/>
                    <Route path="daiella" element={<Project metadata={projectsData["Dancing With My Shadow (2025)"]}/>}/>
                    <Route path="face-swap" element={<Project metadata={projectsData["ARTISSN Face Swap"]}/>}/>
                    <Route path="path" element={<Project metadata={projectsData["Pathtracer"]}/>}/>
                    <Route path="decis-tree" element={<Project metadata={projectsData["Decision Tree"]}/>}/>
                    <Route path="emergence" element={<Project metadata={projectsData["Emergence"]}/>}/>
                    <Route path="humanoid" element={<Project metadata={projectsData["Humanoid"]}/>}/>
                    {/* Other project routes would follow in similar fashion. */}
                </Routes>
            </div>
        </>
    )
}