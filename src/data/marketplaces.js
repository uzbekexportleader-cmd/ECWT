import amazonLogo from "../assets/logos/amazon.png";
import walmartLogo from "../assets/logos/walmart.png";
import ebayLogo from "../assets/logos/ebay.png";
import etsyLogo from "../assets/logos/Etsy.png";
import tiktokLogo from "../assets/logos/tiktok-shop.png";
import temuLogo from "../assets/logos/temu.png";
import shopifyLogo from "../assets/logos/shopify.png";
import facebookLogo from "../assets/logos/facebookmarketplace.png";

export const marketplaces = [
  {
    id: 1,
    name: "Amazon",
    slug: "amazon",
    logo: amazonLogo,
    officialUrl: "https://sell.amazon.com",
    description:
      "Amazon dunyodagi eng yirik marketplace bo‘lib, millionlab xaridorlarga mahsulot sotish imkonini beradi.",
    advantages: [
      "Global mijozlar bazasi",
      "FBA xizmati",
      "Kuchli brend ishonchliligi",
      "Yuqori savdo hajmi",
    ],
    commission: "Kategoriyaga qarab taxminan 8%–15%",
    requirements: [
      "Seller account",
      "Mahsulot hujjatlari",
      "Professional product listing",
      "To'lov tizimi",
    ],
    products: [
      "Textile",
      "Hunarmandchilik",
      "Uy jihozlari",
      "Kosmetika",
    ],
  },

  {
    id: 2,
    name: "Walmart",
    slug: "walmart",
    logo: walmartLogo,
    officialUrl: "https://marketplace.walmart.com",
    description:
      "AQShdagi eng yirik retail marketplace platformalaridan biri.",
    advantages: [
      "AQSh bozori",
      "Kamroq raqobat",
      "Katta auditoriya",
      "Professional seller tizimi",
    ],
    commission: "6%–15%",
    requirements: [
      "Business verification",
      "Professional listing",
      "Seller account",
    ],
    products: [
      "Textile",
      "Elektronika",
      "Uy buyumlari",
      "Aksessuarlar",
    ],
  },

  {
    id: 3,
    name: "eBay",
    slug: "ebay",
    logo: ebayLogo,
    officialUrl: "https://www.ebay.com/sellercenter",
    description:
      "Global marketplace bo'lib yangi va ishlatilgan mahsulotlarni sotish mumkin.",
    advantages: [
      "Global savdo",
      "Auction tizimi",
      "Boshlash oson",
      "Millionlab xaridorlar",
    ],
    commission: "10%–15%",
    requirements: [
      "Seller account",
      "Payment account",
      "Mahsulot listing",
    ],
    products: [
      "Vintage",
      "Hunarmandchilik",
      "Elektronika",
      "Fashion",
    ],
  },

  {
    id: 4,
    name: "Etsy",
    slug: "etsy",
    logo: etsyLogo,
    officialUrl: "https://www.etsy.com/sell",
    description:
      "Handmade va vintage mahsulotlar uchun dunyodagi eng mashhur platforma.",
    advantages: [
      "Handmade uchun ideal",
      "Creative audience",
      "Brend yaratish",
      "Global savdo",
    ],
    commission: "Listing + Transaction fee",
    requirements: [
      "Etsy shop",
      "Professional rasmlar",
      "Mahsulot tavsifi",
    ],
    products: [
      "Hunarmandchilik",
      "Suvenirlar",
      "Milliy mahsulotlar",
      "Zargarlik",
    ],
  },

  {
    id: 5,
    name: "TikTok Shop",
    slug: "tiktok",
    logo: tiktokLogo,
    officialUrl: "https://seller.tiktokglobalshop.com",
    description:
      "Video marketing orqali mahsulot sotishga mo'ljallangan social commerce platformasi.",
    advantages: [
      "Video savdo",
      "Trend mahsulotlar",
      "Katta auditoriya",
      "Influencer marketing",
    ],
    commission: "Hududga qarab farq qiladi",
    requirements: [
      "Seller account",
      "Mahsulot listing",
      "Video kontent",
    ],
    products: [
      "Fashion",
      "Kosmetika",
      "Aksessuarlar",
      "Handmade",
    ],
  },

  {
    id: 6,
    name: "Temu",
    slug: "temu",
    logo: temuLogo,
    officialUrl: "https://www.temu.com",
    description:
      "Tez rivojlanayotgan global marketplace platformasi.",
    advantages: [
      "Yuqori trafik",
      "Global xaridorlar",
      "Tez rivojlanmoqda",
      "Katta savdo hajmi",
    ],
    commission: "Platforma siyosatiga bog'liq",
    requirements: [
      "Seller verification",
      "Product listing",
      "Inventory",
    ],
    products: [
      "Uy buyumlari",
      "Fashion",
      "Aksessuarlar",
      "Textile",
    ],
  },

  {
    id: 7,
    name: "Shopify",
    slug: "shopify",
    logo: shopifyLogo,
    officialUrl: "https://www.shopify.com",
    description:
      "Shaxsiy internet do'kon yaratish uchun professional platforma.",
    advantages: [
      "Own Store",
      "To'liq nazorat",
      "Marketing",
      "Analytics",
    ],
    commission: "Subscription plan mavjud",
    requirements: [
      "Shopify account",
      "Domen",
      "Payment Gateway",
    ],
    products: [
      "Har qanday mahsulot",
      "Textile",
      "Hunarmandchilik",
      "Brend mahsulotlari",
    ],
  },

  {
    id: 8,
    name: "Facebook Marketplace",
    slug: "facebook-marketplace",
    logo: facebookLogo,
    officialUrl: "https://www.facebook.com/marketplace",
    description:
      "Facebook orqali mahsulotlarni mahalliy va global auditoriyaga sotish mumkin.",
    advantages: [
      "Katta auditoriya",
      "Facebook integratsiyasi",
      "Oson boshlash",
      "Reklama bilan ishlaydi",
    ],
    commission: "Hududga qarab",
    requirements: [
      "Facebook account",
      "Mahsulot listing",
      "Rasmlar",
    ],
    products: [
      "Textile",
      "Furniture",
      "Fashion",
      "Handmade",
    ],
  },
];