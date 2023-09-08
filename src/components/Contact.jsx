import React from 'react';
import { Link, Grid } from '@mui/material';

const Contact = () => {
  const links = [
    {
      title: 'Github',
      url: 'https://github.com/ambermorris97'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/ambermorris97'
    },
    {
      title: 'Resume',
      url: 'static/documents/amber_morris_swe_resume.pdf'
    }
  ]

  return (
    <div className="contact-section" name="contact">
      <h1>Open to full stack engineering opportunities</h1>
      <section className="links">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_black"
              rel="noopener">
              {link.title}</Link>
          ))}
        </section>
        <p>{'[ '}ambermorris1997@gmail.com{' ]'}</p>
    </div>
  );
}

export default Contact;