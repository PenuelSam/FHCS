const Customer = () => {
  return (
    <div className="bg-black/50 w-[50rem] md:w-[100vw] md:h-[30%] lg:h-[300px]  h-[35rem] mb-[5px]">
      <h1 className="text-[40px] lg:text-[25px] text-slate-300 text-center mt-[20px] pt-[20px] font-bold mb-[5px]">
        Contact Us
      </h1>
      
        <div className="max-container">
          <form>
            <div className="flex flex-col">
              <label className="text-[15px] text-slate-300 font-bold py-3">Name *</label>
              <input type="text" className="outline-none rounded-md h-[30px]" />
            </div>
            <div className="flex flex-col">
              <label className="text-[15px] text-slate-300 font-bold py-3">Phone *</label>
              <input
                type="number"
                className="outline-none rounded-md h-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[15px] text-slate-300 font-bold py-3">Email *</label>
              <input
                type="email"
                className="outline-none rounded-md h-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[15px] text-slate-300 font-bold py-3">Message *</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                className="outline-none rounded-sm"
              ></textarea>
            </div>
            <div className="flex justify-end mt-3">
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
