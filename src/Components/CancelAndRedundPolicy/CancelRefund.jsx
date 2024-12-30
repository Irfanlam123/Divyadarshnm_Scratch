import React from "react";
import Footer from "../Footer/Footer";

function CancelRefund() {
  return (
    <div className="p-16">
      <p className="text-[17px] text-gray-500">
        We require this information to understand your needs and provide you
        with a better service, and in particular for the following reasons:
      </p>
      <ol className="list-disc text-gray-700 mt-10 ml-6">
        <li>
          <p className="text-gray-500 text-[17px]">
            While we generally do not accommodate cancellations, we understand
            that there may be exceptional circumstances such as accidental
            orders or technical glitches arising from our Payment gateway
            partner. If you find yourself in such a situation, please feel free
            to contact us via email at support@divyadarshanm.com to request an
            order cancellation. Please ensure that you submit such requests
            within 2 days of placing your order. It’s important to note that we
            retain the right to decline cancellation requests that do not adhere
            to the aforementioned conditions, at our sole discretion.
          </p>
        </li>
        <li>
          <p className="text-gray-500 text-[17px]">
            Conditions for Refund: Sevas once booked and performed can’t be
            refunded. Sevas booked but not performed can only be cancelled as
            per the cancellation terms.
          </p>
        </li>
      </ol>

      <div>
        <h2 className="text-[18px] font-bold mt-10">Contact Us</h2>
        <p className="text-gray-500 text-[17px] py-2">
          If you have any questions or concerns regarding these Refund and
          Cancellations, please contact us at support@divyadarshanm.in
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default CancelRefund;
