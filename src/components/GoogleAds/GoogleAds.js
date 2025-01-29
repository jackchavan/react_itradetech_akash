import React, { useEffect } from "react";

const AdsComponent = ({ dataAdSlot }) => {
  useEffect(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };
    } else {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={`ca-pub-${process.env.REACT_APP_G_ADS_CLIENT_ID}`}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-ad-test={process.env.NODE_ENV === "development" ? "on" : "off"}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsComponent;
