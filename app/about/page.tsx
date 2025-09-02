import Link from "next/link"
import Image from "next/image"
import home from "@/public/supermarket.png"
import { GiBrain } from "react-icons/gi"
import { VscLaw } from "react-icons/vsc"
import { TfiCrown } from "react-icons/tfi"
import { TfiMedall } from "react-icons/tfi"
import { LuListTodo } from "react-icons/lu"
import { BiDonateHeart } from "react-icons/bi"
import { FaChevronRight } from "react-icons/fa"
import { IoSnowOutline } from "react-icons/io5"
import { RiArrowDropRightLine } from "react-icons/ri"

export default function AboutUs() {
  return (
    <>
      <section className="relative">
        <Image
          src={home}
          alt="RENA LLC Headquarters"
          width={1440}
          height={350}
          className="w-full max-h-screen object-cover object-[30%_70%] opacity-80 brightness-50 hover:brightness-65 transform-all duration-400"
        />
        <Image
          src="https://www.actindo.com/hubfs/Divider-wave-speed-light.svg"
          alt="Divider wave"
          width={1440}
          height={100}
          className="w-full absolute bottom-0"
        />
        <h1 className="text-4xl text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ABOUT RENA LLC</h1>
      </section>
      
      <section className="my-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">34+</h6>
          <h4 className="font-extrabold text-xl">Years of Experience</h4>
          <p className="text-black">
            Since 1991, RENA LLC has been a trusted bridge in international trade between Armenia, Iran, Russia, and other countries.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Our History <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">100+</h6>
          <h4 className="font-extrabold text-xl">Trusted Partners</h4>
          <p className="text-black">
            We maintain strong relationships with supermarkets, dairy producers, and distribution networks across multiple countries.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Our Partners <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
        <div className="text-center text-[#249EDC] place-items-center space-y-2.5">
          <h6 className="text-4xl font-black">50+</h6>
          <h4 className="font-extrabold text-xl">Product Categories</h4>
          <p className="text-black">
            From dairy products to industrial equipment, we supply diverse high-quality products meeting international standards.
          </p>
          <button className="flex items-center gap-x-1.5 font-semibold cursor-pointer hover:text-blue-600">
            Our Products <FaChevronRight className="text-[0.750rem]" />
          </button>
        </div>
      </section>

      <section className="py-20 mx-4 px-4 space-y-20">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="text-[#249EDC]">OUR</span> LEADERSHIP
          </h2>
          <p className="text-lg text-gray-600">
            Meet the visionary team behind RENA LLC's 34 years of successful international trade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">MANAGEMENT TEAM</h3>
              <p className="text-gray-600">
                Under the leadership of CEO Reza Nazfi, RENA LLC has grown into a premier international trading company.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                MEET OUR TEAM
              </button>
            </div>
            <div className="lg:order-last">
              <Image
                src="/leadership.png"
                alt="RENA leadership team"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/board.png"
                alt="RENA operations"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">GLOBAL OPERATIONS</h3>
              <p className="text-gray-600">
                Our international network spans Armenia, Iran, Russia, Ukraine, Georgia, Poland and beyond.
              </p>
              <button className="bg-[#249EDC] hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition">
                OUR NETWORK
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-4xl font-bold">OUR CORE VALUES</h2>
          <p className="text-lg text-gray-600">
            These principles guide every aspect of our business operations and relationships.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-12">
          {[
            { icon: <TfiCrown />, title: "Quality First" },
            { icon: <VscLaw />, title: "Integrity Always" },
            { icon: <GiBrain />, title: "Innovative Solutions" },
            { icon: <TfiMedall />, title: "International Standards" },
            { icon: <LuListTodo />, title: "Reliable Delivery" },
            { icon: <BiDonateHeart />, title: "Customer Focus" },
            { icon: <IoSnowOutline />, title: "Sustainable Trade" },
            { icon: <TfiCrown />, title: "Trusted Partnerships" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center space-y-4 hover:shadow-md transition"
            >
              <div className="bg-[#249EDC] inline-flex items-center justify-center rounded-full w-16 h-16 text-white text-2xl mx-auto">
                {item.icon}
              </div>
              <h6 className="font-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-20 mb-20">
        <h2 className="text-3xl font-bold text-center">OUR GLOBAL PRESENCE</h2>
        <div className="flex px-5 space-x-5 items-center max-w-[1000px] mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold">INTERNATIONAL TRADE NETWORK</h4>
            <p>With 34 years of experience, RENA LLC has established itself as a key trading bridge between Armenia, Iran, Russia, Ukraine, Georgia, Poland and other countries.</p>
            <button className="bg-[#249EDC] text-white text-sm font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-blue-600">
              CONTACT OUR TEAM
            </button>
          </div>
          <Image
            src="/office.png"
            alt="RENA global offices"
            width={600}
            height={300}
            className="rounded-xl shadow-2xl w-full h-auto object-cover brightness-60 hover:brightness-80 transition-transform transform hover:scale-103"
          />
        </div>
      </section>

      <section className="px-5 lg:px-15 xl:px-25 relative">
        <Image width={1440} height={300} src="/armenia1.webp" alt="RENA headquarters in Yerevan" className="h-64 object-cover object-[50%_80%] brightness-65"/>
        <h6 className="text-white text-3xl absolute top-1/4 left-1/4">YEREVAN: OUR STRATEGIC BUSINESS HUB</h6>
      </section>

      <section className="px-5 lg:px-15 xl:px-25 my-10">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/4 mb-6 md:mb-0 relative before:absolute before:top-[-15px] before:left-[-15px] before:border-t-20 before:border-l-6 before:border-gray-200 after:absolute after:top-[-15px] after:left-[-15px] after:border-t-6 after:border-l-20 after:border-gray-200">
            <h2 className="text-4xl font-bold tracking-wider">
              Our
              <br />
              Products
            </h2>
          </div>
          <div className="w-full sm:w-3/4 space-y-10">
            <div>
              <div className="flex justify-between items-center text-orange-400 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Dairy Products</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Premium Butter</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Cream</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Milk Powder</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center text-green-700 mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Industrial Equipment</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-500 text-xl">
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Boiler Systems</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Refrigeration Units</span>
                </div>
                <div className="flex items-center">
                  <RiArrowDropRightLine className="text-2xl"/>
                  <span>Stainless Steel Tanks</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl font-semibold border-b-3 border-b-gray-200 w-full h-12">Building Materials</h3>
                <RiArrowDropRightLine className="text-5xl border-b-3"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-25 mb-20">
        <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 w-full p-10 sm:pl-32 space-y-5 relative">
          <Image src="/Untitled2.png" alt="RENA products" width={250} height={250} className="absolute -left-25 -top-5 hidden sm:block"/>
          <h4 className="text-3xl font-semibold">Need premium dairy products or industrial equipment?</h4>
          <p className="text-gray-500">With 34 years of experience in international trade, we guarantee quality, reliability and competitive pricing.</p>
          <button className="border-b-2 cursor-pointer text-green-600 hover:text-green-800">Contact Us Today</button>
        </div>
      </section>

      <section className="md:space-x-4 space-y-4">
        <div className="relative w-full py-8 px-5 md:px-8 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/armenia2.jpg"
              alt="Yerevan business district"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-60"
              style={{ filter: "blur(3px)" }}
            />
          </div>

          <div className="absolute inset-0 bg-[#1a2234] opacity-70 brightness-20"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-10">
              How we ensure quality in our supply chain?
            </h2>

            <div className="md:hidden space-y-6 space-x-16">
              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">01</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Supplier Selection
                  </h3>
                  <p className="text-gray-300 text-sm">
                    We partner only with reputable international manufacturers meeting strict quality standards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">02</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Quality Certification
                  </h3>
                  <p className="text-gray-300 text-sm">
                    All products come with international certificates ensuring compliance with health and safety standards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">03</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Reliable Logistics
                  </h3>
                  <p className="text-gray-300 text-sm">
                    We maintain temperature-controlled supply chains for dairy products and secure transport for industrial equipment.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[100px] w-[100px] flex-shrink-0">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full w-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">04</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Customer Support
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Our team provides ongoing support to ensure complete satisfaction with every order.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">01</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">02</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute top-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">03</div>
                  </div>
                </div>

                <div className="relative h-[120px] max-w-[120px] mx-auto w-full">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5">
                    <div className="absolute top-0 right-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5">
                    <div className="absolute bottom-0 left-0 w-5 h-1.5 bg-yellow-500"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-5 bg-yellow-500"></div>
                  </div>
                  <div className="bg-[#0f1525] p-3 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-white">04</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Supplier Selection
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Partnering with reputable international manufacturers.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Quality Certification
                  </h3>
                  <p className="text-gray-300 text-sm">
                    All products come with international certificates.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Reliable Logistics
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Temperature-controlled supply chains.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Customer Support
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Ongoing support for complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div className="space-x-2 space-y-16">
              <h2 className="text-3xl md:text-3xl font-bold text-slate-800">
                Who is RENA LLC?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Established in 1991, RENA LLC has grown into a premier international trading company specializing in high-quality dairy products, industrial equipment, and building materials. With our headquarters in Yerevan, Armenia, we serve clients across multiple countries with reliability and excellence.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
                >
                  Our Full Story
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="relative bg-gray-100 p-6 rounded-lg">
                  <div className="absolute -top-1 -right-1 w-8 h-8">
                    <div className="absolute top-0 right-0 w-8 h-2 bg-black"></div>
                    <div className="absolute top-0 right-0 w-2 h-8 bg-black"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        Years in Business
                      </h3>
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-slate-800">
                        34+
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-100 p-6 rounded-sm">
                <div className="absolute -top-1 -left-1 w-8 h-8">
                  <div className="absolute top-0 left-0 w-8 h-2 bg-green-500"></div>
                  <div className="absolute top-0 left-0 w-2 h-8 bg-green-500"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      International
                      <br />
                      Markets
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-green-500">
                      7+
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-100 p-6 rounded-sm">
                <div className="absolute -bottom-1 -right-1 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-8 h-2 bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-8 bg-yellow-500"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Product
                      <br />
                      Categories
                    </h3>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-yellow-500">
                      50+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-80 bg-[#11567F] content-center">
        <div className="flex max-w-[1000px] mx-auto items-center flex-col gap-y-10">
          <h2 className="text-white text-3xl font-semibold flex">OUR COMMITMENTS</h2>
          <div className="grid sm:grid-cols-2 space-x-10 w-full">
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                Quality Assurance Policy
              </h4>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                Read More <FaChevronRight />
              </button>
            </div>
            <div className="bg-white rounded space-y-3 p-8 border-b-6 border-[#249EDC]">
              <h4 className="text-xl font-semibold">
                International Trade Standards
              </h4>
              <button className="flex items-center gap-x-2 text-[#249EDC] text-sm font-semibold cursor-pointer hover:text-blue-600">
                Read More <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}