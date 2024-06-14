import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-3xl  font-extrabold">Stripe App</h1>
      <a
        className=" px-8 py-4 bg-purple-600 text-white rounded-full font-bold"
        href="https://buy.stripe.com/test_14k6pW3LadPj7h6bII"
      >
        Buy Now
      </a>
    </main>
  );
}
