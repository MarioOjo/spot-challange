import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS



function ServicesPage() {
  return (
    <div>
      

      <div className="container my-5">
        <div className="hero-text mb-5">
          <h2>Our Comprehensive Handyman Services</h2>
          <h5>Professional solutions for all your home maintenance and repair needs</h5>
        </div>

        {/* Electrical Faults */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="../assets/electrical.jpeg" alt="Electrical Services" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Electrical Faults</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h5><strong>Wiring Repairs</strong></h5>
                <p>Fixing faulty wiring, replacing damaged cables, and ensuring your electrical system is safe and up to code.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Breaker Replacements</strong></h5>
                <p>Upgrading and replacing circuit breakers to prevent electrical overloads and hazards.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Outlet & Switch Repairs</strong></h5>
                <p>Fixing faulty outlets, installing GFCI outlets, and repairing light switches.</p>
              </li>
              <li>
                <h5><strong>Lighting Installation</strong></h5>
                <p>Installing new light fixtures, ceiling fans, and troubleshooting lighting issues.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Plumbing Services */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="../assets/plumbing.jpeg" alt="Plumbing Services" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Plumbing Services</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h5><strong>Leak Repairs</strong></h5>
                <p>Locating and fixing pipe leaks to prevent water damage and reduce water bills.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Faucet Installation</strong></h5>
                <p>Installing and repairing kitchen and bathroom faucets for optimal performance.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Drain Unclogging</strong></h5>
                <p>Clearing blocked drains in sinks, showers, and toilets using professional tools.</p>
              </li>
              <li>
                <h5><strong>Water Heater Maintenance</strong></h5>
                <p>Flushing, repairing, and maintaining water heaters for efficiency and longevity.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Faulty Home Equipment */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="../assets/appliances.jpeg" alt="Appliance Repairs" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Faulty Home Equipment</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h5><strong>Appliance Repairs</strong></h5>
                <p>Fixing washing machines, dryers, dishwashers, and other major appliances.</p>
              </li>
              <li className="mb-3">
                <h5><strong>HVAC Maintenance</strong></h5>
                <p>Servicing air conditioners, furnaces, and ventilation systems.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Kitchen Equipment</strong></h5>
                <p>Repairing stoves, ovens, microwaves, and garbage disposals.</p>
              </li>
              <li>
                <h5><strong>Electronic Repairs</strong></h5>
                <p>Troubleshooting and fixing TVs, sound systems, and other electronics.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* General Handyman Activities */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="../assets/general.jpeg" alt="General Handyman Services" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">General Handyman Activities</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h5><strong>Furniture Assembly</strong></h5>
                <p>Professional assembly of beds, cabinets, shelves, and other furniture.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Painting Services</strong></h5>
                <p>Interior and exterior painting with proper preparation and finishing.</p>
              </li>
              <li className="mb-3">
                <h5><strong>Drywall Repairs</strong></h5>
                <p>Patching holes, fixing cracks, and smoothing walls for perfect finishes.</p>
              </li>
              <li>
                <h5><strong>TV Mounting</strong></h5>
                <p>Secure mounting of TVs on walls with proper cable management.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Services Section */}
        <div className="text-center py-5 mb-4" style={{ backgroundColor: 'rgba(41, 41, 41, 0.8)', borderRadius: '10px' }}>
          <h2 className="mb-4">24/7 Emergency Services</h2>
          <p className="lead mb-4">We understand that some problems can't wait. That's why we offer emergency services for:</p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="p-3" style={{ backgroundColor: 'rgba(255, 163, 26, 0.2)', borderRadius: '5px' }}>
                <h5>Electrical Emergencies</h5>
                <p>Power outages, sparking outlets, and other hazardous situations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3" style={{ backgroundColor: 'rgba(255, 163, 26, 0.2)', borderRadius: '5px' }}>
                <h5>Plumbing Emergencies</h5>
                <p>Major leaks, clogged toilets, and burst pipes</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3" style={{ backgroundColor: 'rgba(255, 163, 26, 0.2)', borderRadius: '5px' }}>
                <h5>Appliance Failures</h5>
                <p>Sudden failures of your essential appliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center" style={{ backgroundColor: '#2a2a2a' }}>
        <p className="text-white">© 2025 HandyMen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ServicesPage;
