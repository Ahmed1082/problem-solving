import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import AboutPage from './components/aboutpage/AboutPage';
import ServicePage from './components/servicepage/ServicePage';
import ContactPage from './components/contactpage/ContactPage';
import Emails from './components/emails/Emails';
import Locations from './components/locations/Locations';
import PhoneNumber from './components/phonenumber/PhoneNumber';
import ContactUsForm from './components/contactusform/ContactUsForm'; 
import NotFoundPage from './components/notfoundpage/NotFoundPage';

const routes = createBrowserRouter([{
    path: "/", element: <Navbar />, children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "service", element: <ServicePage /> },
      {
        path: "contact", element: <ContactPage />, children: [
          { path: "contactusform", element: <ContactUsForm /> },
          { path: "emails", element: <Emails /> },
          { path: "locations", element: <Locations /> },
          { path: "phone", element: <PhoneNumber /> }
        ]
      },
      { path: "*", element: <NotFoundPage /> }
    ]
}]);

export default function App() {
  return (
    <RouterProvider router={routes} />
  );
}
