type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <h2 className="font-heading text-3xl md:text-4xl text-espresso">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-espresso/80 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
