import "./Orbit.css";

import amazonLogo from "../../assets/logos/amazon.png";
import ebayLogo from "../../assets/logos/ebay.png";
import etsyLogo from "../../assets/logos/Etsy.png";
import facebookLogo from "../../assets/logos/facebookmarketplace.png";
import shopifyLogo from "../../assets/logos/shopify.png";
import temuLogo from "../../assets/logos/temu.png";
import tiktokLogo from "../../assets/logos/tiktok-shop.png";
import walmartLogo from "../../assets/logos/walmart.png";

export default function Orbit() {
  const marketplaces = [
    { name: "Amazon", logo: amazonLogo, angle: 0 },
    { name: "eBay", logo: ebayLogo, angle: 45 },
    { name: "Etsy", logo: etsyLogo, angle: 90 },
    { name: "TikTok Shop", logo: tiktokLogo, angle: 135 },
    { name: "Walmart", logo: walmartLogo, angle: 180 },
    { name: "Temu", logo: temuLogo, angle: 225 },
    { name: "Facebook", logo: facebookLogo, angle: 270 },
    { name: "Shopify", logo: shopifyLogo, angle: 315 },
  ];

  return (
    <div className="ecwt-orbit">
      <div className="orbit-ambient" />

      <div className="orbit-ring orbit-ring-lg" />
      <div className="orbit-ring orbit-ring-md" />
      <div className="orbit-ring orbit-ring-sm" />

      <div className="orbit-glow-trail orbit-glow-trail-one" />
      <div className="orbit-glow-trail orbit-glow-trail-two" />

      <div className="orbit-energy">
        {marketplaces.map((item) => (
          <span
            key={item.name}
            style={{
              "--angle": `${item.angle}deg`,
            }}
          />
        ))}
      </div>

      <div className="orbit-core">
        <div className="orbit-core-glow" />
        <h2>ECWT</h2>
        <p>Global Trade</p>
      </div>

      <div className="orbit-logo-layer">
        {marketplaces.map((item) => (
          <div
            key={item.name}
            className="orbit-logo-position"
            style={{
              "--angle": `${item.angle}deg`,
            }}
          >
            <div
              className="orbit-logo-card"
              style={{
                width: "82px",
                height: "82px",
                padding: "10px",
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="orbit-status-card">
        <span>ECWT Ecosystem</span>
        <strong>Sell Worldwide</strong>
      </div>
    </div>
  );
}