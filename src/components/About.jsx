import Footer from './Footer';
export default function About()
{
    return(
        <>
            <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the World with Us</h1>
          <p className="text-lg md:text-xl">Curated tours, unforgettable moments, trusted by thousands.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We are a travel company driven by passion and powered by experience. From dreamy destinations to thrilling
          adventures, we provide seamless and personalized travel experiences that turn your journey into memories.
        </p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Foundation</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: '🌍 Mission',
                text: 'To deliver meaningful and hassle-free travel experiences with care and creativity.',
              },
              {
                title: '🔭 Vision',
                text: 'To be a global leader in ethical and immersive tourism.',
              },
              {
                title: '❤️ Values',
                text: 'Trust, culture, safety, and customer happiness come first in every trip we plan.',
              },
            ].map((item) => (
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
          {[
            {
              icon: '🛡️',
              title: 'Reliable & Safe',
              desc: 'We ensure every trip is safe, secure, and worry-free.',
            },
            {
              icon: '🌐',
              title: 'Global Reach',
              desc: 'Our tours span continents, cultures, and experiences.',
            },
            {
              icon: '📞',
              title: '24/7 Support',
              desc: 'We’re always just a call away, anytime, anywhere.',
            },
          ].map((item) => (
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
          <Footer></Footer>
        </>
    )
}