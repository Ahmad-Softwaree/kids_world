import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Yari Mndalan Logo"
      width={40}
      height={40}
      className="object-contain"
      priority
    />
  );
};
