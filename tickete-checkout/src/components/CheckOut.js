// CheckOut.js

import React from 'react';
import FrequentQuestions from './FrequentQuestions';
import '../css/CheckOut.css'; // Import the CSS file
import { Card } from 'react-bootstrap';

function CheckOut(props) {
  return (
    <div>
      <div className="heading-container">
        <p>Holding Your Tickets for 30:00</p>
      </div>
      <div className="section-container mt-5">
        <div className="column left-column">
          <div className="container">
            <div className="frame row">
              <div className="col-md-12">
                <div className="heading-section">
                  <div className="confirm-pay-text">Confirm & Pay</div>
                </div>

                {/* Additional content inside the frame */}
                <div className="info-section ">
                  <div className="info-section-text">
                    <div>
                      Free cancellation -
                      <i className="fas fa-check info-section-icon"></i>
                    </div>
                    <div style={{ color: '#60646C' }}>Tickets can be cancelled by 13th December, 2022.</div>
                  </div>
                  {/* Additional elements can be added as needed */}
                </div>
              </div>
            </div>
          </div>

          {/* New frame section below */}
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
                <span className="required-icon">*</span>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Country Code" required />
                  <span className="required-icon">*</span>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Phone Number" required />
                  <span className="required-icon">*</span>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Email" required />
                  <span className="required-icon">*</span>
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Confirm Email" required />
                  <span className="required-icon">*</span>
                </div>
              </div>
            </div>

          </div>

          <div className="container">
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
                    { /* Show required icon */}
                    <span className="required-icon">*</span>
                  </div>

                  <div className="col">
                    <select className="form-select" required>
                      <option value="" disabled selected>Select</option>
                      {/* Add your select options here */}
                    </select>
                    {/* Dropdown icon */}
                    <span className="bi bi-chevron-down dropdown-icon"></span>
                    {/* Show required icon */}
                    <span className="required-icon">*</span>
                  </div>

                </div>

                <div className="mb-3 position-relative">
                  <select className="form-select" required>
                    <option value="" disabled selected>Multiselect</option>
                    {/* Add your select options here */}
                  </select>
                  <span className="bi bi-chevron-down dropdown-icon"></span>
                  <span className="required-icon">*</span>
                </div>
              </div>

              <hr style={{ color: '#DDDDE3', border: '1px solid #DDDDE3' }} />
            </div>
          </div>

        </div>

        <div className="column right-column">
      <div className="row">
        <div className="inner-div">
          {/* Bootstrap Card */}
          <Card style={{ width: '352px', height: '476px', gap: '24px' }}>
            {/* Card Image */}
            <Card.Img variant="top" src="your-image-url.jpg" style={{ width: '352px', height: '198px' }} />

            {/* Card Body */}
            <Card.Body>
             <div style={{ width: '352px', height: '66px', gap: '2px' }}>
            
             <div className="star-rating" style={{ width: '352px', height: '20px', gap: '4px' }}>
  4.9 (4.5k). <span className="category"> {'<category>'} </span>
</div>

<Card.Title className="card-title">
  Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
</Card.Title>
             </div>
             <div className="listing-section">
  {/* List Items */}
  <ul className="list-unstyled">
  <li className="list-item">
    {typeof window !== 'undefined' && window.bootstrap
      ? <i className="bi bi-ticket ticket-icon"></i>
      : <i className="fas fa-ticket-alt ticket-icon"></i>
    }
    {'<ticket type - variant>'}
  </li>
  <li className="list-item">
    {typeof window !== 'undefined' && window.bootstrap
      ? <i className="bi bi-calendar date-icon"></i>
      : <i className="fas fa-calendar date-icon"></i>
    }
    <span className="date-content">{'<day>, <month> <date>'}</span>
  </li>
  <div style={{ width: '100%', height: '26px', padding: '8px 0px', display: 'flex', gap: '8px' }}>
    <span className="duration-value">Duration:{'<duration>'}</span>
  </div>
  <li className="list-item-3">
    {typeof window !== 'undefined' && window.bootstrap
      ? <i className="bi bi-clock clock-icon"></i>
      : <i className="fas fa-clock clock-icon"></i>
    }
    <div>
      <span className="time-values">{'<time>'}</span>
      <br />
      <span className="operating-hours">Operating Hours:{'<time> to <time>'}</span>
    </div>
  </li>
  <li className="last-list-item">
    {typeof window !== 'undefined' && window.bootstrap
      ? <i className="bi bi-person guest-icon"></i>
      : <i className="fas fa-user guest-icon"></i>
    }
    <span className="guest-text">5 guests</span>
  </li>
</ul>


</div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

      </div>
      CheckOut
      <FrequentQuestions />
    </div>
  );
}

export default CheckOut;
