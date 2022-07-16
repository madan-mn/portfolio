import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { skills } from "./utils/skills";
import Icon from "./common/Icon";
import { Row, Col } from "reactstrap";

const Home2 = () => {
  const typedRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I'm a Business Development Manager",
        "I'm an expertise Digital Marketer",
        "I'm capable in Graphic Planning",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="page-wraper">
      <div className="responsive-nav">
        <Icon
          icon="fa-bars"
          size="xs"
          id="menu-toggle"
          onClick={() => setOpenNav((prev) => !prev.openNav)}
        ></Icon>
        <div id="menu" className={`menu ${openNav ? "open" : ""}`}>
          <Icon
            className="fa fa-times"
            icon="fa-times"
            id="menu-close"
            onClick={() => setOpenNav(false)}
          ></Icon>
          <div className="container">
            <div className="image">
              <a href="/#">
                <img src={require("./images/profile.png")} alt="Madan M N" />
              </a>
            </div>
            <div className="author-content">
              <h4>Madan M N</h4>
              <span ref={typedRef}></span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li>
                  <a href="#section1">About Me</a>
                </li>
                <li>
                  <a href="#section2">What I’m good at</a>
                </li>
                <li>
                  <a href="#section3">My Certifications</a>
                </li>
                <li>
                  <a href="#section4">My Work</a>
                </li>
                <li>
                  <a href="#section5">My Education</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="section about-me" id="section1">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <div className="line-dec"></div>
            <span>
              Experienced in Branding & Promotion, Business Development, Skilled
              in Digital Marketing, SEO, SMM, WordPress, UI/UX & Market
              Planning, B2B Marketing, and Client Relations. A strong enterprise
              improvement professional with a Master of Business Administration
              - MBA in Marketing
            </span>
            <div className="contact-info">
              <Row>
                <Col>
                  {" "}
                  <Icon icon="phone" />
                  <br />
                  +91 7019081685
                </Col>
                <Col>
                  <Icon icon="envelope" />
                  <br />
                  <a href="mailto:madan.mn@yahoo.com">madan.mn@yahoo.com</a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Icon icon="map-marker-alt" />
                  <br />
                  Bengaluru
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/in/madanmn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text"
                  >
                    <Icon
                      icon={["fab", "linkedin-in"]}
                      color="#0a66c2"
                      style={{ marginRight: 5 }}
                    />
                    <br />
                    LinkedIn
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Col>
                    <a
                      href="https://api.whatsapp.com/send?phone=917019081685&text=Hi%20Madan%20MN%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text"
                    >
                      <Icon
                        icon={["fab", "whatsapp"]}
                        color="#25D366"
                        style={{ marginRight: 5 }}
                      />
                      <br />
                      WhatsApp
                    </a>
                  </Col>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      <section className="section my-skills" id="section2">
        <div className="container">
          <div className="section-heading">
            <h2>What I’m good at?</h2>
            <div className="line-dec"></div>
            <div className="skills">
              {Object.entries(skills).map(([key, value], i) => {
                return (
                  <React.Fragment key={key}>
                    <div>
                      {value.map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section my-certifications" id="section3">
        <div className="container">
          <div className="section-heading">
            <h2>My Certifications</h2>
            <div className="line-dec"></div>
            <div>
              <ul>
                <li>
                  {" "}
                  <a
                    target={"_blank"}
                    href="https://drive.google.com/file/d/1ycVmjot6BgYD9iwReJw85_9ggxJyj0P4/view"
                    rel="noopener noreferrer"
                  >
                    Digital Markeitng Academy 360
                    <Icon icon="external-link-alt" size="sm" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1nVIKL4e15k-GoMmrOvA8f2K-tvE1r_J0/view"
                  >
                    The Fundamentals of Digital Marketing
                    <Icon icon="external-link-alt" size="sm" />
                  </a>{" "}
                  - <em>Issuing authority Google</em>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href="https://www.emarketinginstitute.org/certificate/online-marketing-course-and-certification-free-madan-mn/"
                  >
                    Online Marketing Fundamentals
                    <Icon icon="external-link-alt" size="sm" />
                  </a>{" "}
                  - <em>Issuing authority eMarketing Institute</em>
                </li>
                <li>
                  {" "}
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href="https://www.emarketinginstitute.org/certificate/e-commerce-course-and-certification-free-madan-mn/"
                  >
                    E-Commerce
                    <Icon icon="external-link-alt" size="sm" />
                  </a>{" "}
                  - <em>Issuing authority eMarketing Institute</em>
                </li>
                <li>
                  {" "}
                  Retail operation - <em>Issuing authority Landmark Group</em>
                </li>
                <li>
                  {" "}
                  Supply chain management -{" "}
                  <em>
                    Issuing authority Indian Institute of Materials Management
                  </em>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section my-work" id="section4">
        <div className="container">
          <div className="section-heading">
            <h2>My Work</h2>
            <div className="line-dec"></div>
            <div className="section-content">
              <div>
                <h6>Branding Associate - QSpiders</h6>
                <h6>Aug 2021-Present</h6>
              </div>
              <div>
                <p>
                  QSpiders (Unit of Test Yantra Software Solutions (India) Pvt
                  Ltd) is a best-in-class learning solutions organization
                  headquartered in India’s IT capital, Bangalore. We offer a
                  wide range of courses in the area of software testing and are
                  official partners of the ISTQB®.
                </p>
                <ul>
                  <li>
                    Measure and report on the success of marketing campaigns.
                  </li>
                  <li>Lead marketing team members through campaigns</li>
                  <li>
                    Build, plan and implement the overall digital marketing
                    strategy
                  </li>
                  <li>
                    Preparing accurate reports on our marketing campaign’s
                    overall performance.
                  </li>
                  <li>
                    Develop UI mockups and prototypes that clearly illustrate
                    how sites function and look like
                  </li>
                  <li>
                    Design graphic user interface elements, like menus, tabs and
                    widgets (XD, PS, AI, Figma)
                  </li>
                  <li>
                    Develop UI mockups and prototypes that clearly illustrate
                    how sites function and look like{" "}
                  </li>
                  <li>Graphic designing (with PS,PR,Filmora,Figma,XD,AI)</li>
                  <li>
                    Plan, execute, and measure experiments and conversion tests
                  </li>
                  <li>
                    Measure and report performance of all digital marketing
                    campaigns, and assess against goals (ROI and KPIs)
                  </li>
                  <li>
                    Coordinating with advertising and media experts to improve
                    marketing results.
                  </li>
                  <li>
                    Working with your team to brainstorm new and innovative
                    growth strategies.
                  </li>
                  <li>
                    Identifying the latest trends and technologies affecting our
                    industry
                  </li>
                </ul>
              </div>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div>
                <h6>Assistant Manager - Kotak Securities Ltd. </h6>
                <h6>Dec 2019 - Sep 2020</h6>
              </div>
              <div>
                <p>
                  Kotak Protections is one of the main stock broking
                  organizations in India and an auxiliary of Kotak Mahindra Bank
                  Restricted - an eminent private-area bank. As a stock broking
                  organization, Kotak Protections brings to you over 25 years of
                  involvement with serving a different client base of retail and
                  institutional financial specialists.
                </p>
                <ul>
                  <li>
                    Leverage a deep knowledge and understanding of the banking
                    industry and work in conjunction with assigned account teams
                  </li>
                  <li>
                    D-emergence Account enactment on field ,Demonstrate the item
                    how to utilize and Trade by physical and on the web
                  </li>
                  <li>Willingness to transfer knowledge amongst the team</li>
                  <li>
                    Good communication skills, ability to work both
                    independently and collaboratively, demonstrate initiative
                  </li>
                  <li>
                    Contribute to the method of information base improvement
                    across varied analytic and information tools
                  </li>
                  <li>
                    Multitasking skills, ability to manage competing deadlines
                  </li>
                  <li>
                    Develop and build strong relationships with internal
                    customers
                  </li>
                </ul>
              </div>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <div>
                <h6>
                  Business Development- Client Engagement - TestYantra Software
                  Solutions{" "}
                </h6>
                <h6>Feb 2018- Oct 2019</h6>
              </div>
              <div>
                <p>
                  Test Yantra India's largest Testing Services and Training
                  Organization with its presence across globe. Service Catalog:
                  Managed QA Services. Crowd Testi SkillRary is a Research &
                  Development software service provider company, which develops
                  innovative and creative information technology solutions for
                  your corporate needs. InlineJobs inlinejobs is a worldwide
                  online community, which provides a platform for both job
                  seeker as well as to the employer to fulfill their needs.
                </p>
                <ul>
                  <li>Manage acquisition and revenue growth</li>
                  <li>
                    To generate quality leads through cold calling, up-selling &
                    e-mail campaigning, etc. that result in sales.
                  </li>
                  <li>
                    To respond and effectively manage all of my company assigned
                    leads while managing a sales pipeline to achieve sales
                    targets on a monthly and quarterly basis.
                  </li>
                  <li>
                    Perform web-based research to develop new sales lead
                    information and monitor the competitive environment
                    providing management with feedback
                  </li>
                  <li>
                    Work with fellow teams to provide pre/post-sales support –
                    Worked with the sales team to design, propose, and close new
                    deals/opportunities with customers
                  </li>
                  <li>
                    Involved in various campaigns, creating strategic plans for
                    lead generation, preparing calling Script
                  </li>
                </ul>
              </div>
              <div className="section-divider"></div>
            </div>

            <div className="section-content">
              <div>
                <h6>
                  Assistant Manager in Business Development - Handiman Services
                  Ltd
                </h6>
                <h6>Aug 2017－Dec 2017</h6>
              </div>
              <div>
                <ul>
                  <li>
                    Handiman is a renowned professional facility management
                    company in Bangalore, India. We provide best-in-class
                    facility management services to corporate
                  </li>
                  <li> It is completely B2B deals End to conclusion taking</li>
                  <li>
                    After extend Maintaining client relationship for Long Term,
                    Conduct investigate to Distinguish modern markets and client
                    needs
                  </li>
                  <li>
                    Arrange trade gatherings with imminent clients, Arrange
                    commerce gatherings with planned clients Keep records of
                    deals, income, solicitations etc
                  </li>
                  <li>
                    Build long-term connections with modern and existing
                    client’s ans also Develop section level staff Into important
                    sales representatives as well as developing development
                    techniques and plans Identifying and mapping trade qualities
                    and client needs.
                  </li>
                </ul>
              </div>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section my-education" id="section5">
        <div className="container">
          <div className="section-heading">
            <h2>My Education</h2>
            <div className="line-dec"></div>
            <div>
              <div className="edu-info">
                <h6>MBA PGPM: Marketing</h6>
                <h6>Jun 2017</h6>
              </div>
              <div>
                <p>National School of Business Management (NSB), Bangalore</p>
                <p>Bharathiar University, Coimbatore</p>
              </div>
            </div>
            <div>
              <div className="edu-info">
                <h6>Bachelor of Commerce: Taxation</h6>
                <h6>Jan 2014</h6>
              </div>
              <div>
                <p>D Banumaiah's College of Commerce and Arts, Mysore</p>
                <p>University of Mysore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home2;
