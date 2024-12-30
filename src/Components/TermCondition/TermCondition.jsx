import React from "react";
import Footer from "../Footer/Footer";

const TermCondition = () => {
  return (
    <div className="p-16">
      <div>
        {" "}
        <h1 className="text-[17px] font-bold text-gray-500">
          Welcome to Divyadarshanm!
        </h1>
        <p className="text-[17px]  text-gray-500">
          These Terms of Use (“Terms”) govern your access to and use of the
          Divyadarshanm platform, including all content, features, and services
          offered.
        </p>
      </div>
      <div className="py-5">
        <h1 className="text-2xl font-bold">1. Acceptance of Terms</h1>
        <p className="text-[17px] text-gray-500 py-2">
          By accessing or using Divyadarshanm, you agree to comply with these
          Terms. If you do not agree to these Terms, please refrain from using
          Divyadarshanm.
        </p>
      </div>
      <div className="py-3">
        <h1 className="text-2xl font-bold py-2">
          2. Permitted Use of Divyadarshanm
        </h1>
        <p className="text-[17px] text-gray-500 py-2">
          By accessing or using Divyadarshanm, you agree to comply with these
          Terms. If you do not agree to these Terms, please refrain from using
          Divyadarshanm.
        </p>

        <ol className="list-disc text-gray-700 py-6 px-6">
          <li>
            <p className="text-gray-500 text-[17px]">
              Violate any applicable laws or regulations.
            </p>
          </li>
          <li>
            <p className="text-gray-500 text-[17px]">
              Infringe upon the rights of others.
            </p>
          </li>
          <li>
            <p className="text-gray-500 text-[17px]">
              Disrupt or interfere with the operation of Divyadarshanm.
            </p>
          </li>
          <li>
            <p className="text-gray-500 text-[17px]">
              Attempt to access unauthorized areas of Divyadarshanm or its
              systems.
            </p>
          </li>
          <li>
            <p className="text-gray-500 text-[17px]">
              Engage in any activity that could harm Divyadarshanm or its users.
            </p>
          </li>
        </ol>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">3. User Accounts</h1>
        <p className="text-[17px] py-3 text-gray-500">
          Certain features may require you to create a user account. You are
          responsible for maintaining the confidentiality of your account
          credentials and are accountable for all activities under your account.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">4. Intellectual Property Rights</h1>
        <p className="text-[17px] py-3 text-gray-500">
          The content, features, and services on Divyadarshanm are protected by
          intellectual property laws. You may not reproduce, distribute, modify,
          or create derivative works from Divyadarshanm content without our
          prior written consent.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">
          5. Third-Party Links and Services
        </h1>
        <p className="text-[17px] py-3 text-gray-500">
          Divyadarshanm may include links to third-party websites or services
          that we do not control. We are not responsible for the content or
          practices of these third parties. Your interactions with these
          third-party services are subject to their own terms and policies.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">6. Disclaimer of Warranties</h1>
        <p className="text-[17px] py-3 text-gray-500">
          Divyadarshanm is provided on an “as is” and “as available” basis. We
          do not make warranties or representations regarding the accuracy,
          reliability, or completeness of Divyadarshanm’s content or services.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">7. Limitation of Liability</h1>
        <p className="text-[17px] py-3 text-gray-500">
          Divyadarshanm and its affiliates are not liable for any indirect,
          incidental, special, consequential, or punitive damages arising from
          or related to your use of Divyadarshanm.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">8. Changes to Terms</h1>
        <p className="text-[17px] py-3 text-gray-500">
          We reserve the right to modify these Terms at any time. Changes will
          be posted on Divyadarshanm, and your continued use after any updates
          signifies your acceptance of the revised Terms.
        </p>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold ">9. Contact Us</h1>
        <p className="text-[17px] py-3 text-gray-500">
          For questions or concerns about these Terms, please contact us at:
        </p>
        <div className="">
          <p className="text-[17px] text-gray-600  py-5">
            Email:{" "}
            <a
              className="text-[17px] text-blue-400 py-5 hover:underline"
              href="#"
            >
              support@Divyadarshanm.in
            </a>
          </p>
          <p className="text-gray-600 text-[17px]">Phone: +91 7991522694</p>
          <p className="text-[16px] text-gray-600  py-4">
            Thank you for shopping with Divyadarshanm!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermCondition;
