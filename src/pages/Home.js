import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const LinechartChart = () => {
    return <div>Chart will be here</div>;
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Track Your Crypto Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get real-time price updates, manage your portfolio, and set
                  alerts for your favorite cryptocurrencies.
                </p>
                <div className="mt-6">
                  <Link
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    to="/table"
                  >
                    Start Tracking
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="https://thumbs.dreamstime.com/z/bitcoin-digital-cryptocurrency-icon-white-background-vector-illustration-website-mobile-application-presentation-bitcoin-136089297.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Crypto Tracking
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cryptocurrency tracker provides real-time price updates,
                  portfolio management, and customizable alerts to help you stay
                  on top of your investments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Feature
                title="Real-Time Prices"
                description="Get instant updates on the latest cryptocurrency prices across the market."
              />
              <Feature
                title="Portfolio Management"
                description="Easily track your crypto investments and monitor your portfolio's performance."
              />
              <Feature
                title="Customizable Alerts"
                description="Set price alerts for your favorite coins and get notified when they reach your target."
              />
              <Feature
                title="Supported Cryptocurrencies"
                description="Track the top cryptocurrencies, including Bitcoin, Ethereum, and more."
              />
              <Feature
                title="User-Friendly Interface"
                description="Our intuitive dashboard makes it easy to navigate and monitor your crypto investments."
              />
              <Feature
                title="Secure and Reliable"
                description="Your data is protected with industry-leading security measures."
              />
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                to="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                prefetch={false}
              >
                Start Tracking
              </Link>
              <Link
                to="/table"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Pricing
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Supported Cryptocurrencies
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Track the top cryptocurrencies in the market, including Bitcoin,
                Ethereum, and more.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-6">
                <CryptoLogo altText="Bitcoin" />
                <CryptoLogo altText="Ethereum" />
                <CryptoLogo altText="Litecoin" />
                <CryptoLogo altText="Ripple" />
                <CryptoLogo altText="Cardano" />
                <CryptoLogo altText="Polkadot" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Example Graph
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Visualize Your Portfolio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cryptocurrency tracker provides interactive charts and
                  graphs to help you visualize the performance of your
                  portfolio.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-4xl">
              <LinechartChart className="aspect-[16/9]" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6 md:py-12">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="block mt-2 hover:underline">
              About Us
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Our Team
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Careers
            </a>
            <a href="#" className="block mt-2 hover:underline">
              News
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <a href="#" className="block mt-2 hover:underline">
              Cryptocurrency Listing
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Pricing Data
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Market Analysis
            </a>
            <a href="#" className="block mt-2 hover:underline">
              API Access
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <a href="#" className="block mt-2 hover:underline">
              Blog
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Documentation
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Support
            </a>
            <a href="#" className="block mt-2 hover:underline">
              FAQs
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="block mt-2 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Cookie Policy
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="block mt-2 hover:underline">
              Sales
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Support
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Partnerships
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Media
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


const Feature = ({ title, description }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const CryptoLogo = ({ altText }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img
        src="/placeholder-logo.svg"
        alt={altText}
        className="max-h-[40px] sm:max-h-[50px] md:max-h-[60px]"
      />
    </div>
  );
};

export default Home;
