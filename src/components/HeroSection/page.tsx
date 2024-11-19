import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 text-white flex items-center justify-center relative"
    >
      <Image
        src="/pexels-luchik-14994207.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
          Sapphire Fragrances
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience the essence of timeless luxury.
        </p>
        <a
          href="#products"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
        >
          Explore Now
        </a>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </section>
  );
}
