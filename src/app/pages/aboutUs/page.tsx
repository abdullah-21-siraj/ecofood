import ContactUs from "../contactUs/page";

function AboutUs() {
  return (
    <div className="bg-green-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-black bg-clip-text ">
          Welcome to EcoFood
        </h2>
        <p className="text-lg text-green-800 leading-relaxed mb-8">
          Your premier destination for fresh, sustainable produce delivered
          right to your doorstep. At EcoFood, we're passionate about providing
          you with the highest quality fruits and vegetables while prioritizing
          environmental responsibility and supporting local growers. Our journey
          began with a simple mission: to make healthy eating convenient and
          accessible for everyone while minimizing our ecological footprint. We
          believe that by choosing organic, locally sourced produce, we can
          promote a healthier lifestyle for both our customers and the planet.
        </p>
        <p className="text-lg text-green-800 leading-relaxed mb-8">
          What sets us apart is our commitment to sustainability at every step
          of the process. From working closely with farmers who employ
          eco-friendly practices to using minimal packaging to reduce waste, we
          strive to leave the smallest possible impact on the environment while
          delivering the freshest, most nutritious produce to your table. But
          EcoFood is more than just an online marketplace. We're a community of
          individuals dedicated to making positive changes in the way we eat and
          live. We invite you to join us on this journey towards a healthier,
          more sustainable future. Thank you for choosing EcoFood. Together, we
          can make a difference, one delicious bite at a time.
        </p>
        <h3 className="text-2xl font-semibold mb-4  bg-clip-text bg-black">
          Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-800">
              John Doe
            </h4>
            <p className="text-gray-700">Founder & CEO</p>
            <p className="text-gray-600 mt-2">
              John is passionate about sustainable agriculture and has been
              working in the industry for over a decade. He founded EcoFood with
              the vision of making healthy, environmentally-friendly produce
              accessible to all.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-800">
              Jane Smith
            </h4>
            <p className="text-gray-700">Head of Operations</p>
            <p className="text-gray-600 mt-2">
              Jane oversees the day-to-day operations at EcoFood, ensuring that
              everything runs smoothly from farm to doorstep. She's dedicated to
              efficiency and sustainability.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-green-800">
              Alex Johnson
            </h4>
            <p className="text-gray-700">Head of Marketing</p>
            <p className="text-gray-600 mt-2">
              Alex is responsible for spreading the word about EcoFood and
              engaging with our community. With a background in digital
              marketing, he's passionate about using technology for positive
              change.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default AboutUs;
