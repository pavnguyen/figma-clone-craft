import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Building2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    toast.success("Message sent successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Reach out with any questions or assistance you need.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:contact@thisisademo.com" className="text-gray-600 hover:text-black">
              contact@thisisademo.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-600 hover:text-black">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Building2 className="w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Office</h3>
            <p className="text-gray-600">
              456 Sample St, Example City,<br />
              EX 12345
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea id="message" className="min-h-[150px]" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms
              </label>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647281018539!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-24 border-t pt-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected with Us</h2>
          <p className="text-gray-600 mb-6">
            Join our community for exclusive updates and offers
          </p>
          <form className="flex gap-4">
            <Input
              type="email"
              placeholder="Your Email Here"
              className="flex-1"
            />
            <Button type="submit">Join</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;