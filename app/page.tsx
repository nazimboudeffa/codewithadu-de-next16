'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import IntroFAQ from "./components/IntroFAQ";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <main>
    <section className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      <div className="flex flex-col items-center justify-center absolute z-10 px-4 sm:px-6 text-center max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 text-white drop-shadow-2xl leading-tight">
          {t.hero.title}
        </h2>
        <Link 
          className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base sm:text-lg font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transform w-full sm:w-auto max-w-xs sm:max-w-none"
          href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </Link>
      </div>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 relative overflow-hidden">
      <div className="w-full max-w-4xl space-y-4 sm:space-y-6 relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-4">{t.intro.aboutTitle}</h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 border-l-4 border-green-500 pl-4 sm:pl-6 md:pl-8 bg-white/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-xl">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line1}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line2}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line3}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line4}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line5}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line6}
          </p>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-3 sm:mb-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 px-4">{t.pricing.title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 px-4">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Learn Column */}
          <div className="group bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center mb-6 sm:mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-4 sm:p-5 mb-3 sm:mb-4 text-3xl sm:text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2">{t.pricing.learn.title}</h3>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.learn.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.learn.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.learn.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.learn.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.learn.step5}</span>
              </li>
              <li className="flex items-start relative z-10">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  href="https://learn.codewithadu.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 underline hover:text-green-600 hover:no-underline transition-colors duration-200 cursor-pointer"
                > 
                {t.pricing.learn.step6}
                </Link>
              </li>
            </ul>
          </div>

          {/* Build Column - Featured */}
          <div className="group bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-6 sm:p-8 pt-10 sm:pt-12 border-2 border-green-500 transform md:scale-105 hover:scale-105 md:hover:scale-110 relative transition-all duration-500 hover:shadow-green-500/30 hover:shadow-3xl overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
              {t.pricing.build.featured}
            </div>
            <div className="text-center mb-6 sm:mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-4 sm:p-5 mb-3 sm:mb-4 text-3xl sm:text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2">{t.pricing.build.title}</h3>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.build.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.build.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.build.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.build.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.build.step5}</span>
              </li>
              <li className="flex items-start relative z-10">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  href="https://ui.codewithadu.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 underline hover:text-green-600 hover:no-underline transition-colors duration-200 cursor-pointer"
                > 
                {t.pricing.build.step6}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ship Column */}
          <div className="group bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center mb-6 sm:mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-4 sm:p-5 mb-3 sm:mb-4 text-3xl sm:text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2">{t.pricing.ship.title}</h3>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.ship.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.ship.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.ship.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.ship.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{t.pricing.ship.step5}</span>
              </li>
              <li className="flex items-start relative z-10">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://saas.codewithadu.de"
                  className="text-gray-700 underline hover:text-green-600 hover:no-underline transition-colors duration-200 cursor-pointer"
                > 
                {t.pricing.ship.step6}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Bottom */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto border-2 border-green-500 hover:shadow-green-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="mb-6 sm:mb-8 relative z-10">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2 sm:mb-3">{t.pricing.price}</div>
            <p className="text-gray-700 text-lg sm:text-xl font-medium">{t.pricing.priceSubtitle}</p>
          </div>
          <Link 
            href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
            className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg sm:text-xl font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 relative group w-full sm:w-auto"
          >
            <span className="relative z-10">{t.pricing.cta}</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>

    <IntroFAQ />

    <section className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 bg-linear-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
      <div className="relative z-10 text-center mb-8 sm:mb-12 px-4">
        <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
          <span className="border-b-2 border-gray-800/50 group-hover:border-green-600 transition-colors duration-300">{t.footer.keepInTouch}</span>
        </p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <Link href="https://www.linkedin.com/in/nazim-b-4422b43a2" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-logo.png" alt="LinkedIn" width={64} height={64} />
          </Link>
          <Link href="https://substack.com/@nazimboudeffa" target="_blank" rel="noopener noreferrer">
            <Image src="/substack-logo.png" alt="Substack" width={40} height={40} />
          </Link>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 mx-auto max-w-2xl leading-relaxed">
          {t.footer.note}
        </p>
      </div>
      
      {/* YouTube Video Embed */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative w-full rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-green-200/50 hover:ring-green-300 transition-all duration-300 transform sm:hover:scale-105">
          <div className="relative w-full pb-[56.25%] bg-black/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/_ZKNoGa9eOI?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
      {/* Footer with two example links */}
      <footer className="w-full py-6 border-t bg-gray-50 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col px-4">
          <h1 className="font-semibold text-gray-700 text-lg">Explore more experimentations</h1>
          <a href="https://learn-gamedev-next16.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn GameDev</a>
          <a href="https://learn-trading-next16.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn Trading</a>
          <a href="https://learn-guitare-next16-phaser3.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn Guitare</a>
          <a href="https://maphilosophie.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Philosphy in French</a>
          <a href="https://malitterature.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Literature in French</a>
        </div>
      </footer>
    </main>
  );
}
