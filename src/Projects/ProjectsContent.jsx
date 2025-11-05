import './Projects.css'
import AllLayout from './ContentLayouts/AllLayout';
import UILayout from './ContentLayouts/UILayout';
import CodeLayout from './ContentLayouts/CodeLayout';
import AnimationLayout from './ContentLayouts/AnimationLayout';

const layouts = {
    'All': AllLayout,
    'UI': UILayout,
    'Code': CodeLayout,
    'Animation': AnimationLayout
}

export default function ProjectsContent({activeCategory}){
    const Layout = layouts[activeCategory];
    return(
        <>
            <Layout />
        </>
    )
}