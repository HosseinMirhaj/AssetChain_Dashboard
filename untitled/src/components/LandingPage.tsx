import React, { useState, useEffect } from 'react';
import YieldChart from './YieldChart';
import { INITIAL_ASSETS } from '../data';
import { Asset } from '../types';
import { 
  ShieldCheck, 
  Coins, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle, 
  Wallet, 
  ArrowRight, 
  ArrowLeft,
  Building,
  Anchor,
  Globe2,
  Lock,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Database,
  Layers,
  Activity,
  FileText,
  Network,
  Fingerprint,
  Info
} from 'lucide-react';

interface LandingPageProps {
  theme: 'dark' | 'light';
  lang: 'fa' | 'en';
  t: any;
  stats: {
    tvl: number;
    soldUnits: number;
  };
  onExplore: (category?: string) => void;
  onSupport: () => void;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  myPortfolio?: any[];
  assets?: Asset[];
}

export default function LandingPage({ 
  theme, 
  lang, 
  t, 
  stats, 
  onExplore, 
  onSupport,
  isLoggedIn = false,
  onLoginClick = () => {},
  myPortfolio = [],
  assets = INITIAL_ASSETS
}: LandingPageProps) {
  const isRtl = lang === 'fa';
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto rotate the steps every 5 seconds for interactive display, unless clicked
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const pipelineSteps = [
    {
      id: 0,
      icon: <Building size={22} />,
      titleEn: '1. Sourcing Asset',
      titleFa: '۱. تامین فیزیکی دارایی',
      subtitleEn: 'Premium Physical Custody',
      subtitleFa: 'اصالت‌سنجی و تامین دارایی',
      descEn: 'We acquire audited, premium grade physical gold bullion, premium Dubai/London real estates, and strategic metals.',
      descFa: 'خریداری شمش‌های طلای بین‌المللی با عیار استاندارد و ثبت حقوقی اسناد املاک مسکونی و تجاری تحت قوانین نظارتی.',
      metricEn: '100% Tangible Reserves',
      metricFa: '۱۰۰٪ دارایی واقعی و فیزیکی',
      badgeColor: 'bg-amber-500/15 text-amber-500 border-amber-500/20',
      glowColor: 'shadow-amber-500/20',
      details: {
        partnerEn: 'Zurich Bullion Trust',
        partnerFa: 'صندوق امانت شمش زوریخ',
        locationEn: 'Zurich Vault C3',
        locationFa: 'خزانه شماره ۳ زوریخ',
        insuredValueEn: '$45,000,000 USD',
        insuredValueFa: '۴۵ میلیون دلار',
        registryEn: 'Regulated Swiss Trustee',
        registryFa: 'تراست قانون‌گذاری شده سوئیس'
      }
    },
    {
      id: 1,
      icon: <Lock size={22} />,
      titleEn: '2. Vault Custody',
      titleFa: '۲. خزانه‌داری امن بانکی',
      subtitleEn: 'Fully Insured Vaulting',
      subtitleFa: 'نگهداری فوق‌امنیتی',
      descEn: 'Assets are securely sealed in deep, high-security bank vault compartments and fully insured against any external risk.',
      descFa: 'ذخیره‌سازی در صندوق‌های امانات فوق‌امنیتی بانکی مجهز به سیستم چندامضایی فیزیکی با پوشش بیمه کامل بین‌المللی.',
      metricEn: 'Lloyds Insured Pol.',
      metricFa: 'پوشش کامل بیمه بین‌المللی',
      badgeColor: 'bg-blue-500/15 text-blue-500 border-blue-500/20',
      glowColor: 'shadow-blue-500/20',
      details: {
        partnerEn: "Lloyd's London Consortium",
        partnerFa: 'کنسرسیوم بیمه لویدز لندن',
        locationEn: 'Geneva / Dubai Freezone',
        locationFa: 'منطقه آزاد تجاری ژنو و دبی',
        insuredValueEn: '100% Replacement Value',
        insuredValueFa: '۱۰۰٪ ارزش جایگزینی فیزیکی',
        registryEn: 'Multi-Sig Access Protocol',
        registryFa: 'پروتکل دسترسی چندامضایی'
      }
    },
    {
      id: 2,
      icon: <CheckCircle size={22} />,
      titleEn: '3. Trustee Audit',
      titleFa: '۳. حسابرسی و تضمین',
      subtitleEn: 'Independent Legal Trustee',
      subtitleFa: 'تطبیق و راستی‌آزمایی',
      descEn: 'Independent auditors SGS perform real-time counts, matching physical weight to on-chain minted RWA tokens 24/7.',
      descFa: 'حسابرسی مداوم و تطبیق لحظه‌ای تعداد توکن‌های صادر شده با موجودی فیزیکی واقعی توسط ناظر بین‌المللی SGS.',
      metricEn: 'SGS Audited & Transparent',
      metricFa: 'تاییدیه رسمی بازرسان SGS',
      badgeColor: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/20',
      glowColor: 'shadow-emerald-500/20',
      details: {
        partnerEn: 'SGS International S.A.',
        partnerFa: 'کمپانی بین‌المللی SGS سوئیس',
        locationEn: 'On-Chain Proof-of-Reserves',
        locationFa: 'بررسی درون‌زنجیره‌ای اثبات ذخایر',
        insuredValueEn: 'Zero Discrepancy SLA',
        insuredValueFa: 'ضمانت عدم اختلاف محاسباتی',
        registryEn: 'Public Audit Ledger #942',
        registryFa: 'دفتر کل حسابرسی عمومی شماره ۹۴۲'
      }
    },
    {
      id: 3,
      icon: <Coins size={22} />,
      titleEn: '4. Tokenization',
      titleFa: '۴. صدور توکن و معامله',
      subtitleEn: 'Instant On-Chain Swaps',
      subtitleFa: 'خرید و معامله خرد شده',
      descEn: 'Tokens are minted as fully fractional shares. Purchase starting with 1 USDT and receive direct physical yield.',
      descFa: 'عرضه رسمی توکن‌های با پشتوانه ۱۰۰٪ واقعی روی شبکه بلاکچین با قابلیت نقدشوندگی آنی ۲۴ ساعته و دریافت سود.',
      metricEn: 'USDT Instant Settlement',
      metricFa: 'تسویه تتر آنی و پرداخت سود اجاره',
      badgeColor: 'bg-purple-500/15 text-purple-500 border-purple-500/20',
      glowColor: 'shadow-purple-500/20',
      details: {
        partnerEn: 'AssetChain Engine v2',
        partnerFa: 'هسته معاملاتی AssetChain',
        locationEn: 'ERC20 / TRC20 Ledger',
        locationFa: 'قراردادهای هوشمند تایید شده',
        insuredValueEn: 'Instant Liquidity Pool',
        insuredValueFa: 'استخر نقدشوندگی ۲۴ ساعته',
        registryEn: 'Verified Smart Contract',
        registryFa: 'قراردادهای هوشمند ممیزی شده'
      }
    }
  ];

  const featuredAssets = [
    {
      id: 'GOLD',
      enName: 'Premium Physical Gold',
      faName: 'طلای ۱۸ عیار فیزیکی',
      price: 1195.00,
      change: 4.8,
      flag: 'ch',
      locationEn: 'Zurich, Switzerland',
      locationFa: 'زوریخ، سوئیس',
      progress: 88,
      category: 'commodities'
    },
    {
      id: 'JUMEIRAH',
      enName: 'Jumeirah Beach Villa',
      faName: 'ویلا ساحلی جمیرا',
      price: 250.00,
      change: 9.5,
      flag: 'ae',
      locationEn: 'Dubai, UAE',
      locationFa: 'دبی، امارات متحده عربی',
      progress: 74,
      category: 'real_estate'
    },
    {
      id: 'FOOLAD',
      enName: 'Mobarakeh Steel',
      faName: 'فولاد مبارکه',
      price: 0.082,
      change: 2.4,
      flag: 'ir',
      locationEn: 'Isfahan, Iran',
      locationFa: 'اصفهان، ایران',
      progress: 92,
      category: 'metals'
    }
  ];

  const currentActiveStepData = pipelineSteps[activeStep];

  // Carousel Banner State & Slides Definition
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [carouselAutoPlay, setCarouselAutoPlay] = useState<boolean>(true);

  const carouselSlides = [
    {
      id: 0,
      tagEn: 'PRECIOUS METALS & GOLD',
      tagFa: 'سرمایه‌گذاری در طلا و فلزات گران‌بها',
      titleEn: 'Preserve Your Wealth with Tokenized Physical Gold',
      titleFa: 'حفظ ارزش دارایی با توکنایز شمش طلای فیزیکی استاندارد',
      descEn: 'Gold is the ultimate time-tested safe haven. Through AssetChain, you can invest fractionally in 99.9% pure physical gold bullion stored in secure, audited vaults. Experience 24/7 liquidity, real-time pricing, and seamless, boundary-free digital ownership with zero storage overhead.',
      descFa: 'طلا سنتی‌ترین و امن‌ترین پناهگاه سرمایه‌گذاری در برابر تورم و نوسانات اقتصادی است. از طریق فناوری توکنایزیشن، شما می‌توانید به صورت خرد و با هر بودجه‌ای در شمش‌های واقعی طلای فیزیکی استاندارد در خزانه‌های امن بانکی سرمایه‌گذاری کنید و از نقدشوندگی ۲۴ ساعته بهره‌مند شوید.',
      badgeEn: '99.9% Pure Physical Gold Backed',
      badgeFa: 'پشتیبان طلای فیزیکی استاندارد',
      buttonTextEn: 'Invest in Gold',
      buttonTextFa: 'خرید طلای فیزیکی',
      icon: <Coins className="w-16 h-16 text-amber-500" />,
      colorClass: 'text-amber-500',
      tagColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      gradient: 'from-amber-600/15 via-amber-500/5 to-transparent',
      borderGlow: 'border-amber-500/25 shadow-amber-500/5',
      actionUrl: 'metals',
      bgImage: 'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 1,
      tagEn: 'PREMIUM REAL ESTATE',
      tagFa: 'درآمد ارزی با املاک و مستغلات لوکس',
      titleEn: 'Earn Passive Rental Yields from Prime Global Real Estate',
      titleFa: 'دریافت سود اجاره دلاری روزانه از املاک ممتاز بین‌المللی',
      descEn: 'Real estate is the foundation of multi-generational wealth. Acquire fractional ownership of high-yield commercial and residential properties in prime global hubs like Dubai and London. Enjoy daily distributed rental income paid directly in USDT and benefit from long-term capital appreciation under robust legal protection.',
      descFa: 'املاک و مستغلات همواره یکی از پرسودترین و پایدارترین روش‌های سرمایه‌گذاری بوده است. با توکنایز املاک ممتاز مسکونی و اداری در دبی و لندن، شما می‌توانید بدون درگیر شدن با فرآیندهای اداری و خرید ملک کامل، مالک بخشی از اسناد رسمی شوید و روزانه سود اجاره دلاری تتر دریافت نمایید.',
      badgeEn: 'Daily Passive USDT Yields',
      badgeFa: 'واریز روزانه سود اجاره به تتر',
      buttonTextEn: 'Explore Properties',
      buttonTextFa: 'بررسی املاک و مستغلات',
      icon: <Building className="w-16 h-16 text-blue-500" />,
      colorClass: 'text-blue-500',
      tagColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      gradient: 'from-blue-600/15 via-blue-500/5 to-transparent',
      borderGlow: 'border-blue-500/25 shadow-blue-500/5',
      actionUrl: 'real_estate',
      bgImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      tagEn: 'GLOBAL BLUE-CHIP STOCKS',
      tagFa: 'سهام شرکت‌های برتر تکنولوژی جهان',
      titleEn: 'Build Your Tech Portfolio with Fractional Global Shares',
      titleFa: 'سبد سرمایه‌گذاری هوشمند با سهام برترین شرکت‌های بین‌المللی',
      descEn: 'Own a piece of the world’s most innovative enterprises. Instantly trade fractional shares of blue-chip technology giants like Apple, NVIDIA, and Tesla directly on-chain. Enjoy frictionless 24/7 liquidity, instant USDT settlement, and absolute transparency without geographic barriers or broker markups.',
      descFa: 'مالکیت سهام برترین و پیشروترین شرکت‌های تکنولوژی جهان نظیر انویدیا، اپل و تسلا را تجربه کنید. با حذف مرزهای جغرافیایی و فرآیندهای پیچیده کارگزاری سنتی، بر روی زنجیره به صورت آنی معامله کرده و ارزش دارایی‌های خود را همگام با رشد غول‌های فناوری بین‌المللی ارتقا دهید.',
      badgeEn: '24/7 Frictionless Trading',
      badgeFa: 'تسویه آنی و نقدشوندگی بالا',
      buttonTextEn: 'Trade Blue-Chips',
      buttonTextFa: 'معامله سهام بین‌الملل',
      icon: <Globe2 className="w-16 h-16 text-purple-500" />,
      colorClass: 'text-purple-500',
      tagColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      gradient: 'from-purple-600/15 via-purple-500/5 to-transparent',
      borderGlow: 'border-purple-500/25 shadow-purple-500/5',
      actionUrl: 'global',
      bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  useEffect(() => {
    if (!carouselAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselAutoPlay]);

  return (
    <div className="w-full pb-16 animate-fade-in">

      {/* 0. Top Interactive Carousel Banner under Header - Full Width */}
      <section 
        onMouseEnter={() => setCarouselAutoPlay(false)}
        onMouseLeave={() => setCarouselAutoPlay(true)}
        className={`relative w-full border-b md:min-h-[440px] flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-lg ${
          theme === 'dark' 
            ? `bg-slate-950 border-slate-900/50 ${carouselSlides[currentSlide].borderGlow}` 
            : `bg-slate-50 border-slate-100 ${carouselSlides[currentSlide].borderGlow}`
        }`}
      >
        {/* Real-world asset background images with seamless transition & smooth zoom parallax */}
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              idx === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.bgImage}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.05]"
            />
            {/* Dynamic, directional responsive overlays for maximum text legibility */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              theme === 'dark'
                ? isRtl 
                  ? 'bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent'
                  : 'bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent'
                : isRtl
                  ? 'bg-gradient-to-l from-white via-white/88 to-transparent'
                  : 'bg-gradient-to-r from-white via-white/88 to-transparent'
            }`} />
          </div>
        ))}
        
        {/* Subtle grid overlay for high-tech digital aesthetic */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Content Wrapper aligned to max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-16 w-full flex-1 flex flex-col justify-between relative z-10 gap-4 md:gap-8">
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center w-full flex-1">
          
          {/* Slide Text Content */}
          <div className="lg:col-span-12 space-y-3.5 md:space-y-6 text-start flex flex-col justify-center">
            
            {/* Elegant Category Subtitle */}
            <div className="flex items-center gap-2 md:gap-2.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest">
              <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
                {isRtl ? carouselSlides[currentSlide].tagFa : carouselSlides[currentSlide].tagEn}
              </span>
              <span className="opacity-30">|</span>
              <span className="text-emerald-500">
                {isRtl ? carouselSlides[currentSlide].badgeFa : carouselSlides[currentSlide].badgeEn}
              </span>
            </div>

            {/* Slide Title */}
            <h2 className={`text-xl md:text-3xl lg:text-4xl font-black tracking-tight leading-snug md:leading-tight transition-all duration-500 max-w-4xl ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {isRtl ? carouselSlides[currentSlide].titleFa : carouselSlides[currentSlide].titleEn}
            </h2>

            {/* Slide Description */}
            <p className={`text-[11px] md:text-sm leading-relaxed max-w-4xl transition-all duration-500 opacity-90 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {isRtl ? carouselSlides[currentSlide].descFa : carouselSlides[currentSlide].descEn}
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap gap-2.5 md:gap-4 items-center">
              <button 
                onClick={() => onExplore(carouselSlides[currentSlide].actionUrl)}
                className="px-4 md:px-8 py-2.5 md:py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[11px] md:text-xs font-black transition-all hover:scale-[1.01] flex items-center gap-1.5 md:gap-2 cursor-pointer shadow-md shadow-blue-500/10"
              >
                <span>{isRtl ? carouselSlides[currentSlide].buttonTextFa : carouselSlides[currentSlide].buttonTextEn}</span>
                {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </button>
              
              <button 
                onClick={onSupport}
                className={`px-3.5 md:px-5 py-2.5 md:py-3.5 rounded-xl text-[11px] md:text-xs font-bold transition-all border cursor-pointer ${
                  theme === 'dark' 
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800' 
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isRtl ? 'مشاوره رایگان RWA' : 'Free RWA Consultation'}
              </button>
            </div>
          </div>

        </div>

        {/* Carousel Footer controls (Pagination dots & Nav buttons) */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/10 dark:border-slate-100/10 relative z-10">
          
          {/* Pagination Indicators (dots) */}
          <div className="flex items-center gap-1.5">
            {carouselSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setCarouselAutoPlay(false);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-6 bg-blue-500' 
                    : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
                setCarouselAutoPlay(false);
              }}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                theme === 'dark' 
                  ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white' 
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800'
              }`}
            >
              {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
            <button
              onClick={() => {
                setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
                setCarouselAutoPlay(false);
              }}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                theme === 'dark' 
                  ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white' 
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800'
              }`}
            >
              {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>

        </div>
        </div>
      </section>

      {/* Inner page content wrapping the rest of the sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-24 mt-8 md:mt-16">

      {/* 1. Hero Section & Interactive Principles Blueprint */}
      <section className="relative pt-4 md:pt-12 pb-6 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Hero Left (Text content & core metrics) */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 text-start self-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{isRtl ? 'پلتفرم اثبات‌شده دارایی‌های واقعی (RWA)' : 'Battle-Tested Real World Asset (RWA) Ecosystem'}</span>
            </div>

            <h1 className={`text-2xl md:text-5xl lg:text-[46px] font-black tracking-tight leading-tight md:leading-[1.15] ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t.homeHeroTitle}
            </h1>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
              {t.homeHeroSubtitle}
            </p>

            <div className="flex flex-wrap gap-2.5 md:gap-4 pt-1 md:pt-2">
              <button 
                onClick={onExplore}
                className="px-5 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl md:rounded-2xl text-xs md:text-sm font-extrabold transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02] flex items-center gap-1.5 md:gap-2 cursor-pointer"
              >
                <span>{t.homeExploreBtn}</span>
                {isRtl ? <ArrowLeft size={14} md:size={16} /> : <ArrowRight size={14} md:size={16} />}
              </button>

              <button 
                onClick={onSupport}
                className={`px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-extrabold transition-all border cursor-pointer hover:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'border-slate-800 bg-slate-900/60 text-slate-200 hover:bg-slate-800' 
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {t.homeLearnMoreBtn}
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6 border-t border-slate-800/20 text-[10px] md:text-xs">
              <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] text-slate-500 block uppercase font-bold">{isRtl ? 'پشتیبان دارایی' : 'Vault Backing'}</span>
                <span className={`font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {isRtl ? '۱۰۰٪ فیزیکی' : '100% Tangible'}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] text-slate-500 block uppercase font-bold">{isRtl ? 'دوره تسویه' : 'Liquidity Cycle'}</span>
                <span className="text-blue-500 font-black">
                  {isRtl ? 'آنی ۲۴/۷' : 'Instant 24/7'}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] text-slate-500 block uppercase font-bold">{isRtl ? 'نظارت قانونی' : 'Compliance'}</span>
                <span className="text-emerald-500 font-black">
                  {isRtl ? 'حسابرسی SGS' : 'SGS Certified'}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right - Interactive RWA Tokenization Lifecycle Flowchart */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            
            {/* Visual Panel Header */}
            <div className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border ${
              theme === 'dark' 
                ? 'bg-slate-900/45 border-slate-800/80 text-white' 
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
                <div>
                  <h3 className="text-xs md:text-sm font-black tracking-tight flex items-center gap-1.5 md:gap-2">
                    <Activity size={14} className="text-emerald-500 animate-pulse" />
                    <span>{isRtl ? 'اصول سرمایه‌گذاری و فرآیند توکنایزاسیون' : 'AssetChain RWA Tokenization Blueprint'}</span>
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-slate-400 mt-0.5">
                    {isRtl 
                      ? 'مراحل گام‌به‌گام فیزیکی تا دیجیتالی دارایی‌های ثبت شده را بررسی کنید' 
                      : 'Explore how physical gold, metals, and real estate securely transition to on-chain tokens.'}
                  </p>
                </div>
                
                {/* Mode Indicator */}
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/15 uppercase self-start sm:self-auto">
                  {isRtl ? 'وضعیت شفاف درون‌زنجیره‌ای' : 'Real-time Transparency Engine'}
                </span>
              </div>

              {/* Graphical Pipeline Flowchart Nodes */}
              <div className="relative grid grid-cols-4 gap-1.5 md:gap-2 mb-6 md:mb-8">
                
                {/* Connecting animated vector pipeline background */}
                <div className="absolute top-[21px] md:top-[26px] left-[12%] right-[12%] h-[2px] bg-slate-800/80 -z-0">
                  <div className="h-full bg-gradient-to-r from-amber-500 via-blue-500 to-purple-500 animate-pulse transition-all duration-1000" style={{
                    width: `${((activeStep + 1) / 4) * 100}%`
                  }}></div>
                </div>

                {pipelineSteps.map((step, idx) => {
                  const isActive = activeStep === step.id;
                  const isCompleted = activeStep >= step.id;

                  return (
                    <button
                      key={step.id}
                      onClick={() => {
                        setActiveStep(step.id);
                        setAutoRotate(false); // Stop auto rotate on manual click
                      }}
                      className="flex flex-col items-center text-center focus:outline-none group relative z-10 cursor-pointer"
                    >
                      {/* Node Circle */}
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? `${step.badgeColor} scale-105 md:scale-110 shadow-lg ${step.glowColor}` 
                          : isCompleted 
                            ? 'bg-blue-600/15 border-blue-500 text-blue-500 shadow-md' 
                            : theme === 'dark' 
                              ? 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700' 
                              : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                      }`}>
                        {step.icon}
                        
                        {/* Status Dot */}
                        {isActive && (
                          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-900 animate-ping"></span>
                        )}
                      </div>

                      {/* Small Label */}
                      <span className={`text-[9px] md:text-[10px] font-bold mt-1.5 md:mt-2.5 transition-colors duration-300 ${
                        isActive 
                          ? 'text-blue-500' 
                          : theme === 'dark' ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-850'
                      }`}>
                        {isRtl ? step.titleFa.split(' ')[1] : step.titleEn.split(' ')[1]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interactive Card - Displaying specific step details & audit proof */}
              <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-slate-950/90 border-slate-800 text-slate-100' 
                  : 'bg-white border-slate-200 text-slate-850'
              }`}>
                {/* Decorative watermarked background icon */}
                <div className="absolute right-4 bottom-4 text-slate-800/10 -z-0 pointer-events-none scale-[2.5] md:scale-[3]">
                  {currentActiveStepData.icon}
                </div>

                <div className="relative z-10 space-y-3 md:space-y-4">
                  {/* Step Title & Status Badge */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-0.5">
                      <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500">
                        {isRtl ? 'گام پردازشی دارایی' : 'RWA PRINCIPLE STEP'}
                      </span>
                      <h4 className="text-sm md:text-base font-black leading-tight">
                        {isRtl ? currentActiveStepData.titleFa : currentActiveStepData.titleEn}
                      </h4>
                    </div>
                    <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-lg text-[8px] md:text-[9px] font-bold border shrink-0 ${currentActiveStepData.badgeColor}`}>
                      {isRtl ? currentActiveStepData.metricFa : currentActiveStepData.metricEn}
                    </span>
                  </div>

                  {/* Step Description */}
                  <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                    {isRtl ? currentActiveStepData.descFa : currentActiveStepData.descEn}
                  </p>

                  {/* Key Proof metrics Table (The visual proof of reserve aspect) */}
                  <div className={`grid grid-cols-2 gap-2 md:gap-3 p-3 rounded-xl text-[10px] md:text-[11px] border ${
                    theme === 'dark' ? 'bg-slate-900/50 border-slate-800/60' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div>
                      <span className="text-slate-500 block">{isRtl ? 'ناظر و متولی قانون:' : 'Entity / Partner:'}</span>
                      <span className="font-extrabold text-slate-350 md:text-slate-300">
                        {isRtl ? currentActiveStepData.details.partnerFa : currentActiveStepData.details.partnerEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{isRtl ? 'آدرس فیزیکی ذخیره:' : 'Physical Location:'}</span>
                      <span className="font-extrabold text-slate-350 md:text-slate-300">
                        {isRtl ? currentActiveStepData.details.locationFa : currentActiveStepData.details.locationEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{isRtl ? 'ارزش بیمه ذخایر:' : 'Insurance Guarantee:'}</span>
                      <span className="font-extrabold text-emerald-500">
                        {isRtl ? currentActiveStepData.details.insuredValueFa : currentActiveStepData.details.insuredValueEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{isRtl ? 'وضعیت تایید فنی:' : 'Compliance Status:'}</span>
                      <span className="font-extrabold text-blue-500">
                        {isRtl ? currentActiveStepData.details.registryFa : currentActiveStepData.details.registryEn}
                      </span>
                    </div>
                  </div>

                  {/* Blockchain Live Verification Status Line */}
                  <div className="flex items-center justify-between text-[9px] md:text-[10px] text-slate-500 pt-0.5">
                    <span className="flex items-center gap-1 md:gap-1.5">
                      <Network size={11} className="text-emerald-500 animate-pulse" />
                      <span>{isRtl ? 'کد رهگیری رمزنگاری شده:' : 'On-Chain Ledger Hash:'}</span>
                    </span>
                    <span className="font-mono text-slate-400 hover:text-slate-200 transition-colors cursor-pointer select-all">
                      0x4f72ea...d40b{activeStep}e2
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Unified Key Statistics */}
      <section className={`rounded-2xl md:rounded-3xl border p-5 md:p-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900/30 border-slate-850/80' : 'bg-white border-slate-200'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/65">
          <div className="pb-5 md:pb-0">
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{t.statTvl}</p>

            <p className={`text-2xl md:text-4xl font-black mt-1.5 md:mt-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              ${stats.tvl.toLocaleString()}
            </p>
            <span className="text-emerald-500 text-[10px] md:text-xs font-bold mt-0.5 md:mt-1 inline-block">
              +14.2% {isRtl ? 'رشد در ماه گذشته' : 'vs last month'}
            </span>
          </div>

          <div className="py-5 md:py-0 md:px-4">
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{t.statApy}</p>
            <p className={`text-2xl md:text-4xl font-black mt-1.5 md:mt-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              16.45%
            </p>
            <span className="text-blue-500 text-[10px] md:text-xs font-bold mt-0.5 md:mt-1 inline-block italic">
              {isRtl ? 'پشتوانه درآمدی املاک و معادن واقعی' : 'Backed by tangible real estate & mines'}
            </span>
          </div>

          <div className="pt-5 md:pt-0">
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{t.statSold}</p>
            <p className={`text-2xl md:text-4xl font-black mt-1.5 md:mt-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {stats.soldUnits.toLocaleString()} <span className="text-xs md:text-sm font-normal text-slate-500">{isRtl ? 'توکن فعال' : 'Active Tokens'}</span>
            </p>
            <span className="text-purple-500 text-[10px] md:text-xs font-bold mt-0.5 md:mt-1 inline-block">
              {isRtl ? 'بیش از ۱۵ دسته دارایی معتبر' : 'Across 15+ certified asset classes'}
            </span>
          </div>
        </div>
      </section>

      {/* 0. Portfolio Dashboard Section (placed under Hero and Statistics) */}
      <section id="landing-portfolio-dashboard" className="relative pt-2 md:pt-8" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="space-y-4 md:space-y-6">
          {/* Section Heading */}
          <div className="text-start space-y-1.5 md:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{isRtl ? 'بخش کاربری • مدیریت یکپارچه سود انباشته' : 'User Station • Unified Asset & Yield Hub'}</span>
            </div>
            <h2 className={`text-xl md:text-4xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {isRtl ? 'میزان سوددهی و سبد دارایی‌های شما' : 'Your Personal Assets & Yield Performance'}
            </h2>
            <p className={`text-[11px] md:text-sm max-w-3xl leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRtl 
                ? 'روند زنده رشد سرمایه، ارزش دلاری دارایی‌ها و میزان بازدهی کل (APY) ذخایر وثیقه شده فیزیکی شما.'
                : 'Monitor your dynamic capital growth, tokenized physical holdings, and live cumulative yield returns.'}
            </p>
          </div>

          {/* Grid Layout containing Chart and Portfolio Card details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
            
            {/* Interactive Performance Chart (8 columns on large screens) */}
            <div className="lg:col-span-8 w-full">
              <YieldChart 
                theme={theme} 
                lang={lang} 
                isPortfolioMode={true} 
                isLoggedIn={isLoggedIn} 
                onLoginClick={onLoginClick}
                myPortfolio={myPortfolio}
              />
            </div>

            {/* Asset Allocation Details & Value Summary (4 columns on large screens) */}
            <div className="lg:col-span-4 w-full h-full flex flex-col justify-between space-y-4 md:space-y-6">
              
              {/* Value Summary Box */}
              <div className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border shadow-sm transition-all relative overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-slate-900/80 to-slate-950 border-slate-800/80' 
                  : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
              }`}>
                <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                  {isRtl ? 'مجموع ارزش دارایی‌ها و تراز حساب' : 'Total Asset Valuation & Balance'}
                </span>
                
                {/* Balance display */}
                <div className="space-y-1">
                  <h3 className={`text-xl md:text-3xl font-black font-mono tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {isLoggedIn 
                      ? `${(15450 + (myPortfolio.reduce((acc: number, item: any) => {
                          const asset = assets.find(a => a.id === item.assetId);
                          return acc + (item.shares * (asset?.price || 0));
                        }, 0))).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`
                      : '$8,319.40 USDT'}
                  </h3>
                  <p className="text-[9px] md:text-[10px] text-slate-400">
                    {isLoggedIn 
                      ? (isRtl 
                          ? 'شامل تراز نقد حساب + کل ارزش بازار دارایی‌های توکنایز شده فیزیکی' 
                          : 'Includes free wallet USDT + total physical token values')
                      : (isRtl 
                          ? 'حساب دمو • نمونه عملکرد سرمایه‌گذاری برای طلا و املاک' 
                          : 'Demo Account • Standard performance for gold and luxury villa')}
                  </p>
                </div>

                {/* Return metrics */}
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-slate-800/20 flex items-center justify-between">
                  <div>
                    <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase">{isRtl ? 'سود ناخالص (PnL)' : 'Total Gross PnL'}</p>
                    <p className="text-xs md:text-sm font-extrabold text-emerald-500 font-mono">
                      {isLoggedIn ? '+319.40 USDT' : '+1,119.40 USDT'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase">{isRtl ? 'میانگین بازدهی' : 'Average APY'}</p>
                    <p className="text-xs md:text-sm font-extrabold text-blue-500 font-mono">
                      +16.45%
                    </p>
                  </div>
                </div>
              </div>

              {/* Assets List cards inside the hub */}
              <div className="space-y-2.5">
                <span className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-400 block px-1">
                  {isRtl ? 'توزیع دارایی‌های سبد شما' : 'Your Holdings Distribution'}
                </span>

                {/* If Logged in, show actual assets, else show stunning premium placeholders */}
                {isLoggedIn && myPortfolio && myPortfolio.length > 0 ? (
                  myPortfolio.map((item: any) => {
                    const asset = assets.find(a => a.id === item.assetId);
                    if (!asset) return null;
                    const val = item.shares * asset.price;
                    return (
                      <div 
                        key={item.assetId}
                        className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl border flex items-center justify-between transition-all ${
                          theme === 'dark' 
                            ? 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700/60' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="text-[10px] md:text-xs font-black text-blue-500 font-mono">#{asset.id}</span>
                          <div>
                            <h4 className={`text-[11px] md:text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                              {isRtl ? asset.faName : asset.enName}
                            </h4>
                            <p className="text-[8px] md:text-[9px] text-slate-400 mt-0.5">
                              {item.shares.toLocaleString()} {isRtl ? 'سهم توکنایز شده' : 'Tokens'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-[11px] md:text-xs font-black font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                            ${val.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                          </p>
                          <p className="text-[8px] md:text-[9px] text-emerald-500 font-bold mt-0.5">
                            {asset.change >= 0 ? '+' : ''}{asset.change}%
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    {/* Demo Asset 1: Gold */}
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl border flex items-center justify-between ${
                      theme === 'dark' ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-[10px] md:text-xs font-black text-amber-500 font-mono">#GOLD</span>
                        <div>
                          <h4 className={`text-[11px] md:text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {isRtl ? 'شمش طلای فیزیکی ۲۴ عیار' : 'Physical 24K Gold Bullion'}
                          </h4>
                          <p className="text-[8px] md:text-[9px] text-slate-400 mt-0.5">
                            3 {isRtl ? 'سهم توکنایز شده' : 'Tokens'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-[11px] md:text-xs font-black font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                          $3,585.0
                        </p>
                        <p className="text-[8px] md:text-[9px] text-emerald-500 font-bold mt-0.5">
                          +1.2%
                        </p>
                      </div>
                    </div>

                    {/* Demo Asset 2: Real Estate */}
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl border flex items-center justify-between ${
                      theme === 'dark' ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-[10px] md:text-xs font-black text-blue-500 font-mono">#JUMEIRAH</span>
                        <div>
                          <h4 className={`text-[11px] md:text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {isRtl ? 'ویلا ساحلی نخل جمیرا دبی' : 'Dubai Palm Jumeirah Villa'}
                          </h4>
                          <p className="text-[8px] md:text-[9px] text-slate-400 mt-0.5">
                            15 {isRtl ? 'سهم توکنایز شده' : 'Tokens'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-[11px] md:text-xs font-black font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                          $3,750.0
                        </p>
                        <p className="text-[8px] md:text-[9px] text-emerald-500 font-bold mt-0.5">
                          +3.4%
                        </p>
                      </div>
                    </div>

                    {/* Demo Asset 3: Steel */}
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl border flex items-center justify-between ${
                      theme === 'dark' ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-[10px] md:text-xs font-black text-emerald-500 font-mono">#FOOLAD</span>
                        <div>
                          <h4 className={`text-[11px] md:text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {isRtl ? 'توکن فولاد مبارکه اصفهان' : 'Isfahan Mobarakeh Steel'}
                          </h4>
                          <p className="text-[8px] md:text-[9px] text-slate-400 mt-0.5">
                            12,000 {isRtl ? 'سهم توکنایز شده' : 'Tokens'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-[11px] md:text-xs font-black font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                          $984.0
                        </p>
                        <p className="text-[8px] md:text-[9px] text-emerald-500 font-bold mt-0.5">
                          +2.4%
                        </p>
                      </div>
                    </div>
                  </>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Why AssetChain Bento Highlights */}
      <section className="space-y-6 md:space-y-12">
        <div className="text-center space-y-2 md:space-y-3">
          <h2 className={`text-xl md:text-3xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {t.homeFeatureTitle}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            {t.homeFeatureSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border space-y-3 md:space-y-4 shadow-sm transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <ShieldCheck size={20} md:size={24} />
            </div>
            <h3 className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeFeature1Title}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeFeature1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border space-y-3 md:space-y-4 shadow-sm transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Coins size={20} md:size={24} />
            </div>
            <h3 className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeFeature2Title}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeFeature2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border space-y-3 md:space-y-4 shadow-sm transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <Lock size={20} md:size={24} />
            </div>
            <h3 className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeFeature3Title}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeFeature3Desc}
            </p>
          </div>

          {/* Card 4 */}
          <div className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border space-y-3 md:space-y-4 shadow-sm transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <TrendingUp size={20} md:size={24} />
            </div>
            <h3 className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeFeature4Title}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeFeature4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Featured Assets Marketplace Showcase */}
      <section className="space-y-6 md:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="text-start space-y-1.5">
            <h2 className={`text-xl md:text-3xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {isRtl ? 'فرصت‌های داغ بازار دارایی‌ها' : 'Featured Investment Opportunities'}
            </h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
              {isRtl ? 'برخی از محبوب‌ترین توکن‌های با پشتوانه واقعی دنیای فیزیکی که کاربران در حال حاضر معامله می‌کنند.' : 'Explore a few of our most popular real world assets actively being traded.'}
            </p>
          </div>
          <button 
            onClick={onExplore}
            className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600/25 text-blue-500 rounded-lg text-[11px] md:text-xs font-extrabold transition-all shrink-0 flex items-center gap-1 cursor-pointer align-middle self-start md:self-auto"
          >
            <span>{isRtl ? 'مشاهده همه بازارها' : 'View All Markets'}</span>
            <ChevronRight size={12} className={isRtl ? 'rotate-180' : ''} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {featuredAssets.map(asset => (
            <div 
              key={asset.id}
              className={`rounded-2xl md:rounded-3xl border overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              {/* Cover */}
              <div className={`p-4 md:p-5 relative overflow-hidden h-24 md:h-28 flex flex-col justify-between ${
                theme === 'dark' ? 'bg-slate-950/40' : 'bg-slate-100/60'
              }`}>
                <div className="flex items-center justify-between z-10">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-[8px] md:text-[9px] font-bold uppercase ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-600 border'
                  }`}>
                    <img 
                      src={`https://flagcdn.com/16x12/${asset.flag}.png`} 
                      alt={asset.flag}
                      className="rounded-[2px]"
                      referrerPolicy="no-referrer"
                    />
                    <span>{isRtl ? asset.locationFa : asset.locationEn}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-mono font-bold text-slate-500">#{asset.id}</span>
                </div>

                <h3 className={`text-sm md:text-base font-bold tracking-tight z-10 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {isRtl ? asset.faName : asset.enName}
                </h3>
              </div>

              {/* Specs */}
              <div className="p-4 md:p-5 space-y-3.5">
                <div className="grid grid-cols-2 gap-2 text-[11px] md:text-xs">
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] block font-bold uppercase">{t.tokenPrice}</span>
                    <span className={`text-sm md:text-base font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{asset.price} USDT</span>
                  </div>
                  <div className="text-end">
                    <span className="text-slate-400 text-[9px] md:text-[10px] block font-bold uppercase">{t.expectedYield}</span>
                    <span className="text-emerald-500 text-xs md:text-sm font-black flex items-center justify-end gap-0.5">
                      <ArrowUpRight size={12} />
                      <span>+{asset.change}%</span>
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] md:text-[10px] font-medium text-slate-400">
                    <span>{t.saleProgress}</span>
                    <span>{asset.progress}%</span>
                  </div>
                  <div className={`h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className="h-full bg-blue-500" style={{ width: `${asset.progress}%` }}></div>
                  </div>
                </div>

                <button 
                  onClick={onExplore}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg md:rounded-xl text-xs font-bold transition-all mt-1 cursor-pointer"
                >
                  {t.buyNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Footer Card */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden text-white text-center shadow-xl">
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-xl mx-auto space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
            {isRtl ? 'آماده سرمایه‌گذاری هستید؟' : 'Ready to Start Tokenizing Your Wealth?'}
          </h2>
          <p className="text-blue-100 text-[11px] md:text-sm leading-relaxed opacity-90">
            {isRtl 
              ? 'همین حالا وارد پنل بازارها شوید و از طلا تا املاک لوکس جمیرا را به شکل توکن‌های خرد شده خریداری کنید.' 
              : 'Join thousands of globally certified RWA investors and trade fractions of physical metals and prime real estates.'}
          </p>
          <div className="flex justify-center pt-1">
            <button 
              onClick={onExplore}
              className="px-6 md:px-8 py-2.5 md:py-3.5 bg-white text-blue-600 rounded-lg md:rounded-xl text-xs font-black hover:bg-slate-50 transition-all shadow-lg hover:scale-[1.02] flex items-center gap-1 cursor-pointer"
            >
              <span>{t.homeExploreBtn}</span>
              {isRtl ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
            </button>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section (moved here to be full width at the bottom) */}
      <section className="space-y-6 md:space-y-12 pt-4 md:pt-8">
        <div className="text-center space-y-2 md:space-y-3">
          <h2 className={`text-xl md:text-3xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {t.homeHowItWorksTitle}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            {isRtl ? 'در کمتر از چند دقیقه مالک دارایی‌های فیزیکی بیمه‌شده در سراسر جهان شوید.' : 'Start owning high-yield global physical reserves in a few simple steps.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center space-y-2 md:space-y-3 p-2 md:p-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto text-base md:text-xl font-black">
              ۱
            </div>
            <h3 className={`text-sm md:text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeHowStep1}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeHowStep1Desc}
            </p>
          </div>

          <div className="text-center space-y-2 md:space-y-3 p-2 md:p-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto text-base md:text-xl font-black">
              ۲
            </div>
            <h3 className={`text-sm md:text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeHowStep2}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeHowStep2Desc}
            </p>
          </div>

          <div className="text-center space-y-2 md:space-y-3 p-2 md:p-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto text-base md:text-xl font-black">
              ۳
            </div>
            <h3 className={`text-sm md:text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.homeHowStep3}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">
              {t.homeHowStep3Desc}
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
