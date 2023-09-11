import React from 'react';

function Footer() {
  const phoneNumber = '7013084959'; // Replace with your WhatsApp phone number

  return (
    <footer style={footerStyle}>
      <div style={contactInfoStyle}>
        <h3>Contact Information</h3>
        <p>Email: uni.unifrom@gmail.com </p>
        <p>Phone: {phoneNumber}</p>
        <p>One Town, Vijayawada, Andhra Pradesh
</p>
        <p>
          WhatsApp: <a href={`https://wa.me/${phoneNumber}`}>Send a message</a>
        </p>
        <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} UNI. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

const contactInfoStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

export default Footer;
