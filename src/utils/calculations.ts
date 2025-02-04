// Nutritional values per 100g/ml of common ingredients
const nutritionalDatabase = {
  // Proteínas
  'pechuga de pollo': { calories: 165, protein: 31, carbs: 0, fats: 3.6, tags: ['proteina', 'sin-lactosa', 'sin-gluten'] },
  'salmón': { calories: 208, protein: 22, carbs: 0, fats: 13, tags: ['proteina', 'omega3', 'sin-lactosa', 'sin-gluten'] },
  'atún': { calories: 132, protein: 28, carbs: 0, fats: 1.3, tags: ['proteina', 'omega3', 'sin-lactosa', 'sin-gluten'] },
  'huevos': { calories: 155, protein: 13, carbs: 1.1, fats: 11, tags: ['proteina', 'sin-lactosa', 'sin-gluten'] },
  'tofu': { calories: 144, protein: 17, carbs: 3, fats: 8, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'tempeh': { calories: 192, protein: 20.3, carbs: 7.7, fats: 10.8, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'lentejas': { calories: 116, protein: 9, carbs: 20, fats: 0.4, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'garbanzos': { calories: 164, protein: 8.9, carbs: 27, fats: 2.6, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'quinoa': { calories: 120, protein: 4.4, carbs: 21.3, fats: 1.9, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'pavo': { calories: 135, protein: 29, carbs: 0, fats: 2, tags: ['proteina', 'sin-lactosa', 'sin-gluten'] },
  'merluza': { calories: 71, protein: 17, carbs: 0, fats: 0.4, tags: ['proteina', 'sin-lactosa', 'sin-gluten'] },
  'bacalao': { calories: 82, protein: 19, carbs: 0, fats: 0.7, tags: ['proteina', 'sin-lactosa', 'sin-gluten'] },
  'seitan': { calories: 370, protein: 75, carbs: 14, fats: 2, tags: ['proteina', 'vegano', 'sin-lactosa'] },
  'frijoles negros': { calories: 132, protein: 8.9, carbs: 23.7, fats: 0.5, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'edamame': { calories: 122, protein: 11, carbs: 9.9, fats: 5.2, tags: ['proteina', 'vegano', 'sin-lactosa', 'sin-gluten'] },

  // Carbohidratos
  'avena': { calories: 389, protein: 16.9, carbs: 66.3, fats: 6.9, tags: ['carbohidrato', 'vegano', 'sin-lactosa'] },
  'arroz integral': { calories: 111, protein: 2.6, carbs: 23, fats: 0.9, tags: ['carbohidrato', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'batata': { calories: 86, protein: 1.6, carbs: 20, fats: 0.1, tags: ['carbohidrato', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'pan integral': { calories: 247, protein: 13, carbs: 41, fats: 3.4, tags: ['carbohidrato', 'vegano', 'sin-lactosa'] },
  'pan sin gluten': { calories: 267, protein: 4, carbs: 57, fats: 2, tags: ['carbohidrato', 'sin-gluten', 'sin-lactosa'] },
  'pasta integral': { calories: 124, protein: 5, carbs: 25, fats: 1.1, tags: ['carbohidrato', 'vegano', 'sin-lactosa'] },
  'pasta sin gluten': { calories: 126, protein: 2.8, carbs: 28, fats: 0.3, tags: ['carbohidrato', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'cuscús': { calories: 112, protein: 3.8, carbs: 23, fats: 0.2, tags: ['carbohidrato', 'vegano', 'sin-lactosa'] },
  'mijo': { calories: 119, protein: 3.5, carbs: 23, fats: 1, tags: ['carbohidrato', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'trigo sarraceno': { calories: 343, protein: 13, carbs: 71, fats: 3.4, tags: ['carbohidrato', 'vegano', 'sin-lactosa', 'sin-gluten'] },

  // Frutas
  'plátano': { calories: 89, protein: 1.1, carbs: 22.8, fats: 0.3, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'manzana': { calories: 52, protein: 0.3, carbs: 14, fats: 0.2, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'pera': { calories: 57, protein: 0.4, carbs: 15, fats: 0.1, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'fresas': { calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'arándanos': { calories: 57, protein: 0.7, carbs: 14, fats: 0.3, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'frambuesas': { calories: 52, protein: 1.2, carbs: 12, fats: 0.7, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'naranja': { calories: 47, protein: 0.9, carbs: 12, fats: 0.1, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'mandarina': { calories: 53, protein: 0.8, carbs: 13.3, fats: 0.3, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'kiwi': { calories: 61, protein: 1.1, carbs: 14.7, fats: 0.5, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'piña': { calories: 50, protein: 0.5, carbs: 13, fats: 0.1, tags: ['fruta', 'vegano', 'sin-lactosa', 'sin-gluten'] },

  // Verduras
  'brócoli': { calories: 34, protein: 2.8, carbs: 7, fats: 0.4, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'espinacas': { calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'zanahoria': { calories: 41, protein: 0.9, carbs: 9.6, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'calabacín': { calories: 17, protein: 1.2, carbs: 3.1, fats: 0.3, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'espárragos': { calories: 20, protein: 2.2, carbs: 3.9, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'tomate': { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'lechuga': { calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'pepino': { calories: 15, protein: 0.7, carbs: 3.6, fats: 0.1, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'pimiento': { calories: 20, protein: 0.9, carbs: 4.6, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'berenjena': { calories: 25, protein: 1, carbs: 6, fats: 0.2, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'col rizada': { calories: 49, protein: 4.3, carbs: 8.8, fats: 0.9, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'rúcula': { calories: 25, protein: 2.6, carbs: 3.7, fats: 0.7, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'champiñones': { calories: 22, protein: 3.1, carbs: 3.3, fats: 0.3, tags: ['verdura', 'vegano', 'sin-lactosa', 'sin-gluten'] },

  // Grasas saludables
  'aguacate': { calories: 160, protein: 2, carbs: 8.5, fats: 14.7, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'almendras': { calories: 579, protein: 21.2, carbs: 21.7, fats: 49.9, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'nueces': { calories: 654, protein: 15, carbs: 14, fats: 65, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'aceite de oliva': { calories: 884, protein: 0, carbs: 0, fats: 100, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'semillas de chía': { calories: 486, protein: 17, carbs: 42, fats: 31, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'semillas de lino': { calories: 534, protein: 18, carbs: 29, fats: 42, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'semillas de calabaza': { calories: 559, protein: 30, carbs: 10, fats: 49, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'aceite de coco': { calories: 862, protein: 0, carbs: 0, fats: 100, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'tahini': { calories: 595, protein: 17, carbs: 23, fats: 53, tags: ['grasa-saludable', 'vegano', 'sin-lactosa', 'sin-gluten'] },

  // Lácteos y alternativas
  'yogur griego': { calories: 97, protein: 9, carbs: 3.6, fats: 5, tags: ['lacteo', 'proteina', 'sin-gluten'] },
  'leche de almendras': { calories: 13, protein: 0.4, carbs: 0.3, fats: 1.1, tags: ['bebida-vegetal', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'leche de soja': { calories: 33, protein: 3.3, carbs: 1.2, fats: 1.8, tags: ['bebida-vegetal', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'leche de avena': { calories: 40, protein: 1, carbs: 6.6, fats: 1.4, tags: ['bebida-vegetal', 'vegano', 'sin-lactosa'] },
  'leche de coco': { calories: 20, protein: 0.2, carbs: 0.5, fats: 2, tags: ['bebida-vegetal', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'queso de almendras': { calories: 180, protein: 15, carbs: 5, fats: 11, tags: ['vegano', 'sin-lactosa', 'sin-gluten'] },
  'yogur de coco': { calories: 100, protein: 1, carbs: 12, fats: 5, tags: ['vegano', 'sin-lactosa', 'sin-gluten'] },
  
  // Otros
  'proteína en polvo': { calories: 373, protein: 80, carbs: 7.5, fats: 3.5, tags: ['suplemento', 'proteina', 'sin-gluten'] },
  'miel': { calories: 304, protein: 0.3, carbs: 82.4, fats: 0, tags: ['endulzante', 'sin-lactosa', 'sin-gluten'] },
  'sirope de arce': { calories: 260, protein: 0, carbs: 67, fats: 0, tags: ['endulzante', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'dátiles': { calories: 282, protein: 2.5, carbs: 75, fats: 0.4, tags: ['endulzante', 'vegano', 'sin-lactosa', 'sin-gluten'] },
  'stevia': { calories: 0, protein: 0, carbs: 0, fats: 0, tags: ['endulzante', 'vegano', 'sin-lactosa', 'sin-gluten'] }
};

// Standard portions in grams/ml
const standardPortions = {
  // Proteínas
  'pechuga de pollo': 150,
  'salmón': 150,
  'atún': 100,
  'huevos': 100,
  'tofu': 200,
  'tempeh': 100,
  'lentejas': 100,
  'garbanzos': 100,
  'quinoa': 100,
  'pavo': 150,
  'merluza': 150,
  'bacalao': 150,
  'seitan': 100,
  'frijoles negros': 100,
  'edamame': 100,

  // Carbohidratos
  'avena': 50,
  'arroz integral': 100,
  'batata': 150,
  'pan integral': 60,
  'pan sin gluten': 60,
  'pasta integral': 80,
  'pasta sin gluten': 80,
  'cuscús': 80,
  'mijo': 80,
  'trigo sarraceno': 80,

  // Frutas
  'plátano': 120,
  'manzana': 150,
  'pera': 150,
  'fresas': 150,
  'arándanos': 100,
  'frambuesas': 100,
  'naranja': 150,
  'mandarina': 100,
  'kiwi': 100,
  'piña': 150,

  // Verduras
  'brócoli': 100,
  'espinacas': 100,
  'zanahoria': 100,
  'calabacín': 100,
  'espárragos': 100,
  'tomate': 100,
  'lechuga': 100,
  'pepino': 100,
  'pimiento': 100,
  'berenjena': 100,
  'col rizada': 100,
  'rúcula': 50,
  'champiñones': 100,

  // Grasas saludables
  'aguacate': 50,
  'almendras': 30,
  'nueces': 30,
  'aceite de oliva': 15,
  'semillas de chía': 15,
  'semillas de lino': 15,
  'semillas de calabaza': 30,
  'aceite de coco': 15,
  'tahini': 15,

  // Lácteos y alternativas
  'yogur griego': 200,
  'leche de almendras': 250,
  'leche de soja': 250,
  'leche de avena': 250,
  'leche de coco': 250,
  'queso de almendras': 30,
  'yogur de coco': 200,

  // Otros
  'proteína en polvo': 30,
  'miel': 20,
  'sirope de arce': 20,
  'dátiles': 30,
  'stevia': 1
};

// Calculate BMR using Mifflin-St Jeor Equation
function calculateBMR(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  const bmr = 10 * weight + 6.25 * height - 5 * age;
  return gender === 'male' ? bmr + 5 : bmr - 161;
}

// Calculate TDEE (Total Daily Energy Expenditure)
function calculateTDEE(bmr: number, activityLevel: string): number {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9
  };
  return Math.round(bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]);
}

// Calculate daily caloric needs based on goal
function calculateDailyCalories(tdee: number, goal: string): number {
  switch (goal) {
    case 'deficit':
      return Math.round(tdee * 0.8); // 20% deficit
    case 'muscle':
      return Math.round(tdee * 1.1); // 10% surplus
    default:
      return tdee; // maintenance
  }
}

// Calculate macronutrient distribution
function calculateMacros(dailyCalories: number, goal: string) {
  let proteinRatio: number, carbsRatio: number, fatsRatio: number;

  switch (goal) {
    case 'deficit':
      proteinRatio = 0.4; // 40% protein
      carbsRatio = 0.35; // 35% carbs
      fatsRatio = 0.25; // 25% fats
      break;
    case 'muscle':
      proteinRatio = 0.3; // 30% protein
      carbsRatio = 0.5; // 50% carbs
      fatsRatio = 0.2; // 20% fats
      break;
    default: // maintenance
      proteinRatio = 0.3; // 30% protein
      carbsRatio = 0.45; // 45% carbs
      fatsRatio = 0.25; // 25% fats
  }

  return {
    protein: Math.round((dailyCalories * proteinRatio) / 4), // 4 calories per gram of protein
    carbs: Math.round((dailyCalories * carbsRatio) / 4), // 4 calories per gram of carbs
    fats: Math.round((dailyCalories * fatsRatio) / 9) // 9 calories per gram of fat
  };
}

// Generate a meal based on requirements
function generateMeal(
  targetCalories: number,
  targetProtein: number,
  targetCarbs: number,
  targetFats: number,
  mealType: string,
  restrictions: string[]
): Meal {
  // Filter ingredients based on restrictions and meal type
  const suitableIngredients = Object.entries(nutritionalDatabase).filter(([_, info]) => {
    return !restrictions.some(restriction => !info.tags.includes(restriction));
  });

  // Select ingredients based on macronutrient targets
  const selectedIngredients: string[] = [];
  let currentCalories = 0;
  let currentProtein = 0;
  let currentCarbs = 0;
  let currentFats = 0;

  // Add ingredients until we reach the targets
  while (
    currentCalories < targetCalories &&
    (currentProtein < targetProtein || currentCarbs < targetCarbs || currentFats < targetFats) &&
    selectedIngredients.length < 5
  ) {
    const [ingredient, info] = suitableIngredients[Math.floor(Math.random() * suitableIngredients.length)];
    const portion = standardPortions[ingredient as keyof typeof standardPortions];
    const factor = portion / 100;

    currentCalories += info.calories * factor;
    currentProtein += info.protein * factor;
    currentCarbs += info.carbs * factor;
    currentFats += info.fats * factor;

    if (!selectedIngredients.includes(ingredient)) {
      selectedIngredients.push(ingredient);
    }
  }

  return {
    name: `${mealType} nutritivo`,
    calories: Math.round(currentCalories),
    protein: Math.round(currentProtein),
    carbs: Math.round(currentCarbs),
    fats: Math.round(currentFats),
    ingredients: selectedIngredients,
    restrictions: restrictions
  };
}

// Generate a daily meal plan
function generateDailyPlan(
  dailyCalories: number,
  macros: { protein: number; carbs: number; fats: number },
  restrictions: string[]
): DailyPlan {
  const mealDistribution = {
    breakfast: 0.25,
    morningSnack: 0.1,
    lunch: 0.35,
    afternoonSnack: 0.1,
    dinner: 0.2
  };

  const meals = {
    breakfast: generateMeal(
      dailyCalories * mealDistribution.breakfast,
      macros.protein * mealDistribution.breakfast,
      macros.carbs * mealDistribution.breakfast,
      macros.fats * mealDistribution.breakfast,
      'Desayuno',
      restrictions
    ),
    morningSnack: generateMeal(
      dailyCalories * mealDistribution.morningSnack,
      macros.protein * mealDistribution.morningSnack,
      macros.carbs * mealDistribution.morningSnack,
      macros.fats * mealDistribution.morningSnack,
      'Snack de mañana',
      restrictions
    ),
    lunch: generateMeal(
      dailyCalories * mealDistribution.lunch,
      macros.protein * mealDistribution.lunch,
      macros.carbs * mealDistribution.lunch,
      macros.fats * mealDistribution.lunch,
      'Almuerzo',
      restrictions
    ),
    afternoonSnack: generateMeal(
      dailyCalories * mealDistribution.afternoonSnack,
      macros.protein * mealDistribution.afternoonSnack,
      macros.carbs * mealDistribution.afternoonSnack,
      macros.fats * mealDistribution.afternoonSnack,
      'Snack de tarde',
      restrictions
    ),
    dinner: generateMeal(
      dailyCalories * mealDistribution.dinner,
      macros.protein * mealDistribution.dinner,
      macros.carbs * mealDistribution.dinner,
      macros.fats * mealDistribution.dinner,
      'Cena',
      restrictions
    )
  };

  const totalNutrition = {
    calories: Object.values(meals).reduce((sum, meal) => sum + meal.calories, 0),
    protein: Object.values(meals).reduce((sum, meal) => sum + meal.protein, 0),
    carbs: Object.values(meals).reduce((sum, meal) => sum + meal.carbs, 0),
    fats: Object.values(meals).reduce((sum, meal) => sum + meal.fats, 0)
  };

  return {
    day: 'Lunes',
    totalNutrition,
    meals
  };
}

// Generate a weekly meal plan
export function generateWeeklyPlan(profile: UserProfile): WeeklyNutritionalPlan {
  // Calculate daily caloric needs
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const tdee = calculateTDEE(bmr, profile.activityLevel);
  const dailyCalories = calculateDailyCalories(tdee, profile.goal);
  const macros = calculateMacros(dailyCalories, profile.goal);

  // Generate restrictions array based on conditions
  const restrictions: string[] = [];
  if (profile.conditions.vegan) restrictions.push('vegano');
  if (profile.conditions.lactoseIntolerant) restrictions.push('sin-lactosa');
  if (profile.conditions.glutenIntolerant) restrictions.push('sin-gluten');

  // Generate a plan for each day of the week
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const weeklyPlan: { [key: string]: DailyPlan } = {};

  days.forEach(day => {
    const dailyPlan = generateDailyPlan(dailyCalories, macros, restrictions);
    dailyPlan.day = day;
    weeklyPlan[day] = dailyPlan;
  });

  return {
    dailyCalories,
    macros,
    weeklyPlan
  };
}