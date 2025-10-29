import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Leaf, Zap, Building2 } from "lucide-react";

const Activity1 = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Wind className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Activity 1</h1>
        </div>
        <h2 className="text-2xl text-muted-foreground">
          Hybrid Renewable Energy System: Biogas + Wind Energy
        </h2>
        <Badge variant="secondary" className="text-base">Rural Health Clinic Application</Badge>
      </div>

      {/* System Architecture */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">System Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 p-8 rounded-xl">
            <div className="space-y-8">
              {/* Energy Sources */}
              <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="flex flex-col items-center space-y-3 bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Leaf className="h-12 w-12 text-primary" />
                  <div className="text-center">
                    <p className="font-bold text-lg">Biogas Generator</p>
                    <p className="text-sm text-muted-foreground">Organic Waste Input</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3 bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Wind className="h-12 w-12 text-secondary" />
                  <div className="text-center">
                    <p className="font-bold text-lg">Wind Turbine</p>
                    <p className="text-sm text-muted-foreground">5-10 kW Capacity</p>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded"></div>
              </div>

              {/* Power Conditioning */}
              <div className="flex justify-center">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border max-w-md w-full">
                  <Zap className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="font-bold text-lg text-center">Power Conditioning Unit</p>
                  <p className="text-sm text-muted-foreground text-center">AC/DC Converters + Inverters</p>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-accent rounded"></div>
              </div>

              {/* Storage & Distribution */}
              <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <p className="font-bold text-lg text-center">Battery Storage</p>
                  <p className="text-sm text-muted-foreground text-center">24-48V Bank</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <p className="font-bold text-lg text-center">Load Controller</p>
                  <p className="text-sm text-muted-foreground text-center">Smart Distribution</p>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary rounded"></div>
              </div>

              {/* Health Clinic */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg text-primary-foreground max-w-md w-full">
                  <Building2 className="h-12 w-12 mx-auto mb-3" />
                  <p className="font-bold text-xl text-center">Rural Health Clinic</p>
                  <p className="text-sm text-center opacity-90">Lighting, Medical Equipment, Refrigeration</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Explanation */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">System Explanation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong className="text-primary">Energy Sources:</strong> This hybrid system combines two complementary renewable sources. The biogas generator utilizes organic waste from the local community and clinic operations, producing methane through anaerobic digestion. A 5-10 kW wind turbine captures wind energy, particularly effective in rural areas with consistent wind patterns. This dual-source approach ensures continuous power availability.
          </p>
          <p>
            <strong className="text-primary">Conversion Process:</strong> Biogas is fed into a generator set producing AC electricity, while the wind turbine generates variable AC power. Both sources connect to a power conditioning unit featuring AC/DC converters and inverters that stabilize voltage and frequency. A sophisticated charge controller manages battery charging while preventing overcharging and deep discharge, extending battery life.
          </p>
          <p>
            <strong className="text-primary">Output & Utilization:</strong> The system provides reliable 230V AC power for critical clinic operations including lighting, medical equipment sterilization, vaccine refrigeration, and diagnostic devices. Battery storage (typically 24-48V lead-acid or lithium-ion banks) ensures 24-hour availability even during low generation periods. The load controller prioritizes critical medical equipment during power constraints.
          </p>
          <p>
            <strong className="text-primary">Real-World Application:</strong> This design is ideal for remote rural health clinics where grid connectivity is unavailable or unreliable. The system reduces dependence on diesel generators, cutting operational costs by 60-70%. The biogas component manages local waste effectively while the wind turbine provides additional capacity during high-demand periods, creating a sustainable and economically viable healthcare infrastructure solution.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity1;
