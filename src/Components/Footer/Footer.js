import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Sciene and Fictions" , link: "/emergency"},
        {name: "English Grammar and Spoken" , link: "/personal-treatment"},
        {name: "Mathematics" , link: "/tooth-extract"},
    ]
    const ourAddress = [
        {name: "Hamjarbag, Muradpur Ctg" , link: "//google.com/map"},
        {name: "Oxygen" , link: "//google.com/map"},
       
    ]
    const extraCare = [
        {name: "Emergency Help For Students" , link: "/emergency"},
        {name: "Homework Catch Up" , link: "/checkup"},
        {name: "Always Keeps You In Touch" , link: "/personal-treatment"},
        {name: "Handwriting Training" , link: "/tooth-extract"},
    ]
    const services = [
        {name: "New Mathematics" , link: "/emergency"},
        {name: "Modern scienece" , link: "/checkup"},
        {name: "Everyday Live Class" , link: "/personal-treatment"},
        {name: "One to One Meet" , link: "/tooth-extract"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle='Education' menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Extra Care" menuItems={extraCare}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p style={{fontFamily: "Goergia", color: 'dimgray'}} className="pb-2">Copyright {(new Date()).getFullYear()} All Rights Reserved, Joynal Abedin</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;