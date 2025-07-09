import Footer from "./Footer";

export default function Contact()
{
    return(
        <>
            <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl">We’re here to help plan your perfect trip.</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">📍 Address:</span><br />
              123 Travel Lane, Wanderlust City, World 456789
            </li>
            <li>
              <span className="font-semibold">📞 Phone:</span><br />
              +1 234 567 8900
            </li>
            <li>
              <span className="font-semibold">✉️ Email:</span><br />
              contact@tourcompany.com
            </li>
            <li>
              <span className="font-semibold">🕒 Hours:</span><br />
              Mon - Sat: 9am – 6pm
            </li>
          </ul>
        </div>
      </section>
    </div>
    <Footer></Footer>
        </>
    )
}