import React, { useState } from 'react';
import UserForm from './components/UserForm';
import NutritionalPlan from './components/NutritionalPlan';
import { UserProfile, WeeklyNutritionalPlan } from './types/nutrition';
import { generateWeeklyPlan } from './utils/calculations';
import { Dumbbell } from 'lucide-react';

function App() {
  const [plan, setPlan] = useState<WeeklyNutritionalPlan | null>(null);

  const handleSubmit = (profile: UserProfile) => {
    const weeklyPlan = generateWeeklyPlan(profile);
    setPlan(weeklyPlan);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Plataforma Nutricional Inteligente
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {!plan ? (
          <UserForm onSubmit={handleSubmit} />
        ) : (
          <NutritionalPlan plan={plan} />
        )}
      </main>
    </div>
  );
}

export default App;