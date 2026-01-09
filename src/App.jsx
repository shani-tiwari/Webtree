import Home from './pages/Home';
// import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // const mouseFollower = document.querySelector('.mouse-follower');
    // mouseFollower.style.left = `${MouseEvent.clientX}px`;
    // mouseFollower.style.top = `${MouseEvent.clientY}px`;
    // console.log('ran');
    window.addEventListener("mousemove", (dets) => {
    const cir = document.querySelector(
      ".circle"
    )
    // .style.transform = `translate(${dets.clientX}px, ${dets.clientY}px )`;
    cir.style.top = `${(dets.clientX)/2}px`;
    cir.style.left = `${(dets.clientY)/2}px`;
  });
    
  }, []);

  return (
    <>
    <div className=' relative h-full w-full bg-linear-to-b from-neutral-900 to-neutral-800 mx-auto flex justify-center'>

      <Home/>
      {/* mouse follower */}
      <div className='circle absolute bg-neutral-600 rounded-full h-3 w-3'></div>
    </div>
    </>
  )
}

export default App
