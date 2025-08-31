import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Wifi, Tv, Server, AlertCircle, CheckCircle } from "lucide-react";

const StatusDashboard = () => {
  const services = [
    {
      name: "Internet Service",
      status: "operational",
      uptime: 99.8,
      lastUpdate: "2 minutes ago",
      icon: Wifi
    },
    {
      name: "Cable TV",
      status: "operational", 
      uptime: 99.9,
      lastUpdate: "5 minutes ago",
      icon: Tv
    },
    {
      name: "Customer Portal",
      status: "maintenance",
      uptime: 95.2,
      lastUpdate: "1 hour ago",
      icon: Server
    }
  ];

  const recentActivities = [
    { time: "10:30 AM", message: "Network optimization completed", type: "success" },
    { time: "09:15 AM", message: "Scheduled maintenance started", type: "info" },
    { time: "08:45 AM", message: "New channel package added", type: "success" },
    { time: "08:00 AM", message: "System backup completed", type: "success" }
  ];

  return (
    <section id="status" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Service Status</Badge>
          <h2 className="text-4xl font-bold mb-4">Real-Time Service Monitoring</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our service status and network performance in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">{service.name}</CardTitle>
                <service.icon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-3">
                  {service.status === "operational" ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                  <Badge 
                    variant={service.status === "operational" ? "default" : "secondary"}
                    className={service.status === "operational" ? "bg-green-500" : "bg-yellow-500"}
                  >
                    {service.status === "operational" ? "Operational" : "Maintenance"}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uptime</span>
                    <span className="font-medium">{service.uptime}%</span>
                  </div>
                  <Progress value={service.uptime} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Last updated: {service.lastUpdate}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest system updates and maintenance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === "success" ? "bg-green-500" : "bg-blue-500"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your services and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Wifi className="w-4 h-4 mr-2" />
                Check Connection Speed
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Tv className="w-4 h-4 mr-2" />
                View Channel Guide
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Server className="w-4 h-4 mr-2" />
                Restart Equipment
              </Button>
              <Button className="w-full justify-start bg-gradient-primary text-white hover:opacity-90">
                <Activity className="w-4 h-4 mr-2" />
                Report an Issue
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatusDashboard;