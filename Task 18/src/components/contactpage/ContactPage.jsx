import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../styles/components/contactpage/contactpage.css'
export default function ContactPage() {
  return (
    <div>
      <div className="contact-menu">
        <ul>
          <li> <Link to="contactusform">Contact us Form</Link> </li>
          <li> <Link to="emails">Emails</Link> </li>
          <li> <Link to="locations">Locations</Link> </li>
          <li> <Link to="phone">Phone Number</Link> </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
