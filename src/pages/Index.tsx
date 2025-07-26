import { PeriodicTable } from '@/components/PeriodicTable';
import { BiochemicalSection } from '@/components/BiochemicalSection';
import { ThermodynamicsSection } from '@/components/ThermodynamicsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  return (
    <Tabs defaultValue="periodic-table" className="w-full">
      <div className="text-center p-4">
        <TabsList className="glass">
          <TabsTrigger value="periodic-table">Periodic Table</TabsTrigger>
          <TabsTrigger value="biochemistry">Biochemistry</TabsTrigger>
          <TabsTrigger value="thermodynamics">Thermodynamics</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="periodic-table">
        <PeriodicTable />
      </TabsContent>
      
      <TabsContent value="biochemistry" className="p-4">
        <BiochemicalSection />
      </TabsContent>
      
      <TabsContent value="thermodynamics" className="p-4">
        <ThermodynamicsSection />
      </TabsContent>
    </Tabs>
  );
};

export default Index;
