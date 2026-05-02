import { assets } from "../assets/assets";

export default function About() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <h1 className="text-3xl font-semibold text-center mx-auto mt-5">
        About SnapCut
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
         Sri Lanka's premium barbershop booking platform — connecting customers 
  with the best barbers for a seamless experience.
      </p>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src={assets.img1}
          alt=""
        />
        <div>
          <h1 className="text-3xl font-semibold">Our Latest features</h1>
          <p className="text-sm text-slate-500 mt-2">
            SnapCut is a premium barbershop booking platform based in Sri Lanka.
            We connect customers with the best barbers in their area for a
            seamless booking experience.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Easy Online Booking
                </h3>
                <p className="text-sm text-slate-500">
                  Book your appointment in seconds — no calls, no waiting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Top Rated Barbers
                </h3>
                <p className="text-sm text-slate-500">
                  Hand picked professional barbers with years of experience.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Sri Lanka's Own Platform
                </h3>
                <p className="text-sm text-slate-500">
                  Built specifically for Sri Lankan barbershops and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
