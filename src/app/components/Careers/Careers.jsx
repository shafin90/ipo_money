
const Careers = () => {
    return (
      
           <div id="careers" className='w-11/12 mx-auto mt-28 '>
           <h1 className='text-center font-extrabold text-5xl text-slate-600 mb-16'>Contact US</h1>
       
          <div className="hero bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10 rounded">
<div className="hero-content flex-col lg:flex-row-reverse gap-x-36">
  <div className="text-center lg:text-left">
 
  </div>
  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-bold">Your Name</span>
        </label>
        <input type="text" placeholder="Your Name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-bold">Your Email Address</span>
        </label>
        <input type="email" placeholder="your email address" className="input input-bordered" required />
      
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-bold">Write your message</span>
        </label>
        <label className="form-control">

<textarea className="textarea textarea-bordered h-24" placeholder="write your message"></textarea>

</label>
        
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#bfdbfe] text-gray-800 hover:text-white border-0">Submit</button>
      </div>
    </form>
  </div>
</div>
</div>
      </div>
    );
};

export default Careers;