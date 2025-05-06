function Formblue()
{
    return(
        <>
        <form>
        <div class="flex bg-blue-800">
                <div>
                <input type="text"
                 placeholder="Full Name *"
                 required
                 class=""
                 />
                
               <input type="email"
               placeholder="Email address"
               required
               class=""
               />

               

            </div>
            <div>
                <input type="Number"
                placeholder="Phone number (optional)"
                class=""
                />   

                <input type="text"
                placeholder="company name (optional)"
                class=""
                />      
            </div>

            <div>
                <textarea
                placeholder="How can we help you? *"
                maxLength="180"
                ></textarea>
            </div>
            
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded w-full"
          >
            SEND
          </button>
            
        </div>
        </form>
        </>
    )
}
export default Formblue