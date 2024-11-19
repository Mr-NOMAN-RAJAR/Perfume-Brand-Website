export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-center mb-8">
          Have questions or inquiries? Wed love to hear from you. Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
