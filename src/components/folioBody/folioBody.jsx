import React from "react";
import "/src/components/folioBody/foliBody.css";
import Profilepic from "/src/assets/profile-pic.png";
import CVformat from "/src/assets/cvformat.pdf";

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
      {/* hello  */}
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
              <div
                className="progress md-progress mb-4"
                style={{ height: "20px" }}
              >
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
            <div class="col">
              <div class="svg-item hvr-bob">
                <svg
                  width="100%"
                  height="100%"
                  viewbox="0 0 40 40"
                  class="donut"
                >
                  <circle
                    class="donut-hole"
                    cx="20"
                    cy="20"
                    r="15.91549430918954"
                    fill="#fff"
                  ></circle>
                  <circle
                    class="donut-ring"
                    cx="20"
                    cy="20"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke-width="6"
                  ></circle>
                  <circle
                    class="donut-segment"
                    cx="20"
                    cy="20"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke-width="6"
                    stroke-dasharray="80 20"
                    stroke-dashoffset="25"
                  ></circle>
                  <g class="donut-text">
                    <text y="51%" transform="translate(0, 2)">
                      <tspan x="54%" text-anchor="middle" class="donut-percent">
                        80%
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <p class="text-center skill-title">Problem-solving skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container  mt-3 " id="education">
        <h4 className="h4 text-center pt-4 ">Education</h4>
        <hr className="block" />
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col">
                {/* Education timeline start */}
                <ul className="timeline">
                  <li className="timeline-item">
                    <div className="timeline-arrow"></div>
                    {/* card start */}
                    <div
                      className="card text-white mb-4 shadow  "
                      style={{ backgroundColor: "rgb(157, 103, 211)" }}
                    >
                      <div className="card-header">
                        <h6>University of Education Township , Lahore</h6>
                        <p className="mt-2 mb-0 smal"> 2020 - 2024</p>
                      </div>
                      <div className="card-body timeline-post">
                        <h5>BS Information Technology</h5>
                        <ul>
                          <li className="card-text">
                            During my study I have learned diffrent Technologies
                            <ul>
                              <li className="card-text">HTML</li>

                              <li className="card-text">CSS</li>
                            </ul>
                          </li>
                        </ul>
                        <div className="dots"></div>
                        <ul className="more">
                          <li className="style-none">
                            <ul>
                              <li className="card-text">BOOTSTRAP</li>
                              <li className="card-text">JAVASCRIPT</li>
                              <li className="card-text">REACT JS</li>
                              <li className="card-text">MONGODB</li>
                            </ul>
                          </li>
                        </ul>
                        <div className="read btn">read more</div>
                      </div>
                    </div>
                  </li>

                  {/* university end */}

                  <li className="timeline-item">
                    <div className="timeline-arrow"></div>
                    <div
                      className="card text-white mt-4 shadow"
                      style={{ backgroundColor: "rgb(157, 103, 211)" }}
                    >
                      <div className="card-header">
                        <h6> Abaidullah Gropu of Colleges , Okara</h6>
                        <p className="mt-2 mb-0 small">2018-2020</p>
                      </div>
                      <div className="card-body timeline-post">
                        <h5>Intermediate in Computer Science</h5>
                        <ul>
                          <li className="card-text m-3 ">
                            During my Intermediate education in Computer
                            Science, I explored various technological fields
                            and, with guidance from my teachers and friends,
                            decided to pursue a career in IT.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* college  */}
                  {/* Now High School */}
                  <li className="timeline-item">
                    <div className="timeline-arrow"></div>
                    <div
                      className="card mt-4 text-white shadow"
                      style={{ backgroundColor: "rgb(157, 103, 211)" }}
                    >
                      <div className="card-header">
                        <h6>Govt High School No.1 Haveli-Lakha , Okara</h6>
                        <p className="mt-2 mb-0 small">2016-1018</p>
                      </div>
                      <div className="card-body timeline-post">
                        <h5>Matric With Math-Physics</h5>
                        <ul>
                          <li className="card-text">
                            During my Matriculation, where I focused on Math and
                            Physics, I delved into different technological
                            areas. After thoughtful consideration and advice
                            from my teachers and friends, I chose to pursue a
                            career in IT.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
            <div className="col-sm-12 col-md-4 ">
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
            <div className="col-sm-12 col-md-4">
              <h1>Hello</h1>
            </div>
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
