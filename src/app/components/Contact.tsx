import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:umeshraskoti14@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_22%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-4">Let’s connect around meaningful projects and creative collaborations.</h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-slate-900" />
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            If you are working on community outreach, advocacy, documentation, training, or a story-led campaign, I’d be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-10"
          >
            <h3 className="mb-6 text-2xl font-semibold text-slate-950">Contact Information</h3>
            <p className="mb-8 leading-8 text-slate-600">
              Reach out through any of the options below. The form on the right opens your email app with your message pre-filled, so sending a message works immediately.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'umeshraskoti14@gmail.com', color: 'bg-gradient-to-br from-emerald-500 to-emerald-600' },
                { icon: Phone, label: 'Phone', value: '+977 9867233437', color: 'bg-gradient-to-br from-sky-500 to-sky-600' },
                { icon: MapPin, label: 'Location', value: 'Suryabinayak, Bhaktapur 44800', color: 'bg-gradient-to-br from-slate-800 to-slate-900' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg`}>
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1 font-semibold text-slate-900">{item.label}</h4>
                    <p className="break-words text-slate-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="mb-4 font-semibold text-slate-900">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-white ${platform.color} hover:border-transparent transition-all`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <platform.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.45)] md:p-10">
              <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row">
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Message</div>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">Send an introduction</h3>
                </div>
                <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 sm:block">
                  Response-friendly
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="mb-2 block font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-slate-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Tell me about your project..."
                />
              </div>

              <p className="mb-6 text-sm leading-7 text-slate-500">
                Submitting this form opens your email client with a prepared message so you can send it directly.
              </p>

              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-8 py-4 text-white transition-colors hover:bg-slate-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>

              <a
                href="mailto:umeshraskoti14@gmail.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                Or email directly
                <ArrowRight size={16} />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
