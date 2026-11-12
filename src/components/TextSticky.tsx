import React from 'react';

export function TextSticky() {
  return (
    <section className="text-sticky py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-sm font-mono uppercase tracking-wider text-[#666] mb-4">
            Digital Development Studio in Brussels &amp; New York.
          </p>
          <h2 className="text-[clamp(2.5rem,4.5vw,3.75rem)] font-serif font-normal leading-[1.15] tracking-tight text-[#111111]">
            We build systems your business runs on.
          </h2>
        </div>

        {/* Right Scrollable Pillars */}
        <div className="lg:col-span-7 space-y-20">
          {/* Pillar 1 */}
          <div className="border-b border-[#e5dfdf] pb-16 last:border-b-0">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6">
              Run on systems that work
            </h3>
            <p className="text-lg leading-relaxed text-[#444] mb-8 font-normal">
              Your website, shop, or application is not a brochure. It is the operational core of your business, and we build it that way.
            </p>
            <ul className="space-y-4 text-base text-[#333]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">Web platforms</strong>: High-end websites built as infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">eCommerce</strong>: Shop systems connected to your CRM, ERP and fulfillment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">Applications</strong>: Custom tools and SaaS products that replace manual work</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="border-b border-[#e5dfdf] pb-16 last:border-b-0">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6">
              Connect what you already use
            </h3>
            <p className="text-lg leading-relaxed text-[#444] mb-8 font-normal">
              Most companies run on more tools than they can count, and few of them talk to each other. We build the connections: APIs, integrations, and data flows that turn separate systems into one operation.
            </p>
            <ul className="space-y-4 text-base text-[#333]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">Integrations</strong>: Your CRM, ERP, invoicing and marketing tools working as one</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">APIs and data flows</strong>: Reliable connections between every system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">MCP for AI</strong>: Give AI controlled, secure access to your existing software</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="pb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6">
              Automate the work that slows you down
            </h3>
            <p className="text-lg leading-relaxed text-[#444] mb-8 font-normal">
              Not everything needs AI. But the repetitive, multi-step work in your operation usually has a faster answer. We start with discovery, map where automation actually helps, and build from there.
            </p>
            <ul className="space-y-4 text-base text-[#333]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">AI agents</strong>: Multi-hour tasks handled in minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">Workflow automation</strong>: Manual steps replaced by processes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0" />
                <span><strong className="font-semibold text-[#111]">AI discovery</strong>: We map where AI adds value</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextSticky;
