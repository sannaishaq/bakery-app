function Contact() {
     console.log("hello")
  return (
    <>
       
        <div class="contactus">
            <p className='contactus'>
            We'd love to hear from you!
            Please feel free to reach out to us if you have any questions or 
            concerns about your orders.  
            </p>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOgOTBVZgIsPRGRnBJXW_AEVgVyD3iaZO3tfQQ1gWqsUBVcQ/viewform?embedded=true" 
            width="640" height="864" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>



            {/* <form method="POST"
              action="https://docs.google.com/forms/d/{YOUR_FORM_ID_HERE}/formResponse"
            >
                <input class="input" type="text" placeholder="Name" />
                <input class="input" type="email" placeholder="Email" />
                <input  class="input" type="text" placeholder="Message"/>
                <button class="button" type="submit" >
                  Submit
                </button>
            </form> */}
        </div>
  </>
   

  )
}
export default Contact

