"use client"; // solo si usas App Router, puedes omitirlo en Pages Router

import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useRef } from "react";

// Declare iFrameResize as a global variable
declare const iFrameResize: unknown;

type ICivitatisWidget = {
  zone: {
    id: number;
    name: string;
    value: string;
  };
};

const CivitatisWidget = ({ zone }: ICivitatisWidget) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadScript = (src: string, callback: () => void) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        callback();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.onload = callback;
      document.head.appendChild(script);
    };

    loadScript(
      "https://www.civitatis.com/f/js/vendor/iframeResizer.min.js",
      () => {
        if (typeof iFrameResize === "function" && iframeRef.current) {
          iFrameResize(
            {
              checkOrigin: false,
              initCallback: function (iframe: HTMLIFrameElement) {
                setTimeout(() => {
                  const resizeEvent = new Event("resize", { bubbles: true, cancelable: false });
                  iframe.dispatchEvent(resizeEvent);
                });
              },
            },
            iframeRef.current,
          );
        }
      },
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        ref={iframeRef}
        className="civitatis-iframe"
        src={`https://www.civitatis.com/widget-activities/?agencyId=75042&agencyUserId=89991&display=cosy&cant=${isMobile ? 5 : 15}&lang=es&currency=EUR&zone=${zone.id}&cmp=Widget_${zone.value}_ES&transfer=0&width=100%&hideButton=0&centerContent=1&typeSelection=all&color=86c4ae&removeBackground=1&showShadow=1&roundedButtons=1`}
        width="100%"
        frameBorder="0"
        data-maxwidth="100%"
        style={{ maxWidth: "100%" }}
      ></iframe>
    </div>
  );
};

export default CivitatisWidget;
