
const Careers = () => {
    return (
        <div id="careers" className="mt-10">
               <h1 className='text-center font-extrabold text-5xl text-slate-600 mb-16'>Careers</h1>
               <div  className='w-11/12 mx-auto mt-28 bg-gray-50 hover:bg-gray-100 py-5'>
          
         
            <div className="hero   text-slate-600 rounded">
  <div className="hero-content flex-col lg:flex-row-reverse gap-x-28">
    <div className=" lg:text-left">
    <div className="card shrink-0 w-full max-w-sm  bg-gray-50 hover:bg-gray-100  text-slate-600">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Your Picture</span>
          </label>
          <input type="file" placeholder="Your Picture" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Add Your Resume</span>
          </label>
          <input type="file" placeholder="your resume" className="input input-bordered lg:w-96 " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Write your feedback (optional) </span>
          </label>
          <label className="form-control">

  <textarea className="textarea textarea-bordered h-10 lg:w-96" placeholder="write your feedback"></textarea>

</label>
          
        </div>
       
        
      </form>
    </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm  bg-gray-50 hover:bg-gray-100  text-slate-600">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Your Email Address</span>
          </label>
          <input type="email" placeholder="your email address" className="input input-bordered lg:w-96 " required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Your Phone Number</span>
          </label>
          <input type="text" placeholder="your phone number" className="input input-bordered lg:w-96 " required />
        
        </div>
       
        
      </form>
    </div>
  </div>
  
</div>
<div className="form-control mt-6 lg:mx-16 flex justify-center">
          <button className="btn bg-[#bfdbfe] text-gray-800 hover:text-white border-0">Submit</button>
        </div>
        </div>
        </div>
        
    );
};

export default Careers;