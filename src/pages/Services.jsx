const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Services Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-600">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          We offer a wide range of services to help you successfully apply for
          your Green Card.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 1"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">Eligibility Check</h2>
              <p className="text-gray-600 mb-6">
                Find out if you qualify for the Green Card by completing our
                free eligibility check.
              </p>
              <a
                href="#eligibility"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 2"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">
                Application Assistance
              </h2>
              <p className="text-gray-600 mb-6">
                Get expert help with filling out and submitting your Green Card
                application.
              </p>
              <a
                href="#application"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 3"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">
                Green Card Interview Prep
              </h2>
              <p className="text-gray-600 mb-6">
                Prepare for your Green Card interview with expert advice and
                mock interviews.
              </p>
              <a
                href="#interview-prep"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 4"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">Legal Support</h2>
              <p className="text-gray-600 mb-6">
                Get professional legal support to guide you through every step
                of the Green Card process.
              </p>
              <a
                href="#legal-support"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 5"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">Document Review</h2>
              <p className="text-gray-600 mb-6">
                Ensure all of your documents are complete and accurate before
                submission.
              </p>
              <a
                href="#document-review"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service 6"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">Ongoing Support</h2>
              <p className="text-gray-600 mb-6">
                Receive ongoing support after submission to ensure you stay
                informed every step of the way.
              </p>
              <a
                href="#ongoing-support"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
