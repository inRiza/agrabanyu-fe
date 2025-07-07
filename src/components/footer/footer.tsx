const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#fdfdff] to-grey-secondary text-black rounded-2xl px-10 py-8 mt-20 mb-10">
      <div className=" mx-auto flex md:flex-row justify-between gap-8">
        <div className="text-sm">
          © 2025 AgraBanyu. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
