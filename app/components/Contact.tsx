import { Mail, Phone, MapPin, Send, PhoneCall } from 'lucide-react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from './ui/badge';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden py-24
        bg-gradient-to-br from-black via-slate-950 to-slate-900
        text-zinc-100
      "
    >
      {/* glow background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="relative z-10 mb-14 text-center" data-aos="fade-up">
          <Badge className="bg-zinc-800 text-zinc-200 inline-flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Contact
          </Badge>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Get In Touch
          </h2>

          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Let’s talk about projects, collaborations, or just say hi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Info */}
          <div className="flex" data-aos="fade-right">
            <Card className="flex flex-col h-full w-full bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-indigo-400" size={18} />
                    <span className="text-zinc-300">alphari404@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="text-indigo-400" size={18} />
                    <span className="text-zinc-300">+62 898-3125-100</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-indigo-400" size={18} />
                    <span className="text-zinc-300">Palembang, Indonesia</span>
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-4">
                    <FaLinkedin className="text-indigo-400" size={18} />
                    <a
                      href="https://www.linkedin.com/in/muhammadbintangalphari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-white transition"
                    >
                      Muhammad Bintang Alphari
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaInstagram className="text-indigo-400" size={18} />
                    <a
                      href="https://instagram.com/bintangalphari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-pink-400 transition"
                    >
                      bintangalphari
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaGithub className="text-indigo-400" size={18} />
                    <a
                      href="https://github.com/alpharii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-white transition"
                    >
                      alpharii
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaFacebook className="text-indigo-400" size={18} />
                    <a
                      href="https://www.facebook.com/alphari.933660/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-blue-400 transition"
                    >
                      alphari
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Form */}
          <div className="flex" data-aos="fade-left">
            <Card className="flex h-full w-full flex-col bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex flex-col h-full p-6 space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-black/40 border-white/10"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black/40 border-white/10"
                />

                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-black/40 border-white/10 resize-none"
                />

                {/* push button to bottom */}
                <div className="pt-2 mt-auto">
                  <Button
                    className="
              w-full gap-2
              bg-indigo-600 hover:bg-indigo-500
              text-white
            "
                  >
                    Send Message <Send size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
