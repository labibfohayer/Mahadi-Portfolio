import React from 'react';

export function Footer() {
  return (
    <footer className="footer bg-[#fdf9f9] text-[#111111] pt-24 pb-16 px-6 md:px-12 border-t border-[#eee]">
      <div className="max-w-[1440px] mx-auto">
        {/* Office Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* New York Card */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4]">
            <img
              src="/textures/weichie-office-new-york-200x300.webp"
              alt="New York, USA"
              loading="eager"
              className="w-full sm:w-44 h-56 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666]">We are closed</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#111111] mb-2">New York, USA</h3>
                <p className="text-sm text-[#555] mb-4">Monday to Friday 9am to 5pm</p>
                <a
                  href="tel:+19298225127"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#ff4f31] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 0C5.53043 0 6.03899 0.210865 6.41406 0.585938L6.54688 0.732422C6.83855 1.08833 7 1.53581 7 2V5C7 5.31049 6.92792 5.61682 6.78906 5.89453L6.67285 6.0957C6.54602 6.28934 6.38629 6.45998 6.2002 6.59961L5.73242 6.95117C5.54884 7.09135 5.41944 7.29086 5.36621 7.51562C5.31305 7.74028 5.3393 7.97606 5.44043 8.18359C6.80711 10.9595 9.05446 13.2052 11.832 14.5684C11.9868 14.6394 12.1563 14.6689 12.3242 14.6562L12.4912 14.6299C12.7117 14.5748 12.9073 14.4455 13.0449 14.2646L13.4004 13.7998C13.5867 13.5516 13.8279 13.3497 14.1055 13.2109C14.3832 13.0721 14.6895 13 15 13H18C18.5304 13 19.039 13.2109 19.4141 13.5859L19.5469 13.7324C19.8385 14.0883 20 14.5358 20 15V18C20 18.5304 19.7891 19.039 19.4141 19.4141C19.039 19.7891 18.5304 20 18 20C13.2261 20 8.64812 18.1032 5.27246 14.7275C1.89681 11.3519 0 6.7739 0 2C0 1.53581 0.161455 1.08833 0.453125 0.732422L0.585938 0.585938C0.96101 0.210865 1.46957 0 2 0H5Z" />
                  </svg>
                  <span>+1 (929) 822-5127</span>
                </a>
              </div>
              <a
                href="https://weichie.com/contact/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors w-fit mt-4"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Brussels Card */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4]">
            <img
              src="/textures/brussels-dev-studio-225x300.jpg"
              alt="Brussels, Belgium"
              loading="eager"
              className="w-full sm:w-44 h-56 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666]">We are open</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#111111] mb-2">Brussels, Belgium</h3>
                <p className="text-sm text-[#555] mb-4">Monday to Friday 9h to 17h</p>
                <a
                  href="tel:+32469129449"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#ff4f31] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 0C5.53043 0 6.03899 0.210865 6.41406 0.585938L6.54688 0.732422C6.83855 1.08833 7 1.53581 7 2V5C7 5.31049 6.92792 5.61682 6.78906 5.89453L6.67285 6.0957C6.54602 6.28934 6.38629 6.45998 6.2002 6.59961L5.73242 6.95117C5.54884 7.09135 5.41944 7.29086 5.36621 7.51562C5.31305 7.74028 5.3393 7.97606 5.44043 8.18359C6.80711 10.9595 9.05446 13.2052 11.832 14.5684C11.9868 14.6394 12.1563 14.6689 12.3242 14.6562L12.4912 14.6299C12.7117 14.5748 12.9073 14.4455 13.0449 14.2646L13.4004 13.7998C13.5867 13.5516 13.8279 13.3497 14.1055 13.2109C14.3832 13.0721 14.6895 13 15 13H18C18.5304 13 19.039 13.2109 19.4141 13.5859L19.5469 13.7324C19.8385 14.0883 20 14.5358 20 15V18C20 18.5304 19.7891 19.039 19.4141 19.4141C19.039 19.7891 18.5304 20 18 20C13.2261 20 8.64812 18.1032 5.27246 14.7275C1.89681 11.3519 0 6.7739 0 2C0 1.53581 0.161455 1.08833 0.453125 0.732422L0.585938 0.585938C0.96101 0.210865 1.46957 0 2 0H5Z" />
                  </svg>
                  <span>+32 469 129 449</span>
                </a>
              </div>
              <a
                href="https://weichie.com/contact/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors w-fit mt-4"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5 Columns Nav Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-20 border-b border-[#e5dfdf]">
          {/* Col 1: About */}
          <div className="lg:col-span-1">
            <p className="text-sm leading-relaxed text-[#555]">
              Weichie is a web design and development studio based in{' '}
              <a href="https://weichie.com/webdesign-brussels/" className="text-[#111] underline hover:text-[#ff4f31]">Brussels</a>{' '}
              and{' '}
              <a href="https://weichie.com/webdesign-new-york/" className="text-[#111] underline hover:text-[#ff4f31]">New York</a>.
              We build digital solutions to make your business shine online.
            </p>
          </div>

          {/* Col 2: Studio */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#888] mb-4">Studio</h4>
            <ul className="space-y-2.5 text-sm text-[#333]">
              <li><a href="https://weichie.com/cases/" className="hover:text-[#ff4f31] transition-colors">Projects</a></li>
              <li><a href="https://weichie.com/about/" className="hover:text-[#ff4f31] transition-colors">About</a></li>
              <li><a href="https://weichie.com/blog/" className="hover:text-[#ff4f31] transition-colors">Insights</a></li>
              <li><a href="https://weichie.com/network/" className="hover:text-[#ff4f31] transition-colors">Network</a></li>
              <li><a href="https://weichie.com/careers/" className="hover:text-[#ff4f31] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3: Expertises */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#888] mb-4">Expertises</h4>
            <ul className="space-y-2.5 text-sm text-[#333]">
              <li><a href="https://weichie.com/service/web-development/" className="hover:text-[#ff4f31] transition-colors">Web development</a></li>
              <li><a href="https://weichie.com/service/ecommerce/" className="hover:text-[#ff4f31] transition-colors">eCommerce</a></li>
              <li><a href="https://weichie.com/service/applications/" className="hover:text-[#ff4f31] transition-colors">Application development</a></li>
              <li><a href="https://weichie.com/service/artificial-intelligence/" className="hover:text-[#ff4f31] transition-colors">Artificial intelligence</a></li>
              <li><a href="https://weichie.com/service/blockchain/" className="hover:text-[#ff4f31] transition-colors">Blockchain</a></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#888] mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-[#333]">
              <li><a href="https://weichie.com/imprint/" className="hover:text-[#ff4f31] transition-colors">Legal Notice</a></li>
              <li><a href="https://weichie.com/terms-of-service/" className="hover:text-[#ff4f31] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#ff4f31] transition-colors">Cookie Preference</a></li>
              <li><a href="https://weichie.com/ai-charter/" className="hover:text-[#ff4f31] transition-colors">AI Charter</a></li>
              <li><a href="#!" className="hover:text-[#ff4f31] transition-colors">AI Mode</a></li>
            </ul>
          </div>

          {/* Col 5: Business Inquiries */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#888] mb-4">Business Inquiries</h4>
            <ul className="space-y-2.5 text-sm text-[#333]">
              <li><a href="tel:+19298225127" className="hover:text-[#ff4f31] transition-colors">+1 (929) 822-5127</a></li>
              <li><a href="tel:+32469129449" className="hover:text-[#ff4f31] transition-colors">+32 469 129 449</a></li>
              <li><a href="mailto:hello@weichie.com" className="hover:text-[#ff4f31] transition-colors">hello@weichie.com</a></li>
              <li><a href="https://weichie.com/contact/" className="hover:text-[#ff4f31] transition-colors underline font-medium">Request proposals</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-[#555]">
            <a href="https://www.linkedin.com/company/weichie/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111]">LinkedIn</a>
            <a href="https://www.instagram.com/weichiecom/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111]">Instagram</a>
            <a href="https://www.facebook.com/weichiecom/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111]">Facebook</a>
          </div>

          {/* Exact Weichie Logo */}
          <div className="text-[#111111]">
            <svg width="133" height="28" viewBox="0 0 133 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.893 0.863371V0.563103H33.7468L33.7086 0.863371L35.0066 2.70251L30.2729 17.9036C29.9675 18.8795 29.713 19.7427 29.5094 20.4934C29.3058 21.2441 29.1149 22.0698 28.9367 22.9706C28.7077 22.0698 28.4977 21.2441 28.3069 20.4934C28.116 19.7427 27.8678 18.8795 27.5624 17.9036L22.7142 2.77758L23.974 0.863371V0.563103H17.217V0.863371L18.6676 2.85265L18.7058 2.81511L14.0866 17.8661C13.8067 18.8169 13.5713 19.6802 13.3804 20.4559C13.1895 21.2316 12.9923 22.0573 12.7887 22.9331C12.5851 22.0573 12.3815 21.2378 12.1779 20.4746C11.9743 19.7115 11.7198 18.8544 11.4144 17.9036L6.52795 2.77758L7.78772 0.863371L7.74955 0.563103H0L0.0381751 0.863371L2.02328 2.85265L10.3836 27.6248H13.5903L18.5913 12.161C18.9221 11.1601 19.1894 10.2905 19.393 9.55238C19.5966 8.81422 19.8129 8.00725 20.0419 7.13147C20.2455 8.00725 20.4491 8.81422 20.6527 9.55238C20.8563 10.2905 21.0981 11.1601 21.3781 12.161L26.4554 27.6248H29.6621L38.0988 2.74005L39.893 0.863371Z" fill="currentColor" />
              <path d="M52.2427 23.0455C51.6955 23.6961 51.0465 24.1903 50.2957 24.5281C49.5449 24.8659 48.7115 25.0348 47.7953 25.0348C46.5737 25.0348 45.4729 24.7345 44.4931 24.134C43.5133 23.5335 42.7434 22.6577 42.1835 21.5067C41.6406 20.3932 41.3649 19.0649 41.3479 17.5281H55.5448C55.5957 16.5522 55.5321 15.5951 55.3539 14.6568C55.1758 13.7184 54.8767 12.8302 54.4568 11.9919C54.0369 11.1537 53.4706 10.4218 52.758 9.7962C52.0454 9.17064 51.1928 8.67645 50.2003 8.31362C49.2077 7.9508 48.037 7.76939 46.6882 7.76939C45.2121 7.76939 43.895 8.03212 42.737 8.55759C41.5791 9.08306 40.5992 9.80245 39.7976 10.7158C38.9959 11.6291 38.3851 12.705 37.9652 13.9436C37.5452 15.1823 37.3353 16.4897 37.3353 17.8659C37.3353 19.2421 37.558 20.5871 38.0033 21.8257C38.4487 23.0643 39.0977 24.1403 39.9503 25.0536C40.8028 25.9669 41.8272 26.6863 43.0234 27.2117C44.2195 27.7372 45.5429 27.9999 46.9936 27.9999C48.5715 27.9999 49.9521 27.7184 51.1356 27.1554C52.319 26.5924 53.2988 25.8105 54.0751 24.8096C54.8513 23.8087 55.3921 22.6327 55.6975 21.2814L53.5215 20.6809C53.2161 21.6067 52.7898 22.3949 52.2427 23.0455ZM42.718 12.0294C43.1506 11.3163 43.7042 10.7596 44.3786 10.3592C45.053 9.95884 45.8229 9.75866 46.6882 9.75866C47.4262 9.75866 48.0816 9.9088 48.6542 10.2091C49.2268 10.5093 49.7167 10.9347 50.1239 11.4852C50.5311 12.0357 50.8429 12.6613 51.0592 13.3619C51.2756 14.0625 51.4219 14.8257 51.4982 15.6514H41.4709C41.5303 15.249 41.6045 14.8528 41.7063 14.4691C41.9481 13.5558 42.2853 12.7426 42.718 12.0294Z" fill="currentColor" />
              <path d="M60.6221 5.29221C61.3347 5.29221 61.9519 5.0545 62.4736 4.57907C62.9953 4.10365 63.2562 3.51562 63.2562 2.815C63.2562 2.11437 63.0017 1.56388 62.4927 1.08846C61.9837 0.613031 61.3729 0.375318 60.6603 0.375318C59.9477 0.375318 59.3432 0.613031 58.847 1.08846C58.3507 1.56388 58.1025 2.13939 58.1025 2.815C58.1025 3.4906 58.3443 4.10365 58.8279 4.57907C59.3114 5.0545 59.9095 5.29221 60.6221 5.29221Z" fill="currentColor" />
              <path d="M62.6454 7.95717L57.4154 8.89551V9.19578L58.7515 11.11V25.5604L57.4154 27.3245V27.6247H63.9815V27.3245L62.6454 25.5604V7.95717Z" fill="currentColor" />
              <path d="M79.5188 23.8713C78.5262 24.6219 77.381 24.9973 76.083 24.9973C75.2941 24.9973 74.5179 24.8409 73.7543 24.5281C72.9908 24.2153 72.3037 23.7461 71.6929 23.1206C71.0821 22.495 70.6049 21.7068 70.2613 20.756C69.9177 19.8051 69.746 18.6916 69.746 17.4155C69.746 16.2895 69.8859 15.2636 70.1659 14.3378C70.4458 13.4119 70.8403 12.6175 71.3493 11.9544C71.8583 11.2913 72.4691 10.7846 73.1817 10.4343C73.8943 10.084 74.696 9.9088 75.5868 9.9088C76.2485 9.9088 76.8465 10.0214 77.381 10.2466C77.9154 10.4718 78.4054 10.7908 78.8507 11.2037C79.2961 11.6166 79.6651 12.1108 79.9578 12.6863C80.2505 13.2618 80.4986 13.8999 80.7022 14.6005L81.0076 14.6756L83.5272 12.4986C83.1963 11.5978 82.6555 10.7846 81.9047 10.0589C81.154 9.33328 80.2378 8.77028 79.1561 8.36992C78.0745 7.96956 76.8593 7.76939 75.5104 7.76939C74.1616 7.76939 72.8127 8.01335 71.6165 8.50129C70.4204 8.98923 69.3706 9.67734 68.4671 10.5656C67.5636 11.4539 66.8574 12.5174 66.3484 13.756C65.8394 14.9946 65.5849 16.3646 65.5849 17.8659C65.5849 19.8176 65.9984 21.5567 66.8256 23.0831C67.6527 24.6094 68.7916 25.8105 70.2422 26.6863C71.6929 27.5621 73.3726 27.9999 75.2813 27.9999C76.8338 27.9999 78.2017 27.7059 79.3852 27.1179C80.5686 26.5299 81.5484 25.6916 82.3247 24.6032C83.1009 23.5147 83.6163 22.2448 83.8708 20.7935L81.7711 20.3806C81.2621 21.9571 80.5113 23.1206 79.5188 23.8713Z" fill="currentColor" />
              <path d="M103.302 14.4504C103.302 13.0241 103.009 11.8105 102.424 10.8096C101.839 9.80875 101.043 9.05183 100.038 8.53887C99.0326 8.02591 97.8683 7.76943 96.5449 7.76943C95.6541 7.76943 94.8143 7.94459 94.0253 8.2949C93.2364 8.64521 92.5365 9.12064 91.9257 9.72117C91.3149 10.3217 90.8186 11.0223 90.4369 11.8231V-4.60065e-06L85.2069 0.938333V1.2386L86.543 3.15281V25.5603L85.2069 27.3244V27.6247H91.773V27.3244L90.4369 25.5603V15.5013C90.6659 14.5004 91.0159 13.6434 91.4867 12.9303C91.9575 12.2172 92.5365 11.6604 93.2237 11.26C93.9108 10.8597 94.6489 10.6595 95.4378 10.6595C96.2268 10.6595 96.9521 10.8222 97.5374 11.1474C98.1228 11.4727 98.5745 11.9482 98.8927 12.5737C99.2108 13.1993 99.3698 13.9875 99.3698 14.9383V25.5603L98.0337 27.3244V27.6247H104.676V27.3244L103.302 25.5603V14.4504Z" fill="currentColor" />
              <path d="M109.639 5.29221C110.352 5.29221 110.969 5.0545 111.49 4.57907C112.012 4.10365 112.273 3.51562 112.273 2.815C112.273 2.11437 112.019 1.56388 111.51 1.08846C111.001 0.613031 110.39 0.375318 109.677 0.375318C108.965 0.375318 108.36 0.613031 107.864 1.08846C107.368 1.56388 107.119 2.13939 107.119 2.815C107.119 3.4906 107.361 4.10365 107.845 4.57907C108.328 5.0545 108.926 5.29221 109.639 5.29221Z" fill="currentColor" />
              <path d="M111.662 7.95717L106.432 8.89551V9.19578L107.768 11.11V25.5604L106.432 27.3245V27.6247H112.998V27.3245L111.662 25.5604V7.95717Z" fill="currentColor" />
              <path d="M130.824 20.6809C130.519 21.6067 130.092 22.3949 129.545 23.0455C128.998 23.6961 128.349 24.1903 127.598 24.5281C126.847 24.8659 126.014 25.0348 125.098 25.0348C123.876 25.0348 122.775 24.7345 121.796 24.134C120.816 23.5335 120.046 22.6577 119.486 21.5067C118.943 20.3932 118.667 19.0649 118.65 17.5281H132.847C132.898 16.5522 132.835 15.5951 132.656 14.6568C132.478 13.7184 132.179 12.8302 131.759 11.9919C131.339 11.1537 130.773 10.4218 130.061 9.7962C129.348 9.17064 128.495 8.67645 127.503 8.31362C126.51 7.9508 125.34 7.76939 123.991 7.76939C122.515 7.76939 121.198 8.03212 120.04 8.55759C118.882 9.08306 117.902 9.80245 117.1 10.7158C116.298 11.6291 115.688 12.705 115.268 13.9436C114.848 15.1823 114.638 16.4897 114.638 17.8659C114.638 19.2421 114.86 20.5871 115.306 21.8257C115.751 23.0643 116.4 24.1403 117.253 25.0536C118.105 25.9669 119.13 26.6863 120.326 27.2117C121.522 27.7372 122.845 27.9999 124.296 27.9999C125.874 27.9999 127.255 27.7184 128.438 27.1554C129.622 26.5924 130.601 25.8105 131.378 24.8096C132.154 23.8087 132.695 22.6327 133 21.2814L130.824 20.6809ZM120.02 12.0294C120.453 11.3163 121.007 10.7596 121.681 10.3592C122.356 9.95884 123.125 9.75866 123.991 9.75866C124.729 9.75866 125.384 9.9088 125.957 10.2091C126.529 10.5093 127.019 10.9347 127.426 11.4852C127.834 12.0357 128.145 12.6613 128.362 13.3619C128.578 14.0625 128.724 14.8257 128.801 15.6514H118.773C118.833 15.249 118.907 14.8528 119.009 14.4691C119.251 13.5558 119.588 12.7426 120.02 12.0294Z" fill="currentColor" />
            </svg>
          </div>

          <p className="text-sm text-[#888888] font-mono">
            Weichie &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
