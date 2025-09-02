import Image from "next/image"
import "leaflet/dist/leaflet.css"
import Map from "@/components/Map"
import { Input } from "@/components/Input"
import { FaPhoneAlt } from "react-icons/fa"
import { TextArea } from "@/components/Textarea"
import { MdEmail, MdLocationPin } from "react-icons/md"

export default function AboutUs() {
  return (
    <main className="space-y-10 pb-10">
      <section className="place-items-center content-end text-center h-[350px] relative">
        <Image 
          alt="RENA LLC International Trade"
          width={1920}
          height={1080}
          src="/supermarket3.jpg"
          className="brightness-50 absolute top-0 h-[350px] object-cover"
        />
        <div className="bg-white text-blue-500 py-1.5 px-3 rounded-lg">CONTACT RENA LLC</div>
        <h2 className="text-4xl text-white">Get In Touch</h2>
      </section>
      
      <section className="flex flex-col sm:flex-row justify-center px-5 lg:px-0 gap-y-10 gap-x-5 md:gap-x-10 xl:gap-x-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-wider">Our Contacts</h2>
          <span className="flex flex-wrap gap-y-5 justify-between items-center">
            <div className="flex items-center gap-x-2.5">
              <FaPhoneAlt className="text-blue-500"/>
              <div>
                <h4 className="text-sm">Call us</h4>
                <h6 className="font-bold text-sm">+374 11 700066</h6>
                <h6 className="font-bold text-sm">+374 44 155145 (WhatsApp)</h6>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5">
              <MdEmail className="text-xl text-blue-500"/>
              <div>
                <h4 className="text-sm">Email us</h4>
                <h6 className="font-bold text-sm">rena_eas2015@yahoo.com</h6>
              </div>
            </div>
          </span>
          <span className="flex items-center gap-x-2.5">
            <MdLocationPin className="text-xl text-blue-500"/>
            <div>
              <h6 className="text-sm font-bold">Address: Yerevan, A. Mikoyan St., 22/1, Armenia</h6>
              <h6 className="text-sm font-bold">Tax ID: 01828278</h6>
            </div>
          </span>
          
          <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Map/>
          </div>
          
          <div className="pt-4">
            <h3 className="font-bold mb-2">Business Hours:</h3>
            <p className="text-sm">Monday-Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-wider">Send Inquiry</h2>
          <p className="text-gray-500">Contact us for wholesale inquiries, partnership opportunities, or product information.</p>
          
          <form className="space-y-5">
            <Input label="Your Name" placeholder="Full name"/>
            <Input label="Company Name" placeholder="Your company"/>
            <Input label="Email" type="email" placeholder="Email address"/>
            <Input label="Phone" placeholder="Contact number"/>
            <TextArea label="Your Message" placeholder="How can we help you?" rows={5}/>
            
            <button className="text-white rounded-lg py-3 px-8 font-medium cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>
      
      <section className="px-5 lg:px-20 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Why Choose RENA LLC?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: "34+ Years Experience", desc: "Trusted international trade since 1991"},
              {title: "Quality Certified", desc: "All products meet international standards"},
              {title: "Reliable Supply", desc: "Consistent delivery across 7+ countries"}
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-600">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}