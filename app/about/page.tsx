import Newsletter from '../components/Newsletter';
import InstagramFeed from '../components/InstagramFeed';

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
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor nec
            tortor pellentesque venenatis. Maecenas vitae ac nisl varius lorem congue et enim, nibh.
            Pellentesque ornare, nisi massa tortor augue vitae. Sed consectet urna eget. Mauris
            turpis urna, eros elit quam. Sollicitudin neque orci urna. Odio elit cursus nec elit cursus
            faucibus arcu, consequat accumsan diam magna porta.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Hey, We are the <span style={{ color: '#1a5eff' }}>Red Explorers</span>
            </h2>
            <h3 className="text-xl text-gray-600 mb-6">
              Brief History <span style={{ color: '#ffab00' }}>about us</span>
            </h3>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="h-96 bg-gray-300" />
          </div>

          <div className="space-y-6 text-gray-600 text-left">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Cameraman</h2>
              <div className="space-y-4 text-gray-600">
                {[1, 2, 3].map((i) => (
                  <p key={i} className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                    eos. Donec viverra aliquet albi diam sit tincidunt metus ac at. Ut lorem, velit neque vel
                    tinci id vel, molestiae. Suspendisse amet eget parturient est sem dignissim donec.
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">What you&apos;ll Learn Here</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                  eos. In est ridiculus orci id, bibendum varius. Interdum senectus volut pulvinar ultricies
                  etiam et metus sit eget at fermentum quisut.
                </p>
                <ul className="space-y-2 list-none">
                  {[
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#1a5eff' }} className="mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On Our Website You'll Find */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">On Our Website You&apos;ll Find</h2>
          
          <div className="space-y-4 text-gray-600 max-w-4xl mx-auto mb-12">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
              eos. In est ridiculus orci id, bibendum varius.
            </p>
            <ul className="space-y-2 list-none">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: '#1a5eff' }} className="mt-1">•</span>
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">
            What <span style={{ color: '#ffab00' }}>Customer says</span>
          </h2>
          <p className="text-xl mb-12">About us?</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paribu at accusant nescitur
                  eos. Finibus ultricies lorem magna placerat quis. Facilisis et consectetur
                  impedit Lorem lorem quis quis porta nisl diam mauris. Pellentesque et magna at
                  dui nec vel accumsan arcu. Non dolore ac, facilit sed ullamcorper et qui et.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold">Ivy Ruth</div>
                    <div className="text-sm text-gray-500">Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
