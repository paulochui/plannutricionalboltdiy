export interface UserProfile {
  name: string;
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  targetWeight: number;
  conditions: {
    diabetes: boolean;
    lactoseIntolerant: boolean;
    glutenIntolerant: boolean;
    vegan: boolean;
    allergies: string[];
  };
  goal: 'deficit' | 'muscle' | 'maintenance';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
}

export interface WeeklyNutritionalPlan {
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  weeklyPlan: {
    [key: string]: DailyPlan;
  };
}

export interface DailyPlan {
  day: string;
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: {
    breakfast: Meal;
    morningSnack: Meal;
    lunch: Meal;
    afternoonSnack: Meal;
    dinner: Meal;
  };
}

export interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  restrictions: string[];
}