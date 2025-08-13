import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import PageIllustration from '@/components/page-illustration';

export const metadata = {
  title: 'Privacy Policy | GoSheaper',
  description: 'Learn how GoSheaper collects, uses, and protects your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="grow">
        {/* Page illustration */}
        <div className="relative -z-10" aria-hidden="true">
          <PageIllustration />
        </div>

        {/* Hero section */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              {/* Section header */}
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="h1 mb-4" data-aos="fade-up">
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
                  Your privacy matters to us. Learn how we protect your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section>
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="pb-12">
              <div className="prose prose-lg mx-auto max-w-none text-gray-600">
                <div className="rounded-lg bg-white p-8 shadow-lg">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">GoSheaper Automation Hub</h2>
                    <p className="mt-2 text-sm text-gray-500">
                      <strong>Effective Date:</strong> August 12, 2025<br />
                      <strong>Last Updated:</strong> August 12, 2025
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">1. Introduction</h3>
                      <p className="mb-4">
                        GoSheaper ("we," "our," or "us") operates the website located at gosheaper.com (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                      </p>
                      <p>
                        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">2. Information Collection and Use</h3>
                      <p className="mb-4">
                        We collect several different types of information for various purposes to provide and improve our Service to you.
                      </p>

                      <div className="ml-4 space-y-6">
                        <div>
                          <h4 className="mb-2 font-semibold text-gray-900">2.1 Personal Data</h4>
                          <p className="mb-3">
                            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personal Data may include, but is not limited to:
                          </p>
                          <ul className="ml-4 list-disc space-y-1">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Company name and job title</li>
                            <li>Professional information related to automation services</li>
                            <li>Technical specifications and project requirements</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold text-gray-900">2.2 Usage Data</h4>
                          <p>
                            We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold text-gray-900">2.3 Tracking and Cookies Data</h4>
                          <p>
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">3. Use of Data</h3>
                      <p className="mb-4">GoSheaper uses the collected data for various purposes:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                        <li>To process automation service requests and project inquiries</li>
                        <li>To communicate about automation solutions and technical services</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">4. Transfer of Data</h3>
                      <p>
                        Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                      </p>
                      <p className="mt-4">
                        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">5. Disclosure of Data</h3>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="mb-2 font-semibold text-gray-900">5.1 Legal Requirements</h4>
                          <p>GoSheaper may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                          <ul className="ml-4 mt-2 list-disc space-y-1">
                            <li>To comply with a legal obligation</li>
                            <li>To protect and defend the rights or property of GoSheaper</li>
                            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li>To protect the personal safety of users of the Service or the public</li>
                            <li>To protect against legal liability</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold text-gray-900">5.2 Business Transfers</h4>
                          <p>If GoSheaper is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">6. Security of Data</h3>
                      <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">7. Service Providers</h3>
                      <p>
                        We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
                      </p>
                      <p className="mt-4">
                        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">8. Analytics</h3>
                      <p>
                        We may use third-party Service Providers to monitor and analyze the use of our Service.
                      </p>
                      <p className="mt-4">
                        <strong>Google Analytics</strong> is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">9. Your Data Protection Rights</h3>
                      <p className="mb-4">You have the following data protection rights:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>The right to access, update, or delete the information we have on you</li>
                        <li>The right of rectification</li>
                        <li>The right to object</li>
                        <li>The right of restriction</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">10. Children's Privacy</h3>
                      <p>
                        Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">11. Changes to This Privacy Policy</h3>
                      <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">12. Contact Us</h3>
                      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li><strong>By email:</strong> privacy@gosheaper.com</li>
                        <li><strong>By visiting our contact page:</strong> gosheaper.com/contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}