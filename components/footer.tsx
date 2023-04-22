import Separator from "./separator";

const Footer = () => {
  return (
    <div className="min-h-48 border-t-stone-300">
      <h3 className="mb-16 block pb-0 pt-16 text-6xl leading-snug text-stone-50 lg:leading-normal">
        MapleCode is an independent studio composed of multiple full-stack
        developers and designers creating custom marketing websites for clients
        across industries. We work with marketing teams, brand designers, and
        entrepreneurs to elevate online experiences.
      </h3>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Full stack developers
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Luis Castro
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          JavaScript experts
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Alexis Duran
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Mobile development
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Orlando del Aguila
        </p>
      </div>
      <Separator />
      <h2 className="mb-0 block pb-0 pt-16 text-[19vw] leading-none tracking-[-0.5vw] text-stone-50">
        Maple Code
      </h2>
    </div>
  );
};

export default Footer;
