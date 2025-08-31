import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';


// SULUH Brand Colors - Flame Gradient
const FLAME_COLORS = [
  'hsl(var(--flame-light))',  // #FF9933
  'hsl(var(--flame-dark))',   // #FF6600  
  'hsl(24 90% 55%)',          // Mid-flame
  'hsl(20 90% 45%)',          // Darker flame
];

// Chart Data
const willingnessData = [
  { name: 'Yes', value: 70, color: FLAME_COLORS[0] },
  { name: 'Maybe', value: 20, color: FLAME_COLORS[1] },
  { name: 'No', value: 10, color: FLAME_COLORS[2] },
];

const featuresData = [
  { name: 'Fact-Check Quiz', value: 36, color: FLAME_COLORS[0] },
  { name: 'Community', value: 30, color: FLAME_COLORS[1] },
  { name: 'Mini-games', value: 26, color: FLAME_COLORS[2] },
  { name: 'AI Torch Buddy', value: 8, color: FLAME_COLORS[3] },
];

const skillData = [
  { name: 'Improves Skills', value: 62, color: FLAME_COLORS[0] },
  { name: 'Unsure', value: 28, color: FLAME_COLORS[1] },
  { name: 'No Improvement', value: 10, color: FLAME_COLORS[2] },
];

// Custom Label Component
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="font-bold text-sm drop-shadow-lg"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Individual Chart Component with 3D Effect
const Chart3D = ({ data, title }: { data: any[], title: string }) => (
  <Card className="relative overflow-hidden h-[420px] flex flex-col">
    {/* 3D Shadow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none" />
    
    <CardHeader className="text-center pb-4 flex-shrink-0">
      <CardTitle className="text-xl font-bold text-[hsl(var(--navy))] dark:text-foreground min-h-[2.5rem] flex items-center justify-center">
        {title}
      </CardTitle>
    </CardHeader>
    
    <CardContent className="relative flex-1 flex flex-col justify-between pb-6">
      <div className="relative h-64 flex-shrink-0">
        {/* Base Shadow Ring */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-black/10 to-black/20 transform translate-x-1 translate-y-1" />
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={85}
              innerRadius={0}
              fill="#8884d8"
              dataKey="value"
              stroke="hsl(var(--navy))"
              strokeWidth={3}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  style={{
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 px-2 min-h-[4rem] items-center">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium text-[hsl(var(--navy))] dark:text-foreground whitespace-nowrap">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function SuluhCharts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[hsl(var(--navy))] dark:text-foreground mb-4">
                SULUH Analytics Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                Media Literacy Platform Feasibility Analysis
              </p>
              <div className="mt-4">
                <a 
                  href="/gtm" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF9933] to-[#FF6600] text-white font-semibold rounded-lg hover:from-[#FF6600] hover:to-[#FF9933] transition-all duration-300 shadow-lg"
                >
                  View Go-to-Market Strategy →
                </a>
              </div>
            </div>

            {/* Charts Grid - Scrollable Container */}
            <div className="h-screen overflow-y-auto">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-8">
                <Chart3D 
                  data={willingnessData} 
                  title="Willingness to Use SULUH"
                />
                <Chart3D 
                  data={featuresData} 
                  title="Features Youth Are Most Interested In"
                />
                <Chart3D 
                  data={skillData} 
                  title="Perceived Skill Improvement with SULUH"
                />
              </div>
            </div>

            {/* Export Note */}
            <div className="mt-12 text-center pb-6">
              <p className="text-sm text-muted-foreground">
                Interactive 3D-style charts with SULUH brand colors • Flame gradient & Navy theme
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
}