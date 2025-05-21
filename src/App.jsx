import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NestedComponent from './nested'
import Form from './form'
import Rendering from './conditionalRendering'
import DynamicList from './dynamicListAdd'
import SliderComponent from "./SliderComponent";

const images = [
    "https://images.pexels.com/photos/6664684/pexels-photo-6664684.jpeg?cs=srgb&dl=pexels-constanze-marie-6664684.jpg&fm=jpg",
    "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
    "https://images.pexels.com/photos/2059466/pexels-photo-2059466.jpeg?cs=srgb&dl=-2059466.jpg&fm=jpg",
    "https://images.pexels.com/photos/2059466/pexels-photo-2059466.jpeg?cs=srgb&dl=-2059466.jpg&fm=jpg",
];

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Mouse click program */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div> */}

        {/*  Nested component program */}
        {/* <NestedComponent/> */}

        {/* user Form program*/}
        {/* <Form/> */}

        {/* conditional Rendering  */}
        {/* <Rendering number={0}/> */}


        {/* Dynamic list */}
        {/* <DynamicList/> */}

        <div>
            <h2>Dynamic Image Slider</h2>
            <SliderComponent images={images} autoplay={true} speed={1500} slidesToShow={2} />
        </div>
    </>
  )
}

export default App
