import React from "react";
import "/src/components/folioBody/foliBody.css";
import Profilepic from "/src/assets/profile-pic.png";

function folioBody() {
  return (
    <>
      <section className="container  home " id="home">
        <div className="switch">
          Dark Mode
          <span>OFF</span>
        </div>
        <div className=" maindiv  row  ">
          <div className="col  ">
            <div className="row">
              <div className="col">
                <h2>Mern Stack Developer</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>Muhammad Muddasir Javed</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  I am an enthusiastic web developer based in Lahore, Pakistan,
                  passionate about discovering new technologies and crafting
                  top-notch websites and applications for businesses and
                  end-users. I thrive on continuous learning and am dedicated to
                  creating innovative, high-quality digital solutions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className=" col socila_links">
                <ul className="d-flex justify-content-center align-items-center justify-content-lg-start mx-10px">
                  <li>
                    <a href="https://github.com/Muddasir92">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/muddasir92/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="row ">
              <div className="col">
                <img src={Profilepic} className="propic" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <section className="container mt-80">
        <h4 className="text-center about mt-4 " id="about">
          About
        </h4>
        <hr className="block block-light" />
        <div className="row">
          <div className=" col-sm-12 col-lg-6 shadow">
            <div className="card shadow m-3">
              <div className="card-body">
                <h4 className="cart-title text-center">
                  Hello This is M Muddasir
                </h4>
                <p className="card-text">
                  During August 2022, I decided to take a leap of faith and
                  trained to become a Mern Stack developer.
                </p>
                <p>
                  Now, a fully-pledged developer, there is nothing more I enjoy
                  than designing and developing cool websites.
                </p>
                <p>
                  Got a cool project in mind or looking to hire a developer? Get
                  in touch, and we can bring your idea to life.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-lg-6 shadow">
            <div className="card shadow m-3 about-height">
              <div className="card-body">
                <h4 className="card-title text-center">Personal Details</h4>
                <div className="row">
                  <div className="col-sm-5">
                    <p>
                      <strong>Contact</strong>
                    </p>
                  </div>
                  <div className="col-sm-7">
                    <p>+923228733898</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <p>
                      <strong>E-mail</strong>
                    </p>
                  </div>
                  <div className="col-sm-7">
                    <p>m.muddasirjaved@gmail.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <p>
                      <strong>Location</strong>
                    </p>
                  </div>
                  <div className="col-sm-7">
                    <p>Lahore,Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="container ">
        <h4 className="pt-4 text-center">Skills</h4>
        <hr className="block" />
        <div className="row">
          {/* Tech skills col left */}

          <div className="col-sm-12 col-lg-5 m-3 shadow tech-skills ">
            <p className="text-center h5 pt-2">Tech Skills</p>
            <hr className="block block-blue block-short" />
            <div className="col">
              <div className="mt-4 mb-1 ">
                <span>HTML</span>
                <span className="float-right"> 80%</span>
              </div>
              <div className="progress md-progress " style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow "
                  role="progressbar"
                  style={{ height: "20px", width: "80%" }}
                  aria-valuenow={"80"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                ></div>
              </div>
            </div>
            <div className="col">
              <div className="mt-4 mb-1">
                <span>CSS</span>
                <span className="float-right"> 70%</span>
              </div>
              <div className="progress md-prgrss" style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow"
                  role="progress"
                  style={{ height: "20px", width: "70%" }}
                  aria-valuemax={"100"}
                  aria-valuenow={"70"}
                  aria-valuemin={"0"}
                ></div>
              </div>
            </div>
            <div className="col">
              <div className="mt-4 mb-1">
                <span>BOOTSTRAP</span>
                <span className="float-right">65%</span>
              </div>
              <div className="progress md-progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow"
                  role="progress"
                  style={{ height: "20px", width: "65%" }}
                  aria-valuemax={"100"}
                  aria-valuemin={"0"}
                  aria-valuenow={"65"}
                ></div>
              </div>
            </div>
            <div className="col">
              <div className="mt-4 mb-1">
                <span>JAVASCRIPT</span>
                <span className="float-right">55%</span>
              </div>
              <div className="progress md-progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow"
                  role="progress"
                  style={{ height: "20px", width: "55%" }}
                  aria-valuemax={"100"}
                  aria-valuenow={"55"}
                  aria-valuemin={"0"}
                ></div>
              </div>
            </div>
            <div className="col">
              <div className="mt-4 mb-1">
                <span>REACT</span>
                <span className="float-right">55%</span>
              </div>
              <div className="progress md-progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow"
                  role="progress"
                  style={{ height: "20px", width: "55%" }}
                  aria-valuemax={"100"}
                  aria-valuemin={"0"}
                  aria-valuenow={"55"}
                ></div>
              </div>
            </div>
            <div className="col">
              <div className="mt-4  mb-1">
                <span>MONGODB</span>
                <span className="float-right"> 50%</span>
              </div>
              <div className="progress md-progress mb-4" style={{ height: "20px" }}>
                <div
                  className="progress-bar hvr-grow-shadow"
                  role="progress"
                  style={{ height: "20px", width: "50%" }}
                  aria-valuemax={"100"}
                  aria-valuemin={"0"}
                  aria-valuenow={"50"}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>

          <div className="col-sm-12 col-lg-5 m-3 shadow soft-skills ">
            <h4>Strength</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        id="footer"
        style={{ backgroundColor: "rgb(157, 103, 211) ", color: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 m-4">
              <h6 className="text-uppercase font-weight-bold step-title pt- ">
                about
              </h6>
              <p>
                Hello! I'm M Muddasir Javed, a dedicated web developer with a
                keen eye for creativity. I am passionate about learning new
                technologies to enhance my productivity and efficiency.
              </p>
            </div>
            <div className="footer-links col-sm-12 col-md-4">
              <h6 className="text-uppercase pt-4 font-weight-bold step-title">
                FIND ME ON SOCIAL MEDIA
              </h6>
              <p>Feel free to connect with me</p>

              <ul className="  d-flex align-items-center justify-content-lg-start mx-1px ">
                <li>
                  <a href="https://github.com/Muddasir92">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/muddasir92/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4"></div>
          </div>
        </div>
        <div className="footer-copyright text-center py-4 ">
          <p>© 2024 Copyright: Muhammad Muddasir Javed</p>
        </div>
      </footer>
    </>
  );
}

export default folioBody;
