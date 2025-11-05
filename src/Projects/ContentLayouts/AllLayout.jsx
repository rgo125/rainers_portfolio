import './AllLayout.css'

export default function AllLayout(){
    return(
        <>
            <div className='all-layout'>
                <div className='grid-cell wild-card'></div>
                <div className='grid-cell face-swap'></div>
                <div className='grid-cell path'></div>
                <div className='grid-cell artissn-landing'></div>
                <div className='grid-cell decis-tree'></div>
                <div className='right-container'>
                    <div className='grid-cell website'></div>
                    <div className='grid-cell daiella'></div>
                </div>
                <div className='bottom-container-1'>
                    <div className='grid-cell emergence'></div>
                    <div className='grid-cell humanoid'></div>
                    <div className='grid-cell arap'></div>
                </div>
                <div className='grid-cell idk'></div>
                <div className='grid-cell ai-videos'></div>
            </div>
        </>
    )
}