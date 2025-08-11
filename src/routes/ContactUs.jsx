import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="px-6 py-12 md:px-20 max-w-8xl mx-auto mt-20">
      <h2 className="text-3xl text-[#2e5c84] font-semibold text-center mb-2">
        Get In <span className="text-orange-500">Touch</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Ready to transform your business? Let's discuss your project and see how
        we can help you achieve your goals.
      </p>

      <div className="grid md:grid-cols-3 gap-8 bg-white rounded-xl shadow-md p-8">
        {/* Left - Form. */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message *</label>
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#2e5c84] hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition cursor-pointer text-white px-6 py-2 rounded-md w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

          <div className="flex items-start gap-3">
            <MapPin className="text-[#2e5c84] mt-1" />
            <div>
              <p className="font-medium">Office Address</p>
              <p className="text-sm text-gray-600">
                9th floor, Anaya Chambers, GN 38/5, GN Block, <br />
                Sector V, Bidhannagar, Kolkata, West Bengal 700091
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-[#2e5c84] mt-1" />
            <div>
              <p className="font-medium">Phone Number</p>
              <p className="text-sm text-gray-600">+91 8910363873</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-[#2e5c84] mt-1" />
            <div>
              <p className="font-medium">Email Address</p>
              <p className="text-sm text-gray-600">support@citechspl.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-[#2e5c84] mt-1" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-sm text-gray-600">
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat: 10:00 AM - 1:00 PM
              </p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.284145267731!2d88.4279388561845!3d22.57159557231358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753c09b3d761%3A0x3bd4a468664195cf!2sEasy%20Daftar!5e1!3m2!1sen!2sin!4v1749451982055!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ci-tech Office Location"
            className="w-full h-72 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
