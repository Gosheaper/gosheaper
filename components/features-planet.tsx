export default function FeaturesPlanet() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" data-aos="fade-up">
              Your Automation Journey in 3 Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay={200}>
              From consultation to deployment, we make automation simple and effective
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay={400}>
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tell Us Your Needs
                  </h3>
                  <p className="text-gray-600">
                    Fill our quick form and tell us about your automation goals
                  </p>
                </div>
                <div className="hidden sm:block absolute left-6 top-12 w-0.5 h-16 bg-blue-200"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Get Free Quote
                  </h3>
                  <p className="text-gray-600">
                    Receive a custom automation proposal quickly
                  </p>
                </div>
                <div className="hidden sm:block absolute left-6 top-12 w-0.5 h-16 bg-blue-200"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Launch & Grow
                  </h3>
                  <p className="text-gray-600">
                    Deploy your solution and start saving time immediately
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay={600}>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Automation Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of businesses already transforming their operations with our AI-powered automation solutions.
              </p>
              <a
                href="#automation-form"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
