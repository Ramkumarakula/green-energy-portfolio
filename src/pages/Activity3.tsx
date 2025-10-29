import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Wind, Leaf, Zap, Home, Battery } from "lucide-react";

const Activity3 = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Sun className="h-10 w-10 text-accent" />
          <h1 className="text-4xl font-bold text-foreground">Activity 3</h1>
        </div>
        <h2 className="text-2xl text-muted-foreground">
          Integrated Microgrid System
        </h2>
        <Badge variant="secondary" className="text-base">Solar PV + Wind + Biomass for Remote Community</Badge>
      </div>

      {/* System Architecture */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Microgrid Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 p-8 rounded-xl">
            <div className="space-y-8">
              {/* Generation Sources */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <p className="font-bold text-xl text-center mb-6 text-primary">Generation Sources</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center space-y-3 p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                    <Sun className="h-12 w-12 text-accent" />
                    <div className="text-center">
                      <p className="font-bold text-lg">Solar PV Array</p>
                      <p className="text-sm text-muted-foreground">50 kW Capacity</p>
                      <p className="text-xs text-muted-foreground">Peak: 10 AM - 4 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                    <Wind className="h-12 w-12 text-secondary" />
                    <div className="text-center">
                      <p className="font-bold text-lg">Wind Turbines</p>
                      <p className="text-sm text-muted-foreground">30 kW Capacity</p>
                      <p className="text-xs text-muted-foreground">Variable Generation</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <Leaf className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <p className="font-bold text-lg">Biomass Genset</p>
                      <p className="text-sm text-muted-foreground">25 kW Capacity</p>
                      <p className="text-xs text-muted-foreground">Dispatchable Backup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded"></div>
              </div>

              {/* Power Management */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Zap className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="font-bold text-lg text-center mb-3">Power Conditioning</p>
                  <div className="space-y-2 text-sm">
                    <p>• MPPT Solar Charge Controllers</p>
                    <p>• Wind Rectifier & Dump Load</p>
                    <p>• AC/DC Converters</p>
                    <p>• Grid-forming Inverters (50 kVA)</p>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Battery className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-bold text-lg text-center mb-3">Energy Storage</p>
                  <div className="space-y-2 text-sm">
                    <p>• Lithium-ion Battery Bank</p>
                    <p>• 200 kWh Capacity</p>
                    <p>• 48V DC Bus System</p>
                    <p>• BMS for Safety & Monitoring</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-accent rounded"></div>
              </div>

              {/* Microgrid Controller */}
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-lg border-2 border-primary">
                <p className="font-bold text-xl text-center mb-4 text-primary">Microgrid Central Controller (MCC)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded">
                    <p className="font-semibold text-center mb-2">Control Functions</p>
                    <div className="space-y-1 text-sm">
                      <p>• Load forecasting & management</p>
                      <p>• Source dispatch optimization</p>
                      <p>• Battery charge/discharge control</p>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded">
                    <p className="font-semibold text-center mb-2">Protection Systems</p>
                    <div className="space-y-1 text-sm">
                      <p>• Over/Under voltage protection</p>
                      <p>• Frequency regulation (50 Hz)</p>
                      <p>• Fault detection & isolation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary rounded"></div>
              </div>

              {/* AC Distribution */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <p className="font-bold text-xl text-center mb-4">AC Distribution Network (230V/400V)</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <Home className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Residential</p>
                    <p className="text-xs text-muted-foreground">50 Households</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <Zap className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="font-semibold">Commercial</p>
                    <p className="text-xs text-muted-foreground">Shops & Services</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Community</p>
                    <p className="text-xs text-muted-foreground">School, Health Center</p>
                  </div>
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
            <strong className="text-primary">Energy Sources:</strong> This integrated microgrid harnesses three complementary renewable sources to ensure reliable power supply. The 50 kW solar PV array provides peak generation during daytime hours (10 AM - 4 PM), utilizing India's abundant solar irradiance. Three 10 kW wind turbines contribute 30 kW total capacity, generating power during windy periods especially evenings and monsoon seasons. A 25 kW biomass gasifier genset serves as dispatchable backup, converting agricultural residues and community waste into syngas for on-demand electricity generation.
          </p>
          <p>
            <strong className="text-primary">Conversion Process:</strong> Each source employs specialized power electronics for optimal energy extraction. Solar panels connect through MPPT charge controllers maximizing DC output. Wind turbines use rectifiers to convert variable AC to DC, with dump loads dissipating excess energy. The biomass genset produces 400V three-phase AC. All sources interface with a 48V DC bus system through bidirectional converters. Grid-forming inverters (50 kVA capacity) convert DC to stable 230V/400V AC, maintaining 50 Hz frequency and regulating voltage within ±5% tolerance, essential for sensitive electronic loads.
          </p>
          <p>
            <strong className="text-primary">Output and Utilization:</strong> The microgrid delivers 105 kW total generation capacity serving approximately 50 rural households plus community facilities like schools and health centers. A 200 kWh lithium-ion battery bank provides 4-6 hours backup during low generation periods, ensuring 24/7 power availability. The Microgrid Central Controller (MCC) implements intelligent dispatch strategies: prioritizing solar during day, wind when available, and activating biomass only during peak demand or storage depletion, minimizing fuel consumption while maximizing renewable utilization.
          </p>
          <p>
            <strong className="text-primary">Real-World Application Relevance:</strong> This multi-source approach addresses renewable energy's inherent intermittency challenge critical for remote communities beyond grid reach. Unlike single-source systems, the diversity factor ensures high reliability — when solar drops at sunset, wind often increases; biomass provides firm dispatchable capacity during prolonged cloudy or calm periods. The system achieves 85-90% renewable energy fraction, dramatically reducing diesel dependence and operating costs. Smart load management prioritizes critical services (health center, water pumps) during constraints. With SCADA monitoring, the MCC enables remote diagnostics and predictive maintenance, making sophisticated renewable energy infrastructure viable for underserved rural populations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity3;
