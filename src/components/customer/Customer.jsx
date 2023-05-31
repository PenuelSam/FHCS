const Customer = () => {
  return (
    <div className="bg-black/50 w-[50rem] md:w-[100vw] md:h-[60%] lg:h-[600px]  h-[50rem] mb-[50px]">
      <h1 className="text-[50px] lg:text-[30px] text-slate-300 text-center mt-[50px] pt-[20px] font-bold mb-[50px]">
        Contact Us
      </h1>
      
        <div className="max-container">
          <form>
            <div className="flex flex-col">
              <label className="text-[20px] text-slate-300 font-bold py-3">Name *</label>
              <input type="text" className="outline-none rounded-md h-[40px]" />
            </div>
            <div className="flex flex-col">
              <label className="text-[20px] text-slate-300 font-bold py-3">Phone *</label>
              <input
                type="number"
                className="outline-none rounded-md h-[40px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[20px] text-slate-300 font-bold py-3">Email *</label>
              <input
                type="email"
                className="outline-none rounded-md h-[40px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[20px] text-slate-300 font-bold py-3">Message *</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="outline-none rounded-sm"
              ></textarea>
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="px-5 py-3 rounded-md text-white bgc"
              >
                Send
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Customer;
