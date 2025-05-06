function Formgo()
{
return(
    <>
    <div class="flex ">

        <div class="flex flex-2/3">
        <h1> BOOKING A CALL </h1>
        <p>Give us a call today to discuss how we can bring your vision to life with our expert solutions!</p>
        
        <form>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email address *"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Phone number (optional)"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Company name (optional)"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>

          <textarea
            placeholder="How can we help you? *"
            maxLength="180"
            required
            className="border border-gray-300 p-3 rounded w-full h-28 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded w-full"
          >
            SEND
          </button>
    
        </form>
        </div>
        <div class="flex flex-1/3">
        </div>

    </div>
    </>
)


}
export default Formgo