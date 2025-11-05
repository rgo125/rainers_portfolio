import './ProjectsHeader.css'


export default function Categories({ activeCategory, setActiveCategory }){
    return(<>
    <div className='filtersContainer'>
        <h3>Categories:</h3>
        <button className={activeCategory === 'All' ? 'active-filter filter' : 'blueButton filter not-active-filter'} onClick={()=>setActiveCategory('All')}>All</button>
        <button className={activeCategory === 'UI' ? 'active-filter filter' : 'blueButton filter not-active-filter'} onClick={()=>setActiveCategory('UI')}>UI</button>
        <button className={activeCategory === 'Code' ? 'active-filter filter' : 'blueButton filter not-active-filter'} onClick={()=>setActiveCategory('Code')}>Code</button>
        <button className={activeCategory === 'Animation' ? 'active-filter filter' : 'blueButton filter not-active-filter'} onClick={()=>setActiveCategory('Animation')}>Animation</button>
    </div>
    </>)
}