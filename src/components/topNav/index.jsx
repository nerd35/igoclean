
 
 const Topnav = () => {
     return(
         <div className="py-3 d-none d-md-block topsection ms-auto border-bottom">
             <div className="container ms-auto">
                 <div className="top_inner_row ms-auto">
                    
                    <div className="contact_section">
                      <div  className="px-3 contact_div ">
                          <div><i class="far fa-envelope fa-2x icon-color me-2"></i></div>
                          <div >
                              <p className="mb-0 info_text">Igocleanservices@gmail.com</p>
                              <p className="info_title">Mail to us</p>
                          </div>
                      </div>
                      <div  className="px-3 contact_div ">
                      <i class="fas fa-phone-volume fa-2x icon-color me-2"></i>
                          <div >
                              <p className="mb-0 info_text">Call for help</p>
                              <p className="info_title">(+234) 808 609 7376 </p>
                          </div>
                      </div>
                      <div  className="px-3 contact_div ">
                          <div>
                      <i class="fas fa-clock fa-2x icon-color me-2"></i>

                          </div>
                          <div >
                              <p className="mb-0 info_text">Sunday - Saturday</p>
                              <p className="info_title">9am - 8pm</p>
                          </div>
                      </div>
                      <div  className="px-3 contact_div ">
                          <div>
                          <i class="fas fa-map-marker-alt icon-color me-2 fa-2x"></i></div>
                          <div >
                              <p className="mb-0 info_text"> 9, Emeru Street</p>
                              <p className="info_title"> Port Harcourt</p>
                          </div>
                      </div>
                    </div>
                 </div>
             </div>
         </div>
     )
 }

 export default Topnav