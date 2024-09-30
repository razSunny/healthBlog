const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-5 sm:py-6 lg:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 lg:max-w-none lg:grid-cols-2">

          <div className="max-w-xl">
          <h1 className="text-xl font-bold text-white text-center lg:text-left">
                Health & Gym
              </h1>
              <p className="mt-6 text-sm text-white text-center lg:text-left text-justify">Explore workout routines, nutrition tips, fitness challenges, and wellness advice to achieve your health goals and stay motivated.</p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-14 gap-y-4">
            <div className="flex flex-col items-start">
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">about us</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">blog</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">workouts</dd>
            </div>
            <div className="flex flex-col items-start">
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">nutrition</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">health tips</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">contact us</dd>
            </div>
            <div className="flex flex-col items-start">
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">claim</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">privacy & policy</dd>
              <dd className="mt-2 leading-7 text-gray-400 hover:text-white cursor-pointer">terms & condition</dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <hr className="mt-5"></hr>
      <div className="copyright-text text-white text-sm text-center mt-5">
        © 2024 Health & Gym, Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
