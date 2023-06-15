import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/images/logo.png";
import cloud from "../assets/images/cloud.png";
import { gsap } from "gsap";

const Expedition = () => {

  const contentRef = useRef('')
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: '.about1',
        start: 'top top',
        endTrigger: contentRef?.current,
        end: 'bottom center',
        markers: true,
        toggleClass: {targets: '.about1', className: 'active'}
      }
    })
    animate.from(contentRef?.current, {duration: 1})
  },[])


  return (
    <section ref={contentRef} className="overflow-hidden">
      <div className="bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-center lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible">
        <div className="text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-[7rem]">
          <img
            className="w-[8rem] md:w-[12rem] 2xl:w-[16rem] mx-auto"
            src={logo}
            alt=""
          />
          <h1 className="text-3xl 2xl:text-6xl font-bold capitalize py-4">Expedition Leader</h1>
          <p className="px-6 lg:w-[60rem] 2xl:w-[85rem] mx-auto text-sm md:text-base 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eos ipsum ipsa voluptates repellat inventore quam maiores,
            dignissimos ipsam saepe possimus nisi earum provident veniam hic,
            voluptate odit quod perferendis maxime? Itaque molestias fuga,
            labore pariatur eligendi nisi libero autem recusandae reiciendis
            perspiciatis. Accusantium aliquam aspernatur doloremque perferendis
            quaerat dolorem laboriosam pariatur nam alias. In quia voluptas
            corrupti cum blanditiis illo quaerat exercitationem rem cumque,
            asperiores, suscipit reiciendis iusto, labore debitis quod quo!
            Nesciunt tenetur autem vitae! Necessitatibus aperiam provident
            corrupti quam nesciunt tenetur quos, sunt fuga tempora doloremque
            unde illum voluptatum nemo neque animi officia minus voluptatem
            earum quae.
          </p>
        </div>
        {Array(14).fill().map((_, i) => (
          <img className="absolute right-0 left-0 bottom-[-3rem] sm:bottom-[-6rem] md:bottom-[-9rem] 2xl:bottom-[-15rem]" key={i} src={cloud} alt="cloud image" style={{animation: `cloud ${i + 15}s linear infinite`}}/>
        ))}
      </div>
    </section>
  );
};

export default Expedition;
