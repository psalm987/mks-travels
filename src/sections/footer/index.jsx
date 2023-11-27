import Container from "../../components/Container";
import { APPS, FOOTER_MENU, SOCIAL_MEDIA } from "./constant";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="section">
        <Container className="footer-content">
          <div className="footer-column">
            <img src="/img/logo.svg" />
            <p className="small">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          {FOOTER_MENU.map(({ title, links }) => {
            return (
              <div className="footer-column" key={title}>
                <h3>{title}</h3>
                <ul>
                  {links.map((link) => (
                    <li key={link.title}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="footer-column">
            <div className="footer-column-social-holder">
              {SOCIAL_MEDIA.map(({ icon, linkUrl }, index) => (
                <a key={index} href={linkUrl}>
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
            <p className="large-text">Discover our app</p>
            <div className="footer-column-apps">
              {APPS.map(({ image, linkUrl }, index) => (
                <a href={linkUrl} key={index}>
                  <img src={image} alt="" width="100%" height="auto" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <div className="footer-copyright">
        <span>All rights reserved@mksstudios</span>
      </div>
    </div>
  );
};

export default Footer;
