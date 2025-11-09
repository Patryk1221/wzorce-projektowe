// Kroki do wykonania:

// 1. Usuń dziedziczenie w klasie Manager.
// 1. Utwórz interfejs IEmployee zawierający metody Work, AttendMeeting.
// 1. Wprowadź interfejs IEmployee do klasy Manager i przenieś do niej tylko te metody, które są używane.

namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    public interface IEmployee
    {
        void Work();
        void AttendMeeting();
    }

    public interface IManagerAndDirector
    {
        void DrinkingCoffe();
        void BuyingNewCar();
        void GoodJobPizzaFridayTime();
    }

    public class BasicEmployee
    {
        public string Name { get; set; }
        public string Position { get; set; }
    }

    public class Employee : BasicEmployee, IEmployee
    {
        public void pracaZwyklegoPracownika() { /* implementacja */ }
        public void Work() { /* Implementacja */ }
        public void AttendMeeting() { /* Implementacja */ }
    }

    public class Manager : BasicEmployee, IEmployee, IManagerAndDirector
    {
        public void ManageTeam() { /* Implementacja */ }

        public void Work() { /* Implementacja */ };
        public void AttendMeeting() { /* Implementacja */ };
        public void DrinkingCoffe() { /* Implementacja */ };
        public void BuyingNewCar() { /* Implementacja */ };
        public void GoodJobPizzaFridayTime() { /* Implementacja */ };
    }

    public class Manager : BasicEmployee, IEmployee, IManagerAndDirector
    {
        public void DirectorWork() { /* Implementacja */ }

        public void Work() { /* Implementacja */ };
        public void AttendMeeting() { /* Implementacja */ };
        public void DrinkingCoffe() { /* Implementacja */ };
        public void BuyingNewCar() { /* Implementacja */ };
        public void GoodJobPizzaFridayTime() { /* Implementacja */ };
    }
}


