
import './AllLayout.css';
import { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function AllLayout() {
  // Store sizes for each grid-cell
  const [sizes, setSizes] = useState({});

  // A single stable object holding all refs
  const refs = useRef({
    'wild-card': null,
    'face-swap': null,
    'path': null,
    'artissn-landing': null,
    'decis-tree': null,
    'website': null,
    'daiella': null,
    'emergence': null,
    'humanoid': null,
    'arap': null,
    'idk': null,
    'ai-videos': null,
  });

  // Helper: generates a ref setter function for each key
  const setRef = (key) => (el) => {
    refs.current[key] = el;
  };

  useEffect(() => {
    const map = refs.current;
    const newSizes = {};

    for (const key in map) {
      const el = map[key];

      if (el) {
        const rect = el.getBoundingClientRect();
        newSizes[key] = {
          width: Math.floor(rect.width),
          height: Math.floor(rect.height),
        };
      }
    }

    setSizes(newSizes);
  }, []);

  // Helper to generate CDN URL
  const baseUrl = 'https://res.cloudinary.com/dy9c4iexz/image/upload/';
  const pixelRatio = window.devicePixelRatio || 1.0;

  const getImageUrl = (name, key) => {
    const size = sizes[key];
    if (!size) return '';

    const { width, height } = size;
    console.log(`${width}, ${height}`);
    const params = `w_${width * pixelRatio},h_${height * pixelRatio},c_fill,g_auto/q_auto/f_auto`;
    return `${baseUrl}/${params}/${name}`;
  };

  return (
    <div className='all-layout'>

      <div ref={setRef('wild-card')} className='grid-cell wild-card'
        style={{ backgroundImage: `url(${getImageUrl('v1764114106/GardnerOlesen_Rainer_Image1_sarrkc.tiff', 'wild-card')})` }} />

      <div ref={setRef('face-swap')} className='grid-cell face-swap'
        style={{ backgroundImage: `url(${getImageUrl('v1764179219/face_swap_side_by_side_b17bxc.png', 'face-swap')})` }} />

      <div ref={setRef('path')} className='grid-cell path'
        style={{ backgroundImage: `url(${getImageUrl('v1764116930/refraction_wmddzt.png', 'path')})` }} />

      <Link to='artissn-landing' ref={setRef('artissn-landing')} className='grid-cell artissn-landing'
        style={{ backgroundImage: `url(${getImageUrl('v1764180517/artissn_tech_mockup_roi66a.png', 'artissn-landing')})` }} />

      <div ref={setRef('decis-tree')} className='grid-cell decis-tree'
        style={{ backgroundImage: `url(${getImageUrl('v1764183882/decis_tree_nrsaih.svg', 'decis-tree')})` }} />

      <div className='right-container'>
        <Link className='no-margin' to='portfolio'><div ref={setRef('website')} className='grid-cell website'
          style={{ backgroundImage: `url(${getImageUrl('v1764117053/Frame_32_yhwebg.png', 'website')})` }} /></Link>

        {/* <div ref={setRef('website')} className='grid-cell website'
          style={{ backgroundImage: `url(${getImageUrl('v1764117053/Frame_32_yhwebg.png', 'website')})` }} /> */}

        <div ref={setRef('daiella')} className='grid-cell daiella'
          style={{ backgroundImage: `url(${getImageUrl('v1764117215/daiella_image_flhl2y.png', 'daiella')})` }} />
      </div>

      <div className='bottom-container-1'>
        <div ref={setRef('emergence')} className='grid-cell emergence'
          style={{ backgroundImage: `url(${getImageUrl('v1764117562/Translation_thumbnail_gn5l5l.png', 'emergence')})` }} />

        <div ref={setRef('humanoid')} className='grid-cell humanoid'
          style={{ backgroundImage: `url(${getImageUrl('v1764117696/Frame_44_mfa1ob.png', 'humanoid')})` }} />

        <div ref={setRef('arap')} className='grid-cell arap'
          style={{ backgroundImage: `url(${getImageUrl('v1764185079/arap_clntl4.png', 'arap')})` }} />
      </div>

      <div ref={setRef('idk')} className='grid-cell idk'
        style={{ backgroundImage: `url(${getImageUrl('v1764184591/Screenshot_2024-08-16_at_6.15.29_PM_uftfdm.png', 'idk')})` }} />

      <div ref={setRef('ai-videos')} className='grid-cell ai-videos'
        style={{ backgroundImage: `url(${getImageUrl('v1764117429/IMG_3283_vcded5.png', 'ai-videos')})` }} />

    </div>
  );
}
