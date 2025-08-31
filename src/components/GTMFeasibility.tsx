import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

// SULUH Brand Colors
const FLAME_LIGHT = '#FF9933';
const FLAME_DARK = '#FF6600';
const NAVY = '#003366';
const FLAME_MID = '#FFB366';
const FLAME_LIGHTER = '#FFC680';
const FLAME_LIGHTEST = '#FFD9A6';

// Chart Data
const channelMixData = [
  { channel: 'Instagram/TikTok', allocation: 30 },
  { channel: 'Campus Ambassadors', allocation: 25 },
  { channel: 'School Workshops', allocation: 20 },
  { channel: 'PR & Partners', allocation: 15 },
  { channel: 'Search/ASO', allocation: 10 },
];

const funnelData = [
  { stage: 'Reach', users: 10000 },
  { stage: 'Landing Visits', users: 4000 },
  { stage: 'Sign-ups', users: 1600 },
  { stage: 'MAU (Month 1)', users: 800 },
  { stage: 'Active Contributors', users: 240 },
];

const revenueData = [
  { quarter: '2025 Q1', institutional: 0, certification: 0, subscription: 0, grants: 20, total: 20 },
  { quarter: 'Q2', institutional: 4, certification: 1, subscription: 0, grants: 0, total: 5 },
  { quarter: 'Q3', institutional: 12, certification: 3, subscription: 2, grants: 0, total: 17 },
  { quarter: 'Q4', institutional: 24, certification: 5, subscription: 4, grants: 0, total: 33 },
  { quarter: '2026 Q1', institutional: 36, certification: 8, subscription: 7, grants: 0, total: 51 },
  { quarter: 'Q2', institutional: 48, certification: 12, subscription: 10, grants: 0, total: 70 },
  { quarter: 'Q3', institutional: 60, certification: 16, subscription: 14, grants: 0, total: 90 },
  { quarter: 'Q4', institutional: 72, certification: 20, subscription: 18, grants: 0, total: 110 },
];

const costData = [
  { category: 'Product & Engineering', cost: 120, color: FLAME_LIGHT },
  { category: 'Hosting/AI APIs', cost: 36, color: FLAME_DARK },
  { category: 'Content & Moderation', cost: 48, color: FLAME_MID },
  { category: 'Marketing', cost: 60, color: FLAME_LIGHTER },
  { category: 'Community Ops', cost: 24, color: FLAME_LIGHTEST },
];

const timelineData = [
  { task: 'Build MVP (Core)', start: 0, duration: 3, color: FLAME_LIGHT },
  { task: 'Closed Beta & Feedback', start: 3, duration: 2, color: FLAME_DARK },
  { task: 'Public Beta Indonesia', start: 5, duration: 2, color: FLAME_LIGHT },
  { task: 'Pilot Workshops (Schools)', start: 7, duration: 3, color: FLAME_DARK },
  { task: 'V1 Launch (IDN)', start: 10, duration: 1, color: FLAME_LIGHT },
  { task: 'Post-launch Optimize', start: 11, duration: 2, color: FLAME_DARK },
  { task: 'Advanced Tools (Map/DF)', start: 13, duration: 4, color: FLAME_LIGHT },
  { task: 'Institutional Deals', start: 17, duration: 4, color: FLAME_DARK },
];

const ChartCard = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
  <Card className={`h-[450px] flex flex-col ${className}`}>
    <CardHeader className="pb-4 flex-shrink-0">
      <CardTitle className="text-lg font-bold text-[#003366] dark:text-foreground text-center">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-4">
      {children}
    </CardContent>
  </Card>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
        <p className="font-semibold text-[#003366]">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function GTMFeasibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#003366] dark:text-foreground mb-4">
              SULUH Go-to-Market & Feasibility
            </h1>
            <p className="text-lg text-muted-foreground">
              Strategic Roadmap for Indonesia-First Launch (2025-2026)
            </p>
          </div>

          {/* Strategy Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-[#003366] dark:text-foreground">
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded-lg">
                  <h3 className="font-bold text-[#003366] dark:text-foreground mb-2">Marketing Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-channel approach targeting Indonesian youth through social media, campus ambassadors, and school partnerships
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded-lg">
                  <h3 className="font-bold text-[#003366] dark:text-foreground mb-2">Revenue Model</h3>
                  <p className="text-sm text-muted-foreground">
                    Diversified streams: institutional licenses, certifications, premium subscriptions, and CSR partnerships
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded-lg">
                  <h3 className="font-bold text-[#003366] dark:text-foreground mb-2">Timeline</h3>
                  <p className="text-sm text-muted-foreground">
                    24-month roadmap from MVP development to institutional scaling across Indonesian market
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charts Grid */}
          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="space-y-8 pb-8">
              
              {/* Marketing Charts Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                <ChartCard title="Marketing Channel Budget Allocation">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={channelMixData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="channel" 
                        angle={-20}
                        textAnchor="end"
                        height={80}
                        tick={{ fontSize: 12, fill: NAVY }}
                      />
                      <YAxis tick={{ fill: NAVY }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="allocation" fill={FLAME_LIGHT} stroke={NAVY} strokeWidth={2}>
                        {channelMixData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? FLAME_LIGHT : FLAME_DARK} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Marketing Funnel (1-Month Example)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="stage" 
                        angle={-20}
                        textAnchor="end"
                        height={80}
                        tick={{ fontSize: 12, fill: NAVY }}
                      />
                      <YAxis tick={{ fill: NAVY }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="users" stroke={NAVY} strokeWidth={2}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? FLAME_DARK : FLAME_LIGHT} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>

              {/* Revenue Projection */}
              <ChartCard title="Revenue Projection by Stream (8 Quarters)" className="col-span-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" tick={{ fill: NAVY }} />
                    <YAxis label={{ value: 'Revenue (USD $K)', angle: -90, position: 'insideLeft' }} tick={{ fill: NAVY }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke={NAVY} strokeWidth={3} name="Total" />
                    <Line type="monotone" dataKey="institutional" stroke={FLAME_DARK} strokeWidth={2} name="Institutional Licenses" />
                    <Line type="monotone" dataKey="certification" stroke={FLAME_LIGHT} strokeWidth={2} name="Certifications/Badges" />
                    <Line type="monotone" dataKey="subscription" stroke={FLAME_MID} strokeWidth={2} name="Premium Subscriptions" />
                    <Line type="monotone" dataKey="grants" stroke="#8A8A8A" strokeWidth={2} name="Grants/CSR" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>

              {/* Cost Structure and Timeline Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                <ChartCard title="Year-1 Cost Structure">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={costData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="cost"
                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        stroke={NAVY}
                        strokeWidth={2}
                      >
                        {costData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {costData.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-[#003366] dark:text-foreground">
                          {entry.category}: ${entry.cost}K
                        </span>
                      </div>
                    ))}
                  </div>
                </ChartCard>

                {/* Timeline Gantt Chart */}
                <ChartCard title="Project Timeline - Indonesia First (2025-2026)">
                  <div className="space-y-3 pt-4">
                    {timelineData.map((task, index) => (
                      <div key={index} className="relative">
                        <div className="text-xs font-medium text-[#003366] dark:text-foreground mb-1">
                          {task.task}
                        </div>
                        <div className="relative h-6 bg-gray-100 rounded">
                          <div
                            className="absolute h-full rounded"
                            style={{
                              backgroundColor: task.color,
                              left: `${(task.start / 24) * 100}%`,
                              width: `${(task.duration / 24) * 100}%`,
                              border: `2px solid ${NAVY}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between text-xs text-muted-foreground mt-4">
                      <span>Jan 2025</span>
                      <span>Jun 2025</span>
                      <span>Jan 2026</span>
                      <span>Dec 2026</span>
                    </div>
                  </div>
                </ChartCard>
              </div>

              {/* Key Metrics Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#003366] dark:text-foreground">
                    Key Performance Indicators & Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded">
                      <div className="text-2xl font-bold text-[#003366] dark:text-foreground">2.4%</div>
                      <div className="text-sm text-muted-foreground">Landing → Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded">
                      <div className="text-2xl font-bold text-[#003366] dark:text-foreground">40%</div>
                      <div className="text-sm text-muted-foreground">Sign-up Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded">
                      <div className="text-2xl font-bold text-[#003366] dark:text-foreground">50%</div>
                      <div className="text-sm text-muted-foreground">Month-1 Retention</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#FF9933]/10 to-[#FF6600]/10 rounded">
                      <div className="text-2xl font-bold text-[#003366] dark:text-foreground">30%</div>
                      <div className="text-sm text-muted-foreground">Active Contributors</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}