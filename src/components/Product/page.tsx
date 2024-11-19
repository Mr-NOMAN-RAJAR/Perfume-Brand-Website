import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="products" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/MysticNoir.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Mystic Noir</h3>
              <p className="text-sm text-gray-300 mb-4">
                A dark and enchanting scent perfect for evening wear.
              </p>
              <div className="flex justify-between">
                <h1 className="text-xl text-sky-400">Rs:100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Velvet Blossom.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Velvet Blossom</h3>
              <p className="text-sm text-gray-300 mb-4">
                A romantic blend of floral and fruity notes, exuding elegance
                and charm.
              </p>
              <div className="flex justify-between">
                <h1 className="text-xl text-sky-400">Rs: 100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Midnight Musk.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Midnight Musk</h3>
              <p className="text-sm text-gray-300 mb-4">
                A mysterious and captivating scent with deep musky undertones.
              </p>
              <div className="flex justify-between">
                <h1 className="text-xl text-sky-400">Rs: 100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Golden Oud.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Golden Oud</h3>
              <p className="text-sm text-gray-300 mb-4">
                A luxurious oud fragrance with rich, earthy undertones.
              </p>
              <div className="flex justify-between">
                {" "}
                <h1 className="text-xl text-sky-400">Rs: 100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Aqua Breeze.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Aqua Breeze</h3>
              <p className="text-sm text-gray-300 mb-4">
                A fresh and invigorating scent reminiscent of the ocean breeze.
              </p>
              <div className="flex justify-between">
                <h1 className="text-xl text-sky-400">Rs: 100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Scarlet Desire1.jpg"
              alt="perfume"
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2"> Scarlet Desire</h3>
              <p className="text-sm text-gray-300 mb-4">
                A passionate and bold fragrance with seductive red fruits and
                spices.
              </p>
              <div className="flex justify-between">
                <h1 className="text-xl text-sky-400">Rs: 100$</h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
