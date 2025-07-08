import Image from "next/image";

const Features = () => {
  return (
    <div className="guide-main mt-40 mb-20">
      <p className="text-7xl font-black capitalize text-center">
        what do we offer?
      </p>
      <div className="mt-2 separator"/>
      <div className="mt-22 flex flex-col">
        <p className="text-4xl font-bold capitalize">
          security is our top priority
        </p>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <Image
              src="/landing-page/blockchain.png"
              width={100}
              height={100}
              alt="blockchain"
              className="grayscale opacity-10"
            />
            <div className="space-y-3">
              <p className="capitalize text-xl font-semibold shiny-text">
                secure system using <a className="hover:underline cursor-pointer text-white">blockchain</a> technology
              </p>
              <p className="text-grey-secondary">
                dolor sit amet lorem psium me mat madenorina per mase
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/landing-page/blockchain.png"
              width={100}
              height={100}
              alt="blockchain"
              className="grayscale opacity-10"
            />
            <div className="space-y-3">
              <p className="capitalize text-xl font-semibold shiny-text">
                generate your <a className="hover:underline cursor-pointer text-white">smart contract</a> with just one click
              </p>
              <p className="text-grey-secondary">
                dolor sit amet lorem psium me mat madenorina per mase
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/landing-page/blockchain.png"
              width={100}
              height={100}
              alt="blockchain"
              className="grayscale opacity-10"
            />
            <div className="space-y-3">
              <p className="capitalize text-xl font-semibold shiny-text">
                backed by <a className="hover:underline cursor-pointer text-white">ICP</a> intergration
              </p>
              <p className="text-grey-secondary">
                dolor sit amet lorem psium me mat madenorina per mase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features