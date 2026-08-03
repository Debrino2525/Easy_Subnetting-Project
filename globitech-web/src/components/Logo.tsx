import Image from "next/image";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "full",
  className = "",
  priority = false,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/logo-mark.png"
        alt="Globitech"
        width={48}
        height={48}
        className={`h-10 w-10 object-contain ${className}`}
        style={{ width: "auto", height: "2.5rem" }}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Globitech Ghana"
      width={220}
      height={56}
      className={`h-11 w-auto object-contain md:h-12 ${className}`}
      style={{ width: "auto" }}
      priority={priority}
    />
  );
}
