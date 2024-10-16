const Home = () => {
  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Your Journey to the American Dream Starts Here
          </h1>
          <p className="text-lg mb-8">
            Apply for a Green Card with expert guidance and increase your
            chances of success. Start your new life in the United States.
          </p>
          <a
            href="#apply"
            className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all">
              <div className="text-green-600 text-5xl mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-2">Eligibility Check</h3>
              <p className="text-gray-600">
                Complete a free eligibility check to see if you qualify for a
                Green Card.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all">
              <div className="text-green-600 text-5xl mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-2">
                Submit Application
              </h3>
              <p className="text-gray-600">
                Submit your Green Card application with the help of our experts.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all">
              <div className="text-green-600 text-5xl mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-2">Get Approved</h3>
              <p className="text-gray-600">
                After approval, receive your Green Card and begin your new life
                in the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Expert Guidance"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-2xl font-semibold">Expert Guidance</h3>
              <p className="text-gray-600 mt-4">
                Our team of experts has years of experience in helping people
                successfully apply for Green Cards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Success Rate"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-2xl font-semibold">High Success Rate</h3>
              <p className="text-gray-600 mt-4">
                Our clients benefit from a high success rate due to our
                streamlined process and expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="apply"
        className="bg-green-600 text-white py-16 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
        <p className="text-lg mb-8">
          Start your Green Card application today with our expert support.
        </p>
        <a
          href="#apply-now"
          className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default Home;
