import React from "react";

function Footer({
  name,
  email,
  website,
  address,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <div>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">My Name :</span>
            {name}
          </li>
          <li>
            <span className="font-bold">My Email: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">My phone:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account Holder:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account Number:</span> {bankAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>
            <a href={website} target="_blank" rel="nooppener noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
      {/* end of footer */}
    </div>
  );
}

export default Footer;
