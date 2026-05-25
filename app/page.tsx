export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Chrome &amp; Firefox Extension
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Registrars From{" "}
          <span className="text-[#58a6ff]">Sniping Your Domains</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Every time you search for a domain, registrars log your query. DomainShield intercepts
          those requests so your research stays private.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get DomainShield — $9/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. Instant download after payment.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { step: "1", title: "Install Extension", desc: "Add to Chrome or Firefox in seconds." },
          { step: "2", title: "Browse Normally", desc: "Search domains on any registrar site." },
          { step: "3", title: "Stay Private", desc: "Tracking requests are silently blocked." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] font-bold text-xl mb-2">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Blocks GoDaddy, Namecheap, Google Domains & more",
              "Chrome + Firefox support",
              "Configurable block rules",
              "Automatic rule updates",
              "Priority support"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does domain sniping actually happen?",
              a: "When you search for a domain, registrars record that query. Some registrars or data brokers then register those domains before you can, or raise prices based on demand signals."
            },
            {
              q: "Which registrars does DomainShield block?",
              a: "GoDaddy, Namecheap, Google Domains, Porkbun, Dynadot, and more. The block list is updated automatically with your subscription."
            },
            {
              q: "Will it break normal browsing?",
              a: "No. DomainShield only intercepts search-tracking requests. You can still complete purchases and manage domains normally."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} DomainShield. All rights reserved.
      </footer>
    </main>
  );
}
