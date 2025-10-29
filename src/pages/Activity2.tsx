import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Flame, Zap, Home } from "lucide-react";

const Activity2 = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplets className="h-10 w-10 text-secondary" />
          <h1 className="text-4xl font-bold text-foreground">Activity 2</h1>
        </div>
        <h2 className="text-2xl text-muted-foreground">
          Biomass-based Biogas Generation System
        </h2>
        <Badge variant="secondary" className="text-base">Dairy Farm - 100 Cattle Capacity</Badge>
      </div>

      {/* System Architecture */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">System Block Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 p-8 rounded-xl">
            <div className="space-y-8">
              {/* Input Stage */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <p className="font-bold text-xl text-center mb-4 text-primary">Input Stage</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <p className="font-semibold">Cattle Dung</p>
                    <p className="text-sm text-muted-foreground">~1500 kg/day</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <p className="font-semibold">Water</p>
                    <p className="text-sm text-muted-foreground">1:1 Ratio Mix</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded">
                    <p className="font-semibold">Agricultural Waste</p>
                    <p className="text-sm text-muted-foreground">Optional Co-feed</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded"></div>
              </div>

              {/* Mixing Tank */}
              <div className="flex justify-center">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border max-w-md w-full">
                  <Droplets className="h-10 w-10 text-secondary mx-auto mb-3" />
                  <p className="font-bold text-lg text-center">Mixing Tank</p>
                  <p className="text-sm text-muted-foreground text-center">Homogenization of Feedstock</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-accent rounded"></div>
              </div>

              {/* Digester */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary">
                <p className="font-bold text-xl text-center mb-4 text-primary">Anaerobic Digester</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded">
                    <p className="font-semibold">Type: Fixed Dome</p>
                    <p className="text-sm text-muted-foreground">50-60 m³ Volume</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded">
                    <p className="font-semibold">Retention Time</p>
                    <p className="text-sm text-muted-foreground">30-40 days</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded">
                    <p className="font-semibold">Temperature</p>
                    <p className="text-sm text-muted-foreground">35-40°C (Mesophilic)</p>
                  </div>
                  <div className="text-center p-4 bg-card rounded">
                    <p className="font-semibold">pH Level</p>
                    <p className="text-sm text-muted-foreground">6.5-7.5</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary rounded"></div>
              </div>

              {/* Output Stage */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Flame className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="font-bold text-lg text-center">Biogas Output</p>
                  <p className="text-sm text-muted-foreground text-center mb-3">75-85 m³/day</p>
                  <div className="space-y-2 text-sm">
                    <p>• Cooking (Farm kitchen)</p>
                    <p>• Water Heating</p>
                    <p>• Electricity Generation</p>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Home className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-bold text-lg text-center">Organic Fertilizer</p>
                  <p className="text-sm text-muted-foreground text-center mb-3">~1400 kg/day Slurry</p>
                  <div className="space-y-2 text-sm">
                    <p>• Rich in NPK nutrients</p>
                    <p>• Crop fertilization</p>
                    <p>• Soil enrichment</p>
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
            <strong className="text-primary">Source of Energy:</strong> A dairy farm with 100 cattle produces approximately 1500 kg of fresh dung daily, representing a substantial biomass resource. Each cattle generates 15 kg of dung per day on average. This organic waste, rich in volatile solids and bacteria, serves as the primary feedstock. Additional agricultural residues like crop stubble or grass clippings can be co-fed to enhance biogas production and optimize the carbon-to-nitrogen ratio.
          </p>
          <p>
            <strong className="text-primary">Conversion Process:</strong> The dung is mixed with water in a 1:1 ratio in the mixing tank to create a uniform slurry. This mixture flows into a fixed-dome anaerobic digester (50-60 m³ capacity) where methanogenic bacteria break down organic matter in oxygen-free conditions. The process operates at mesophilic temperatures (35-40°C) with a hydraulic retention time of 30-40 days. Maintaining pH between 6.5-7.5 is crucial for optimal bacterial activity. The biogas produced contains 55-65% methane, 30-35% carbon dioxide, and trace gases.
          </p>
          <p>
            <strong className="text-primary">Output and Utilization:</strong> The system generates 75-85 cubic meters of biogas daily, equivalent to approximately 40-50 kg of LPG or 450-500 kWh of energy. This biogas can be used directly for cooking in farm kitchens, water heating for cattle washing and milk processing, or converted to electricity via biogas generators. The spent slurry (~1400 kg/day) emerges as nutrient-rich organic fertilizer containing nitrogen, phosphorus, and potassium, perfect for crop cultivation.
          </p>
          <p>
            <strong className="text-primary">Real-World Application Relevance:</strong> This system transforms waste management challenges into economic opportunities for dairy farmers. It eliminates methane emissions from open dung storage, reduces deforestation by replacing firewood, and cuts LPG expenses by ₹15,000-20,000 monthly. The bio-fertilizer improves soil health and crop yields while eliminating chemical fertilizer costs. With a typical payback period of 3-4 years, this closed-loop system exemplifies sustainable agriculture, addressing energy needs, waste management, and soil fertility simultaneously.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity2;
