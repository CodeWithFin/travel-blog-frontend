import Image from 'next/image';
import { getAboutContent } from '@/lib/get-about-content';

export default async function AboutPage() {
  const c = await getAboutContent();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${c.heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">{c.heroTitle}</h1>
        </div>
      </section>

      {/* Brief History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          <div className="flex flex-col md:flex-row md:items-start gap-12">
            <div className="flex-1">
              <div
                style={{
                  backgroundImage: 'radial-gradient(circle, #E5E5E5 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                  padding: '24px',
                  display: 'inline-block',
                }}
              >
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>
                  {c.briefHeading}
                </h2>
                <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
                  {c.briefSubheading} <span style={{ color: '#FFAB00', textDecoration: 'underline' }}>{c.briefSubheadingHighlight}</span>
                </h3>
              </div>
            </div>
            <div className="flex-1" style={{ maxWidth: '480px' }}>
              <p
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '40px',
                  letterSpacing: '2%',
                  textAlign: 'justify',
                  color: '#000000',
                  display: 'block',
                }}
              >
                {c.briefParagraph}
              </p>
            </div>
          </div>

          <div className="mb-12" style={{ width: '1300px', height: '472px', overflow: 'hidden', marginLeft: '70px', marginTop: '40px' }}>
            <img src={c.mainImageUrl} alt="About us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="space-y-6 text-gray-600 text-left" style={{ marginTop: '60px', paddingLeft: '53px' }}>
            {c.briefParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Who Are Red Explorers */}
      <section className="py-20 bg-gray-50" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.ourStoryTitle}</h2>
              <div className="space-y-4 text-gray-600">
                {c.ourStoryParagraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.whoAreTitle}</h2>
              <div className="space-y-4 text-gray-600">
                {c.whoAreParagraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll Learn Here */}
      <section className="py-20 bg-white" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div>
            <h2 className="text-3xl font-bold mb-6">{c.learnTitle}</h2>
            <div className="space-y-4 text-gray-600 mb-8">
              {c.learnParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">{c.onOurWebsiteTitle}</h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">{c.onOurWebsiteIntro}</p>
                <ul className="space-y-2 list-none">
                  {c.onOurWebsiteItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#1a5eff' }} className="mt-1">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image src="/assets/logos/boss-logo.png" alt="Boss Logo" width={150} height={80} className="object-contain" />
            <Image src="/assets/logos/kitkat-logo.png" alt="KitKat Logo" width={150} height={80} className="object-contain" />
            <Image src="/assets/logos/marshall-logo.png" alt="Marshall Logo" width={150} height={80} className="object-contain" />
            <Image src="/assets/logos/tesla-logo.png" alt="Tesla Logo" width={150} height={80} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="flex-1">
              <h2 className="font-bold mb-4" style={{ fontSize: '48px', lineHeight: '1.2' }}>
                {c.customerSayTitle} <span style={{ color: '#FFAB00' }}>{c.customerSayHighlight}</span>
              </h2>
              <p className="font-bold" style={{ fontSize: '28px' }}>
                {c.customerSaySubtitle}
              </p>
            </div>
            <div className="flex-1 max-w-2xl">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '20px', lineHeight: '1.8' }}>
                {c.customerSayParagraph}
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{c.cameramanTitle}</h2>
            <div className="space-y-4 text-gray-600">
              {c.cameramanParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8" style={{ paddingLeft: '53px' }}>
            {[
              { name: 'Joy Kim', title: 'explorer' },
              { name: 'Joy Kim', title: 'explorer' },
              { name: 'Joy Kim', title: 'explorer' },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  width: '279.2px',
                  height: '376.8px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  boxShadow: `
                    0px 2.216px 4.984px 0px rgba(0, 0, 0, 0.05),
                    0px 5.32px 11.968px 0px rgba(0, 0, 0, 0.07),
                    0px 10.016px 22.536px 0px rgba(0, 0, 0, 0.09),
                    0px 17.872px 40.208px 0px rgba(0, 0, 0, 0.11),
                    0px 33.424px 75.2px 0px rgba(0, 0, 0, 0.13),
                    0px 80px 180px 0px rgba(0, 0, 0, 0.18)
                  `,
                  padding: '25.6px',
                }}
              >
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontSize: '11.2px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                  eos. Finibus ultricies lorem magna placerat quis. Facilisis et consectetur
                  impedit Lorem lorem quis quis porta nisl diam mauris. Pellentesque et magna at
                  dui nec vel accumsan arcu. Non dolore ac, facilit sed ullamcorper et qui et.
                </p>
                <div>
                  <div className="font-semibold text-gray-800" style={{ fontSize: '14.4px' }}>{testimonial.name}</div>
                  <div className="text-gray-600" style={{ fontSize: '11.2px' }}>{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
