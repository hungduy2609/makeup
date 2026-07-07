import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      {kicker ? <span className="section-kicker">{kicker}</span> : null}
      <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base sm:text-lg">{description}</p>
    </div>
  );
}
