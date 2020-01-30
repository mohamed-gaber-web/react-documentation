import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/home.page';
import AboutPage from '../pages/Aboutus/About.page';
import ContactPage from '../pages/Contactus/Contact.page';
import ServicesPage from '../pages/Services/Service.page';

export const RoutePage = () => { 

    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    );

}
