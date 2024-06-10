import Image from "next/image";
import user1 from "@/public/user-1.jpg";
import user2 from "@/public/user-2.jpg";
import user3 from "@/public/user-3.jpg";
import user4 from "@/public/user-4.jpg";

const LandingTestimonials = () => {
  return (
    <div className="h-[28rem] bg-[#F4F4F4] text-black">
      <div className="pt-20 pb-12">
        <h4 className="text-center text-4xl">Testimonials</h4>
      </div>
      {/* First Row */}
      <div className="flex col-span-4 gap-8 justify-center text-sm">
        <div className="w-[220px] h-[190px] rounded-xl bg-[#E8E8E8] overflow-hidden">
          <div className="p-5">
            <div className="font-bold pb-2 ">Ali Furqan</div>
            <Image
              width="64"
              className="rounded-full float-left mr-3"
              src={user1}
              alt="woman-driving"
            />
            <div className="mt-2 font-medium">
            &quot;I can&apos;t imagine my daily commute without this carpooling app!
              It&apos;s been a game-changer for me.&quot;
            </div>
          </div>
        </div>
        <div className="w-[220px] h-[190px] rounded-xl bg-[#E8E8E8] overflow-hidden">
          <div className="p-5">
            <div className="font-bold pb-2 ">Zara Khan</div>
            <div className="w-[64px] h-[64px] overflow-hidden relative float-left mr-3">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src={user2}
                alt="woman-driving"
              />
            </div>
            <div className="mt-2 font-medium">
            &quot;I was skeptical at first, but this carpooling app has exceeded my
              expectations and cut down my expenses.&quot;
            </div>
          </div>
        </div>
        <div className="w-[220px] h-[190px] rounded-xl bg-[#E8E8E8] overflow-hidden">
          <div className="p-5">
            <div className="font-bold pb-2 ">Ahmed Ali</div>
            <div className="w-[64px] h-[64px] overflow-hidden relative float-left mr-3">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src={user3}
                alt="woman-driving"
              />
            </div>
            <div className="mt-2 font-medium">
            &quot;I&apos;ve been using this carpooling app for my daily commute, and it
              has made my life so much easier.&quot;
            </div>
          </div>
        </div>
        <div className="w-[220px] h-[190px] rounded-xl bg-[#E8E8E8] overflow-hidden">
          <div className="p-5">
            <div className="font-bold pb-2 ">Ayesha Rehman</div>
            <div className="w-[64px] h-[64px] overflow-hidden relative float-left mr-3">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src={user4}
                alt="woman-driving"
              />
            </div>
            <div className="mt-2 font-medium">
            &quot;This carpooling app has been a lifesaver for me. It&apos;s incredibly
              convenient to carpool now.&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTestimonials;
