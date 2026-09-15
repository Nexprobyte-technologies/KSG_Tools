import ShapeGrid from "@/components/ShapeGrid";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="page-hero">
      <ShapeGrid
        className="page-hero-canvas"
        direction="right"
        speed={0.4}
        squareSize={42}
        borderColor="rgba(148, 163, 184, 0.22)"
        hoverFillColor="rgba(251, 191, 36, 0.12)"
        shape="square"
        hoverTrailAmount={6}
        backgroundColor="rgba(11, 18, 32, 0.5)"
      />
      <div className="container">
        <div className="page-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{title}</span>
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}