
import b4 from '../../../assets/b4.jpg';
import b3 from '../../../assets/b3.jpg';
import b2 from '../../../assets/b2.jpg';
import b1 from '../../../assets/b1.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[450px]">

        <div id="slide1" className="carousel-item relative w-full">
          <img src={b4} className="w-full rounded-lg " />
          <div className='absolute h-full w-4/6 mx-auto p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
            <h1 className='text-4xl font-semibold text-amber-500'> Your Gateway to Fitness and <br /> Sports Success</h1>
            <p className='text-base font-medium text-white mt-4'>Discover, connect, and excel in the world of fitness
                 and sports with FitConnect. Whether you're a trainer
                  seeking clients or an enthusiast looking for expert
                   guidance, our platform brings together professionals
                    and enthusiasts for tailored training, coaching, and 
                    partnership opportunities. Take the next step towards
                     your fitness and sports goals today!</p>
           <div className='mt-5'>
           <input className='h-12 rounded-lg px-4' type="text" name="" id="" />
            <button className='btn btn-secondary ml-4'>Search</button>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
        <div id="slide2" className="carousel-item relative w-full">
          <img src={b3} className="w-full rounded-lg " />
          <div className='absolute h-full w-4/6 mx-auto p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
            <h1 className='text-4xl font-semibold text-amber-500'> Your Gateway to Fitness and <br /> Sports Success</h1>
            <p className='text-base font-medium text-white mt-4'>Discover, connect, and excel in the world of fitness
                 and sports with FitConnect. Whether you're a trainer
                  seeking clients or an enthusiast looking for expert
                   guidance, our platform brings together professionals
                    and enthusiasts for tailored training, coaching, and 
                    partnership opportunities. Take the next step towards
                     your fitness and sports goals today!</p>
           <div className='mt-5'>
           <input className='h-12 rounded-lg px-4' type="text" name="" id="" />
            <button className='btn btn-secondary ml-4'>Search</button>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide3" className="carousel-item relative w-full">
          <img src={b2} className="w-full rounded-lg " />
          <div className='absolute h-full w-4/6 mx-auto p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
            <h1 className='text-4xl font-semibold text-amber-500'> Your Gateway to Fitness and <br /> Sports Success</h1>
            <p className='text-base font-medium text-white mt-4'>Discover, connect, and excel in the world of fitness
                 and sports with FitConnect. Whether you're a trainer
                  seeking clients or an enthusiast looking for expert
                   guidance, our platform brings together professionals
                    and enthusiasts for tailored training, coaching, and 
                    partnership opportunities. Take the next step towards
                     your fitness and sports goals today!</p>
           <div className='mt-5'>
           <input className='h-12 rounded-lg px-4' type="text" name="" id="" />
            <button className='btn btn-secondary ml-4'>Search</button>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide4" className="carousel-item relative w-full">
          <img src={b1} className="w-full rounded-lg " />
          <div className='absolute h-full w-4/6 mx-auto p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
            <h1 className='text-4xl font-semibold text-amber-500'> Your Gateway to Fitness and <br /> Sports Success</h1>
            <p className='text-base font-medium text-white mt-4'>Discover, connect, and excel in the world of fitness
                 and sports with FitConnect. Whether you're a trainer
                  seeking clients or an enthusiast looking for expert
                   guidance, our platform brings together professionals
                    and enthusiasts for tailored training, coaching, and 
                    partnership opportunities. Take the next step towards
                     your fitness and sports goals today!</p>
           <div className='mt-5'>
           <input className='h-12 rounded-lg px-4' type="text" name="" id="" />
            <button className='btn btn-secondary ml-4'>Search</button>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;