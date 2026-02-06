import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About us</h1>
        </div>
      </section>

      {/* Brief History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          <div className="flex flex-col md:flex-row md:items-start gap-12">
            {/* Left Side - Heading with dotted background */}
            <div className="flex-1">
              <div style={{
                backgroundImage: 'radial-gradient(circle, #E5E5E5 1px, transparent 1px)',
                backgroundSize: '12px 12px',
                padding: '24px',
                display: 'inline-block'
              }}>
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>
                  Hey, We are the Red Explorers
                </h2>
                <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
                  Brief History <span style={{ color: '#FFAB00', textDecoration: 'underline' }}>About Us.</span>
                </h3>
              </div>
            </div>

            {/* Right Side - Justified Lorem ipsum text */}
            <div className="flex-1" style={{ maxWidth: '480px' }}>
              <p style={{ 
                fontFamily: 'Lato',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '40px',
                letterSpacing: '2%',
                textAlign: 'justify',
                color: '#000000',
                display: 'block'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec
                etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla.
                Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra
                mattis. Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu,
                felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris
              </p>
            </div>
          </div>

          <div className="mb-12" style={{ 
            width: '1300px',
            height: '472px',
            overflow: 'hidden',
            marginLeft: '70px',
            marginTop: '40px'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1300&q=80"
              alt="About us"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="space-y-6 text-gray-600 text-left" style={{ marginTop: '60px', paddingLeft: '53px' }}>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur eos, esse nemo reprehend et quasi
              dolor consequat autem. Fames dolore perferendis quas eius libero. Nostra fuga velit et repudiandae nec. Voluptatum veritatis,
              molestiae. Eius repudiandae nec et optio. Illum consequat urna, deleniti. Proiden tellus ius libero. Suspendisse duis at mi liter aut
              massa. Hic turpis pellentesque rhoncus sed libero quam ullam congue nequaerit sed. Nullum repudiandae eget, porttito ipsum ullamcorper
              mauris sunt temporibus voluti ut mi blandit. In cupiditate aliquet elit at sollicitudin id. Venenatis scelerisque ut elit.
            </p>

            <p className="leading-relaxed">
              In porttitor urna quas tellus diam aperci qua posuere et mi leo Morbi. Alipit suscipit urna. Allit consequat, eget tortor, quis commodi,
              nisi. Integer Mauris ornare. Accumsan nunc malesuada consectetuer ultricies nisl. Penatibus ultrices eget, semper elitid lectus leo magna at ipsum
              eget. Facibus ullam nisl, sociosqu sint nisl pretium libero gravida et nunc.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Who Are Red Explorers */}
      <section className="py-20 bg-gray-50" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                {[1, 2, 3, 4].map((i) => (
                  <p key={i} className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                    eos. Donec viverra aliquet albi diam sit tincidunt metus ac at. Ut lorem, velit neque vel
                    tinci id vel, molestiae. Suspendisse amet eget parturient est sem dignissim donec, etiam
                    turpis tincidunt vel quis leo nisl molestiae. Finibus ultricies lorem magna placerat.
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Who Are Red Explorers</h2>
              <div className="space-y-4 text-gray-600">
                {[1, 2, 3, 4].map((i) => (
                  <p key={i} className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                    eos. In est ridiculus orci id, bibendum varius. Interdum senectus volut pulvinar ultricies
                    etiam et metus sit eget at fermentum quisut. Metus, duis mollis. Nullum turpis elit et,
                    volute pend Verisque dignissim lobortis tincidunt. Vitae ligula a turpis sit sem purus.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Cameraman & What you'll Learn Here */}
      <section className="py-20 bg-white" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - About Our Cameraman */}
            <div style={{ 
              width: '438.2314453125px', 
              height: '598px',
              position: 'relative',
              top: '687px',
              left: '69.77px',
              opacity: 1
            }}>
              <h2 className="text-3xl font-bold mb-6">About Our Cameraman</h2>
              <div className="space-y-4 text-gray-600">
                {[1, 2, 3, 4].map((i) => (
                  <p key={i} className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                    eos. Donec viverra aliquet albi diam sit tincidunt metus ac at. Ut lorem, velit neque vel
                    tinci id vel, molestiae. Suspendisse amet eget parturient est sem dignissim donec, etiam
                    turpis tincidunt vel quis leo nisl molestiae. Finibus ultricies lorem magna placerat.
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - What you'll Learn Here with On Our Website You'll Find nested */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What you&apos;ll Learn Here</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.
                </p>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.
                </p>
              </div>

              {/* On Our Website You'll Find - nested under What you'll Learn Here */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">On Our Website You&apos;ll Find</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'Lorem ipsum dolor sit amet, consectetur.',
                      'Lorem ipsum dolor sit amet, consectetur.',
                      'Lorem ipsum dolor sit amet, consectetur.',
                      'Lorem ipsum dolor sit amet, consectetur.',
                      'Lorem ipsum dolor sit amet, consectetur.',
                    ].map((item, i) => (
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
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image 
              src="/assets/logos/boss-logo.png" 
              alt="Boss Logo" 
              width={150} 
              height={80}
              className="object-contain"
            />
            <Image 
              src="/assets/logos/kitkat-logo.png" 
              alt="KitKat Logo" 
              width={150} 
              height={80}
              className="object-contain"
            />
            <Image 
              src="/assets/logos/marshall-logo.png" 
              alt="Marshall Logo" 
              width={150} 
              height={80}
              className="object-contain"
            />
            <Image 
              src="/assets/logos/tesla-logo.png" 
              alt="Tesla Logo" 
              width={150} 
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '88px', paddingRight: '88px' }}>
          {/* Heading and Paragraph Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            {/* Left - Heading */}
            <div className="flex-1">
              <h2 className="font-bold mb-4" style={{ fontSize: '48px', lineHeight: '1.2' }}>
                What <span style={{ color: '#FFAB00' }}>Customer says</span>
              </h2>
              <p className="font-bold" style={{ fontSize: '28px' }}>About us?</p>
            </div>

            {/* Right - Paragraph */}
            <div className="flex-1 max-w-2xl">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '20px', lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                eos. Finibus ultricies lorem magna placerat quis. Facilisis et consectetur
                impedit Lorem lorem quis quis porta nisl diam mauris. Pellentesque et magna at
                dui nec vel accumsan arcu. Non dolore ac, facilit sed ullamcorper et qui et.
              </p>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
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
                  padding: '25.6px'
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
