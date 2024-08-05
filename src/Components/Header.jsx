import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="header">
      <nav className="navbar navbar-expand-lg container-0001 tw-w-screen text-px tw-fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
            ><img
              src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/branding/wave-logo.svg"
              alt=""
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-font-extrabold">
              <li className="nav-item tw-text-blue-800">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="tw-text-gray-600 tw-body-font container tw-pt-20 con-1">
        <div
          className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-2 md:tw-flex-row tw-flex-col tw-items-center "
        >
          <div
            className="lg:tw-flex-grow md:tw-w-1/2 lg:tw-pr-24 md:tw-pr-16 tw-flex tw-flex-col md:tw-items-start md:tw-text-left tw-mb-16 md:tw-mb-0 tw-items-center tw-text-center"
          >
            <h1
              className="tw-title-font sm:tw-text-4xl tw-text-3xl tw-mb-4 tw-font-6xl tw-font-bold tw-text-gray-900"
            >
              We provide easy

              <br className="tw-hidden lg:tw-inline-block" />
              <span className="linear-g bgcolor">solutions</span> for startups <br />
              results
              at affordable rates.
            </h1>
            <p className="tw-mb-8 tw-leading-relaxed">
              Our methods are straight, comfortable, and established to ensure
              evolution and acceleration.
            </p>
            <div className="tw-flex tw-justify-center">
              <button
                className="tw-inline-flex tw-text-white tw-bg-blue-800 tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none tw-rounded-3xl tw-text-lg"
              >
                Free Consultation
              </button>
              <button
                className="custom-btn tw-inline-flex hover:tw-text-white tw-duration-100 hover:tw-bg-blue-800 tw-bg-transparent tw-text-blue-800 tw-border-blue-700 tw-border-2 hover:tw-duration-500 tw-py-2 tw-px-6 focus:tw-outline-none tw-rounded-3xl tw-text-lg tw-mx-3"
              >
                Buy Credits
              </button>
            </div>
          </div>
          <div className="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-full">
            <img
              className="tw-object-cover tw-object-center img-header mt-5"
              alt="hero"
              src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/hero/hero-home.jpg"
            />
          </div>
        </div>
      </section>
    </header>
    </div>
  )
}

export default Header