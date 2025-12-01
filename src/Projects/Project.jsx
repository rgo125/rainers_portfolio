//import { meta } from "@eslint/js";
import{ useEffect, useState, useRef, useCallback } from "react";
import './Project.css'


// function UISection({metadata}){

// }

// function DocumentationSection({metadata}){

// }

// function VideoSection({metadata}){

// }

function ProjectHeader({title}){
    return<><div className="header"><h1>{title}</h1></div></>
}

function MainSection({images, about}){
    console.log(about['description']);
    return<><div className="mainSectionContainer">
            <ImageViewContainer images={images}/>
            <AboutContainer about={about}/></div></>
}

function LinkButtons({links}){
  return<><div className="links">{Object.entries(links).map(([key, value]) => (
        // Use the 'key' from Object.entries as the React key
        <a className='blueButton link-button' href={value}>
          {key}
        </a>
      ))}</div></>
    }


function AboutContainer({about}){
    return<><div className="aboutContainer">
            <h1>About</h1><LinkButtons links={about['links']}/><p>{about['description']}</p></div></>
}

function ImageViewContainer({images}){
  const imageViewRef = useRef();

  const [myImages, setMyImages] = useState([]);
  const [index, setIndex] = useState(0);

  // Helper to generate CDN URL
  const baseUrl = 'https://res.cloudinary.com/dy9c4iexz/image/upload/';
  const pixelRatio = window.devicePixelRatio || 1.0;

  const getImageUrl = useCallback((name, size) =>{
    if (!size) return '';

    const { height } = size;
    console.log(`yuhhhhh ${height}`);
    const params = `h_${height * pixelRatio},c_scale/q_auto/f_auto`;
    return `${baseUrl}/${params}/${name}`;
  }, [baseUrl, pixelRatio]);
  
  //store images for display
  useEffect(() => {
    const imageView = imageViewRef.current;
    let size;

    if (imageView) {
        const rect = imageView.getBoundingClientRect();
        size = {
        // width: Math.floor(rect.width),
        height: Math.floor(rect.height),
        };
    }
    
    async function loadImages(){
        let loaded = [];
        for (const image of images) {
            const blob = await preload(getImageUrl(image, size));
            loaded.push(blob);
            console.log(`pushed ${image} to loaded`);
            setMyImages([...loaded]);
        }
    //     const loaded = await Promise.all(
    //     images.map(image => preload(getImageUrl(image, size)))
    //   );
    //     setMyImages(loaded);
    }
    loadImages();
  }, [images, getImageUrl]);

  async function preload(url) {
    console.log('preloading');
    const res = await fetch(url);
    console.log("post res");
    const blob = await res.blob();
    console.log("post blob")
    const objectUrl = URL.createObjectURL(blob);
    console.log("post url")
    return objectUrl;
    }

  useEffect(() => {
    if (myImages.length === 0) return; // do nothing until images are loaded
    console.log(`setting interval for images of length ${myImages.length}`);

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % myImages.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [myImages.length]);

  return<><div className="imageViewContainer">
            <img ref={imageViewRef} src= {myImages[index]} className="currentImg"></img>
        </div></>
}


export default function Project({metadata}){
  console.log(metadata);
    return<><ProjectHeader title={metadata['title']}/>
            <MainSection images={metadata['images']} about={metadata['about']}/></>
}