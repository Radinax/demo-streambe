import { useEffect } from "react";

const ClutchWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.clutch.co/static/js/widget.js"; // Verify the latest script URL from Clutch
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return (
    <div
      className="clutch-widget w-fit"
      data-nofollow="true"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-theme="white"
      data-clutchcompany-id="1569287"
    >
      <iframe
        id="iframe-0.15518551532705793"
        width="100%"
        src="https://widget.clutch.co/widgets/get/2?ref_domain=streambe.com&amp;uid=1569287&amp;theme=white&amp;rel_nofollow=true&amp;ref_path=/"
        height="45px"
        title="[object Object]2"
      ></iframe>
    </div>
  );
};

export default ClutchWidget;
