import React, { useState } from 'react';
import { WeeklyNutritionalPlan as PlanType, DailyPlan, Meal } from '../types/nutrition';
import { Apple, Coffee, Sun, Sunset, Calendar, AlertCircle, FileDown } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface NutritionalPlanProps {
  plan: PlanType;
}

export default function NutritionalPlan({ plan }: NutritionalPlanProps) {
  const [selectedDay, setSelectedDay] = useState<string>('Lunes');
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const dailyPlan = plan.weeklyPlan[selectedDay];

  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // Título y encabezado
    doc.setFontSize(20);
    doc.text('Plan Nutricional Semanal', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Calorías Diarias: ${plan.dailyCalories} kcal`, 14, 30);
    doc.text(`Proteínas: ${plan.macros.protein}g`, 14, 37);
    doc.text(`Carbohidratos: ${plan.macros.carbs}g`, 14, 44);
    doc.text(`Grasas: ${plan.macros.fats}g`, 14, 51);

    // Función para formatear los datos de las comidas
    const formatMealData = (meal: Meal) => {
      return `${meal.name}\n` +
        `Calorías: ${meal.calories}kcal\n` +
        `P: ${meal.protein}g | C: ${meal.carbs}g | G: ${meal.fats}g\n` +
        `Ingredientes: ${meal.ingredients.join(', ')}`;
    };

    // Crear tabla para cada día
    let yPos = 60;
    days.forEach((day) => {
      const dailyData = plan.weeklyPlan[day];
      
      // Encabezado del día
      doc.setFontSize(14);
      doc.text(day, 14, yPos);
      doc.setFontSize(12);
      doc.text(`Total: ${dailyData.totalNutrition.calories}kcal | P: ${dailyData.totalNutrition.protein}g | C: ${dailyData.totalNutrition.carbs}g | G: ${dailyData.totalNutrition.fats}g`, 14, yPos + 7);

      // Tabla de comidas del día
      autoTable(doc, {
        startY: yPos + 10,
        head: [['Comida', 'Detalles']],
        body: [
          ['Desayuno', formatMealData(dailyData.meals.breakfast)],
          ['Media Mañana', formatMealData(dailyData.meals.morningSnack)],
          ['Almuerzo', formatMealData(dailyData.meals.lunch)],
          ['Merienda', formatMealData(dailyData.meals.afternoonSnack)],
          ['Cena', formatMealData(dailyData.meals.dinner)]
        ],
        styles: { fontSize: 8, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: 30 },
          1: { cellWidth: 'auto' }
        },
        margin: { left: 14 }
      });

      yPos = (doc as any).lastAutoTable.finalY + 20;

      // Si no hay espacio suficiente para la siguiente tabla, agregar nueva página
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
    });

    // Guardar el PDF
    doc.save('plan-nutricional.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Tu Plan Nutricional Semanal</h2>
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown className="h-5 w-5" />
              Exportar a PDF
            </button>
          </div>
          
          {/* Valores Diarios Recomendados */}
          <div className="mb-8 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-blue-900">Valores Diarios Recomendados</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Calorías</p>
                <p className="text-lg font-bold text-blue-600">{plan.dailyCalories} kcal</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Proteínas</p>
                <p className="text-lg font-bold text-green-600">{plan.macros.protein}g</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Carbohidratos</p>
                <p className="text-lg font-bold text-yellow-600">{plan.macros.carbs}g</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Grasas</p>
                <p className="text-lg font-bold text-orange-600">{plan.macros.fats}g</p>
              </div>
            </div>
          </div>
          
          {/* Day selector */}
          <div className="mb-8">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                    selectedDay === day
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>{day}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900 mb-2">Calorías Diarias</h3>
              <p className="text-3xl font-bold text-blue-600">{dailyPlan.totalNutrition.calories} kcal</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-2">Proteínas</h3>
              <p className="text-3xl font-bold text-green-600">{dailyPlan.totalNutrition.protein}g</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-yellow-900 mb-2">Carbohidratos</h3>
              <p className="text-3xl font-bold text-yellow-600">{dailyPlan.totalNutrition.carbs}g</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Desayuno</h3>
              </div>
              <MealCard meal={dailyPlan.meals.breakfast} />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Apple className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Media Mañana</h3>
              </div>
              <MealCard meal={dailyPlan.meals.morningSnack} />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Sun className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Almuerzo</h3>
              </div>
              <MealCard meal={dailyPlan.meals.lunch} />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Apple className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Merienda</h3>
              </div>
              <MealCard meal={dailyPlan.meals.afternoonSnack} />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Sunset className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">Cena</h3>
              </div>
              <MealCard meal={dailyPlan.meals.dinner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="font-medium text-gray-900 mb-2">{meal.name}</h4>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Calorías</p>
          <p className="font-medium">{meal.calories} kcal</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Proteínas</p>
          <p className="font-medium">{meal.protein}g</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Carbos</p>
          <p className="font-medium">{meal.carbs}g</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Grasas</p>
          <p className="font-medium">{meal.fats}g</p>
        </div>
      </div>

      <div className="space-y-2">
        <h5 className="text-sm font-medium text-gray-900">Ingredientes:</h5>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}