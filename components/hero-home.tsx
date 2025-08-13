import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,rgba(203,213,225,0.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              AI-Powered Business Automation
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Boost efficiency across marketing, HR, IT, supply chain, and finance. Save 50,000+ hours, cut costs by 40%, and accelerate growth—trusted by 300+ companies worldwide.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,rgba(203,213,225,0.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Get a Free Quote{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <Image
              src="/images/AI-Powered Business Automation.png"
              alt="AI-Powered Business Automation"
              width={800}
              height={450}
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Automation in Action Section */}
          <div className="mt-20 md:mt-32">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl" data-aos="fade-up">
                Automation in Action
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700" data-aos="fade-up" data-aos-delay={200}>
                Real results from businesses that transformed their operations with our platform
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay={400}>
              {/* TikTok Videos Automated */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">TikTok Videos Automated</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    AI script generation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Automated voice-over
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Smart montage
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Scheduled publication
                  </li>
                </ul>
              </div>

              {/* Full Marketing Pipeline */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Full Marketing Pipeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Intelligent lead scoring
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Automated nurturing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Seamless CRM sync
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Real-time analytics
                  </li>
                </ul>
              </div>

              {/* E-commerce AI Platform */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">E-commerce AI Platform</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Order automation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Smart inventory
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Logistics optimization
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    AI customer support
                  </li>
                </ul>
              </div>

              {/* HR Digital Transformation */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">HR Digital Transformation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Streamlined onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Automated payroll
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Performance tracking
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Compliance reporting
                  </li>
                </ul>
              </div>

              {/* IT Infrastructure Automation */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">IT Infrastructure Automation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Server monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Security automation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Help desk AI
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Incident response
                  </li>
                </ul>
              </div>

              {/* Supply Chain Optimization */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Supply Chain Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Demand forecasting
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Inventory optimization
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Logistics automation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">•</span>
                    Cost reduction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
