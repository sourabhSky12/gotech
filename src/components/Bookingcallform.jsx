function Bookingcallform()
{
    return(
        <>
        
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto my-10">
      {/* Left - Form Section */}
      <div className="bg-white p-8 flex-1">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">BOOKING A CALL</h2>
        <p className="text-sm text-gray-600 mb-6">
          Give us a call today to discuss how we can bring your vision to life with our expert solutions!
        </p>

        <form className="space-y-4">
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

      {/* Right - Contact Info */}
      <div className="bg-blue-900 text-white p-8 flex-1 relative">
        <button className="absolute top-4 right-4 text-white text-xl">&times;</button>
        <h3 className="text-lg font-bold mb-4">TELL US ABOUT YOUR NEEDS</h3>
        <p className="mb-6 text-sm">
          Just fill out the form or contact us via email or phone
        </p>
        <ul className="space-y-4 text-orange-400 text-sm">
          <li>
            📧 <a href="mailto:career@go-techsolution.com" className="underline">career@go-techsolution.com</a>
          </li>
          <li>
            📞 <a href="tel:+918769365375" className="underline">+91-8769365375</a>
          </li>
          <li>
            📍 515-517, 5th floor, Amrit Shree, University Road, Udaipur, Rajasthan 313001
          </li>
        </ul>
      </div>
    </div>


        </>
    )
}
export default Bookingcallform