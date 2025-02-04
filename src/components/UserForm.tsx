import React from 'react';
import { UserProfile } from '../types/nutrition';
import { Activity, Apple, Target, Weight, User, Calendar } from 'lucide-react';

interface UserFormProps {
  onSubmit: (profile: UserProfile) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [profile, setProfile] = React.useState<UserProfile>({
    name: '',
    weight: 0,
    height: 0,
    age: 25,
    gender: 'male',
    targetWeight: 0,
    conditions: {
      diabetes: false,
      lactoseIntolerant: false,
      glutenIntolerant: false,
      vegan: false,
      allergies: [],
    },
    goal: 'maintenance',
    activityLevel: 'moderate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  const handleGoalChange = (goal: 'deficit' | 'muscle' | 'maintenance') => {
    setProfile({ ...profile, goal });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Perfil Personal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Género</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value as 'male' | 'female' })}
              >
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Edad</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                required
                min="15"
                max="100"
                className="pl-10 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={profile.age || ''}
                onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Weight className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  required
                  min="30"
                  max="300"
                  className="pl-10 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={profile.weight || ''}
                  onChange={(e) => setProfile({ ...profile, weight: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Altura (cm)</label>
              <input
                type="number"
                required
                min="100"
                max="250"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={profile.height || ''}
                onChange={(e) => setProfile({ ...profile, height: Number(e.target.value) })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Meta de Peso (kg)</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Target className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                required
                min="30"
                max="300"
                className="pl-10 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={profile.targetWeight || ''}
                onChange={(e) => setProfile({ ...profile, targetWeight: Number(e.target.value) })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de Actividad</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Activity className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={profile.activityLevel}
                onChange={(e) => setProfile({ ...profile, activityLevel: e.target.value as any })}
              >
                <option value="sedentary">Sedentario</option>
                <option value="light">Actividad Ligera</option>
                <option value="moderate">Actividad Moderada</option>
                <option value="active">Muy Activo</option>
                <option value="very-active">Atleta</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Condiciones y Preferencias</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                checked={profile.conditions.diabetes}
                onChange={(e) => setProfile({
                  ...profile,
                  conditions: { ...profile.conditions, diabetes: e.target.checked }
                })}
              />
              <span className="text-gray-700">Diabetes</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                checked={profile.conditions.lactoseIntolerant}
                onChange={(e) => setProfile({
                  ...profile,
                  conditions: { ...profile.conditions, lactoseIntolerant: e.target.checked }
                })}
              />
              <span className="text-gray-700">Intolerancia a la lactosa</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                checked={profile.conditions.glutenIntolerant}
                onChange={(e) => setProfile({
                  ...profile,
                  conditions: { ...profile.conditions, glutenIntolerant: e.target.checked }
                })}
              />
              <span className="text-gray-700">Intolerancia al gluten</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                checked={profile.conditions.vegan}
                onChange={(e) => setProfile({
                  ...profile,
                  conditions: { ...profile.conditions, vegan: e.target.checked }
                })}
              />
              <span className="text-gray-700">Preferencia vegana</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Alergias o restricciones adicionales</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ej: frutos secos, mariscos (separados por comas)"
              onChange={(e) => setProfile({
                ...profile,
                conditions: { ...profile.conditions, allergies: e.target.value.split(',').map(s => s.trim()) }
              })}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Objetivo Nutricional</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'deficit', label: 'Déficit calórico', description: 'Pérdida de peso' },
              { id: 'muscle', label: 'Aumento muscular', description: 'Ganancia de masa' },
              { id: 'maintenance', label: 'Mantenimiento', description: 'Mantener peso actual' }
            ].map((option) => (
              <label
                key={option.id}
                className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${
                  profile.goal === option.id
                    ? 'border-blue-500 ring-2 ring-blue-500'
                    : 'border-gray-300'
                }`}
                onClick={() => handleGoalChange(option.id as 'deficit' | 'muscle' | 'maintenance')}
              >
                <input
                  type="radio"
                  name="goal"
                  value={option.id}
                  className="sr-only"
                  checked={profile.goal === option.id}
                  onChange={() => {}} // Required for React controlled components
                />
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <span className="block text-sm font-medium text-gray-900">{option.label}</span>
                    <span className="mt-1 flex items-center text-sm text-gray-500">{option.description}</span>
                  </span>
                </span>
                <span
                  className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                    profile.goal === option.id ? 'border-blue-500' : 'border-transparent'
                  }`}
                  aria-hidden="true"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5">
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Generar Plan Nutricional
        </button>
      </div>
    </form>
  );
}