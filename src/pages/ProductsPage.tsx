import ProductCard from '../components/ProductCard';

const products = [
    {
      id: 1,
      name: "MacBook M4 Max",
      price: 4199.00,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
    },
    {
      id: 2,
      name: "iPhone 16e - 512 GB",
      price: 1079,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16e-finish-select-202502-white?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bGxrMXRYSllVRTZGbi82ZklwWis2L1E4VHZqM2p1UHFJc1owKzJEcWVyUThVUkp0MjdUS1RYNitOS3F5TDJoSTg5ZFJsR0hrQnFVeEVSbnU0TWlpU0dSMjFQbWROWjJPYy9mb3VMRjFSOU1HNlNKOWI4NHM4TnBKUkRhNkdlc2U&traceId=1",
    },
    {
      id: 3,
      name: "Apple Watch Series 10",
      price: 399,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=png-alpha&.v=1725019651758",
    },
];

export default function ProductsPage() {
  return (
    <main className='flex justify-center min-h-screen px-6 py-28'>
      <section className='flex flex-col items-center w-200'>
          <h2 className='text-2xl py-8'>Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </section>
    </main>
  )
}
