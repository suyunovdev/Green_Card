const About = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission, values, and the team behind Green Card
            application services. We are committed to providing the best
            guidance for your journey to success.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              John Doe
            </h3>
            <p className="text-center text-gray-600">CEO & Founder</p>
            <p className="text-gray-500 mt-2 leading-relaxed text-justify">
              John is the visionary behind the Green Card services platform. He
              has over 10 years of experience in the immigration industry.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Jane Smith
            </h3>
            <p className="text-center text-gray-600">Chief Operating Officer</p>
            <p className="text-gray-500 mt-2 leading-relaxed text-justify">
              Jane oversees all operations and ensures everything runs smoothly.
              Her expertise in management is invaluable to the success of our
              platform.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Michael Brown
            </h3>
            <p className="text-center text-gray-600">Head of Support</p>
            <p className="text-gray-500 mt-2 leading-relaxed text-justify">
              Michael leads our customer support team, ensuring that all your
              queries are resolved promptly and efficiently.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Our mission is to help aspiring immigrants successfully navigate the
            Green Card application process by offering expert advice, innovative
            tools, and a user-friendly platform. We are dedicated to making your
            dreams a reality.
          </p>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest standards of integrity in all of our
                actions and ensure transparency throughout the entire process.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every aspect of our service, from
                providing expert guidance to offering a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
