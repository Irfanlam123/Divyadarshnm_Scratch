import React from "react";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="p-16">
      <div>
        <h2 className="text-[17px] font-bold">
          We may collect the following information:
        </h2>
        <ul className="ml-6 py-4">
          <li className="list-disc text-gray-700">
            <p>Name, Nakshatra, Gothra, Rashi</p>
          </li>
          <li className="list-disc text-gray-700">
            <p>
              Contact information including Email address, Phone number, Address
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p>
              Demographic information such as postcode, preferences and
              interests
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p>Other information relevant to customer surveys and/or offers</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-[17px] font-bold">
          What we do with the information we gather
        </h2>
        <p className="text-[17px] py-3 text-gray-500">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="ml-6 py-4 ">
          <li className="list-disc text-gray-700">
            <p>Internal record keeping.</p>
          </li>
          <li className="list-disc text-gray-700">
            <p>
              We may use the information to improve our products and services.
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p>
              We may periodically send promotional emails about new products and
              services, special offers or other information which we think you
              may find interesting using the email address which you have
              provided
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p>
              From time to time, we may also use your information to contact you
              for market research purposes. We may contact you by email, phone,
              fax or mail. We may use the information to customise the website
              according to your interests.
            </p>
          </li>
        </ul>
        <p className="text-[17px] py-3 text-gray-500">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure we have put in suitable
          measures.
        </p>
      </div>

      <div>
        <h1 className="text-[18px] font-bold py-2">How we use cookies</h1>
        <p className="text-[17px]  py-4 text-gray-500">
          A cookie is a small file which asks permission to be placed on your
          computer’s hard drive. Once you agree, the file is added and the
          cookie helps analyses web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual. The web application can tailor its operations to your
          needs, likes and dislikes by gathering and remembering information
          about your preferences
        </p>
        <p className="text-[17px]  py-4 text-gray-500">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyses data about webpage traffic and improve our
          website in order to tailor it to customer needs. We only use this
          information for statistical analysis purposes and then the data is
          removed from the system.
        </p>
        <p className="text-[17px]  py-4 text-gray-500">
          Overall, cookies help us provide you with a better website, by
          enabling us to monitor which pages you find useful and which you do
          not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with
          us.
        </p>
        <p className="text-[17px]  py-4 text-gray-500">
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>
      </div>

      <div>
        <h1 className="text-[17px] font-bold">
          Controlling your personal information
        </h1>
        <p className="text-[17px] text-gray-500 py-3">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>

        <ul className="ml-6 py-4 ">
          <li className="list-disc text-gray-700">
            <p className="text-[17px] text-gray-500 py-1">
              whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p className="text-[17px] text-gray-500 ">
              if you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at
              support@Divyadarshanm.com
            </p>
          </li>
        </ul>
        <p className="text-[17px] text-gray-500 py-4">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so. We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="text-[17px] text-gray-500 py-4">
          If you have any questions regarding this Privacy Policy or the
          practices of this Site, please contact us at support@Divyadarshanm.com
        </p>
        <p className="text-[17px] text-gray-500 py-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>

        <ul className="ml-6 py-4 ">
          <li className="list-disc text-gray-700">
            <p className="text-[17px] text-gray-500 py-1">
              While we generally do not accommodate cancellations, we understand
              that there may be exceptional circumstances such as accidental
              orders or technical glitches arising from our Payment gateway
              partner. If you find yourself in such a situation, please feel
              free to contact us via email at support@divyadarshanm.com to
              request an order cancellation. Please ensure that you submit such
              requests within 2 days of placing your order. It’s important to
              note that we retain the right to decline cancellation requests
              that do not adhere to the aforementioned conditions, at our sole
              discretion.
            </p>
          </li>
          <li className="list-disc text-gray-700">
            <p className="text-[17px] text-gray-500 ">
              Conditions for Refund: Sevas once booked and performed can’t be
              refunded. Sevas booked but not performed can only be cancelled as
              per the cancellation terms.
            </p>
          </li>
        </ul>

        <div>
          <h2 className="text-[17px] font-bold py-4">Contact Us</h2>
          <p className="text-[17px] text-gray-500 ">
            If you have any questions or concerns regarding these Refund and
            Cancellations, please contact us at support@divyadarshanm.in
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
