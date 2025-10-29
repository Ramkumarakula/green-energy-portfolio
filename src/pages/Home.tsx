import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Wind, Sun, Zap, Droplets } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-12 pb-20 md:pb-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 md:p-12 text-primary-foreground">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <Leaf className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Clean & Green Energy
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
            Renewable Energy Systems Design Portfolio
          </p>
        </div>
        <div className="absolute top-0 right-0 opacity-10">
          <Wind className="h-64 w-64" />
        </div>
      </section>

      {/* Student Information */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Student Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Registration Number</p>
              <p className="text-lg font-semibold text-foreground">RA2311050010086</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-lg font-semibold text-foreground">Ramkumar Akula</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Section</p>
              <Badge variant="secondary" className="text-base">AR1</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Year</p>
              <p className="text-lg font-semibold text-foreground">3rd Year</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="text-lg font-semibold text-foreground">DSBS</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Subject</p>
              <p className="text-lg font-semibold text-foreground">Clean and Green Energy (21EEO307T)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Faculty</p>
              <p className="text-lg font-semibold text-foreground">Dr. J Divya Navamani (100310)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activities Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Project Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Wind className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Activity 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Hybrid Renewable Energy System combining Biogas and Wind Energy for Rural Health Clinic
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Droplets className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Activity 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Biomass-based Biogas Generation System for Dairy Farm (100 cattle)
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sun className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Activity 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Microgrid System integrating Solar PV, Wind, and Biomass for Remote Community
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
