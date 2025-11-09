using System;

namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    internal class Car
    {
        // Nowa metoda
        public string GetCylinderSize()
        {
            return GetEngine().GetCylinder().GetSize();
        }

        public Engine GetEngine()
        {
            return new Engine();
        }

        public class Engine
        {
            public Cylinder GetCylinder()
            {
                return new Cylinder();
            }
        }

        public class Cylinder
        {
            public string GetSize()
            {
                return "2.0L";
            }
        }
    }

}


