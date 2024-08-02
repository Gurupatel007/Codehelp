import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mx-auto rounded-md mt-1'></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;