import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteIcon } from "@/lib/icon-map";

type ServiceCardProps = {
  item: {
    title: string;
    icon: string;
    accent: string;
    rows: Array<{ label: string; value: string }>;
  };
};

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <Card className="group h-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff7f6_100%)] transition-all hover:-translate-y-1.5 hover:border-secondary hover:shadow-[0_8px_30px_rgba(251,207,202,0.2)]">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-14 place-items-center rounded-[1.35rem] bg-[linear-gradient(135deg,#fbcfca_0%,#f99ecb_100%)] text-[#5d3a3a] shadow-[0_8px_24px_rgba(251,207,202,0.22)]">
            <SiteIcon name={item.icon} className="size-6" />
          </div>
          <div className="rounded-full border border-primary/50 bg-[#fff7f6] px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#9d7170]">
            Makeup
          </div>
        </div>
        <CardTitle className="pt-2 text-3xl leading-tight">
          {item.title}
        </CardTitle>
        <p className="text-sm text-muted">{item.accent}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 rounded-[1.35rem] border border-primary/45 bg-[rgba(255,255,255,0.78)] p-4 backdrop-blur-xl">
          {item.rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-primary/35 pb-3 last:border-none last:pb-0"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {row.label}
                </p>
              </div>
              <p className="shrink-0 text-lg font-semibold text-[#d9789e]">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
