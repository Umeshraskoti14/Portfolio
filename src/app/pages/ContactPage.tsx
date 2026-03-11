import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with pre-filled message
    const whatsappNumber = '9779867233437'; // +977 9867233437
    const message = `Hello Umesh, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's collaborate on creating positive social impact. Reach out for opportunities, 
            projects, or just to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to contact me through any of the methods below. I typically respond 
              within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'umeshraskoti14@gmail.com', color: 'bg-gradient-to-br from-purple-500 to-purple-600' },
                { icon: Phone, label: 'Phone', value: '+977 9867233437', color: 'bg-gradient-to-br from-pink-500 to-pink-600' },
                { icon: MapPin, label: 'Location', value: 'Suryabinayak, Bhaktapur 44800', color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
                  { name: 'Gmail', icon: Mail, href: 'mailto:umeshraskoti14@gmail.com', color: 'hover:bg-red-600' },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-white ${platform.color} hover:border-transparent transition-all shadow-lg`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <platform.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
                  placeholder="Tell me about your project or inquiry..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send via WhatsApp
                <MessageCircle size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}