// CheckOut.js

import React from 'react';
import FrequentQuestions from './FrequentQuestions';
import '../css/CheckOut.css'; // Import the CSS file
import Cards from './Cards';
import TotalPayable from './TotalPayable';

function CheckOut(props) {
  return (
    <div>
      <div className="heading-container">
        <p>Holding Your Tickets for 30:00</p>
      </div>
      
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="frame">
              <div className="heading-section">
                <div className="confirm-pay-text">Confirm & Pay</div>
              </div>

              <div className="info-section ">
                <div className="info-section-text">
                  <div>
                    Free cancellation -
                    <i className="fas fa-check info-section-icon"></i>
                  </div>
                  <div style={{ color: '#60646C' }}>Tickets can be cancelled by 13th December, 2022.</div>
                </div>
              </div>

              <div className="details-frame">
                <div className='details-heading-div'>
                  <div className='details-heading'>
                    Enter your details
                    <p className='details-para'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
                  </div>
                </div>

                <div className="details-form">
                  <div className="mb-3 position-relative">
                    <input type="text" className="form-control" placeholder="Full Name" required />
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Country Code" required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Phone Number" required />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Confirm Email" required />
                    </div>
                  </div>
                </div>

              </div>

              <div className="details-frame">
                <div className='details-heading-div'>
                  <div className='details-heading'>
                    Additional information
                    <p className='details-para'>We need a few more details to complete your reservation.</p>
                  </div>
                </div>
                <div className="details-form">

                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="labelInput"
                        placeholder="label Input"
                        required
                      />
                    </div>

                    <div className="col">
                      <select className="form-select" required>
                        <option value="" disabled selected>Select</option>
                        {/* Add your select options here */}
                      </select>
                      <span className="bi bi-chevron-down dropdown-icon"></span>
                    </div>

                  </div>

                  <div className="mb-3 position-relative">
                    <select className="form-select" required>
                      <option value="" disabled selected>Multiselect</option>
                      {/* Add your select options here */}
                    </select>
                    <span className="bi bi-chevron-down dropdown-icon"></span>
                  </div>

                </div>

                <hr style={{ color: '#DDDDE3', border: '1px solid #DDDDE3' }} />
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="right-column">
              <Cards />
              <TotalPayable/>
            </div>
          </div>
        </div>
      </div>

      <FrequentQuestions />
    </div>
  );
}

export default CheckOut;
