// Three standalone landing page templates for Next.js (App Router compatible)
// Each template is a functional React component you can drop into your `app/page.tsx`
// or reuse as standalone sections.

// ------------------------------
// TEMPLATE 1 — SaaS Minimal
// ------------------------------
export const LandingSaaSMinimal = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="w-full py-6 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">SaaSify</h1>
        <button className="px-4 py-2 bg-black text-white rounded-xl">Sign in</button>
      </header>

      <section className="px-6 mt-20 text-center">
        <h2 className="text-5xl font-bold leading-tight mb-4">Boost your workflow with AI automation</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          A simple and powerful tool to automate your business tasks without technical skills.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-xl text-lg">Start Free Trial</button>
      </section>

      <section className="px-6 mt-24 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {["Fast", "Powerful", "Secure"].map((item) => (
          <div key={item} className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">{item}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </section>

      <footer className="mt-24 py-6 text-center text-gray-500 text-sm">© 2025 SaaSify</footer>
    </div>
  );
};

// ------------------------------
// TEMPLATE 2 — Creative Agency
// ------------------------------
export const LandingAgencyCreative = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="py-6 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Nova Agency</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="px-6 mt-14 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">We design experiences that elevate brands</h2>
          <p className="text-lg text-gray-700 mb-8">
            A creative team crafting digital products, websites and visual identities.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-xl text-lg">Our Portfolio</button>
        </div>
        <div className="bg-gray-300 h-80 rounded-3xl"></div>
      </section>

      <section id="services" className="px-6 mt-24 max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {["Branding", "Web Design", "Marketing"].map((service) => (
          <div key={service} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">{service}</h3>
            <p className="text-gray-600">High-quality services designed to elevate your business.</p>
          </div>
        ))}
      </section>

      <footer className="mt-24 py-6 text-center text-gray-600 text-sm">© 2025 Nova Agency</footer>
    </div>
  );
};

// ------------------------------
// TEMPLATE 3 — Product Launch Dark
// ------------------------------
export const LandingProductDark = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="w-full py-6 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Nebula Tech</h1>
        <button className="px-4 py-2 border border-white rounded-xl">Join Waitlist</button>
      </header>

      <section className="px-6 mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-6xl font-extrabold mb-6 leading-tight">The next-generation smart device</h2>
        <p className="text-lg text-gray-300 mb-10">
          Ultra-fast performance. Intelligent features. A design built for the future.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-xl text-lg">Pre-order Now</button>
      </section>

      <section className="px-6 mt-28 max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
        {["AI Powered", "4-Day Battery", "Seamless Sync"].map((feature) => (
          <div key={feature} className="p-6 border border-gray-700 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            <p className="text-gray-400">Cutting-edge technology engineered for performance.</p>
          </div>
        ))}
      </section>

      <footer className="mt-24 py-6 text-center text-gray-500 text-sm">© 2025 Nebula Tech</footer>
    </div>
  );
};