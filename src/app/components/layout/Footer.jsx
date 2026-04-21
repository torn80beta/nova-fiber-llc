import Image from "next/image";

export default function Footer() {
  return (
    <section className="max-w-360 w-full pt-5  flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full min-h-115.5 pt-29.5 bg-[#F7F7F7] flex flex-col items-center justify-center">
        <div className="w-full h-full grow grid grid-cols-1 md:grid-cols-2 ">
          {/* Google map */}
          <div className="flex flex-col items-center  gap-2"></div>

          {/* Social media links */}
          <div className="flex flex-col items-center  gap-2">
            <div className="min-h-fit flex flex-col gap-4">
              <p className="mb-2 text-amber-600 text-xl">Follow Us</p>
              <div className="relative flex flex-row items-center gap-2.5">
                <Image
                  src={"/svg/facebook.svg"}
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <p>Facebook</p>
              </div>
              <div className="relative flex flex-row items-center gap-2.5">
                <Image
                  src={"/svg/x-twitter.svg"}
                  alt="X"
                  width={20}
                  height={20}
                />
                <p>Twitter</p>
              </div>
              <div className="relative flex flex-row items-center gap-2.5">
                <Image
                  src={"/svg/instagram.svg"}
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </section>
  );
}
