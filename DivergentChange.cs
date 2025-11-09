using System;

//Kroki do wykonania:
 
//1.Utwórz osobne klasy AuthenticationService i UserReportGenerator dla odpowiednich odpowiedzialności.
//1. Przenieś odpowiednie metody do tych nowych klas.
//1. Usuń zbędne metody z klasy UserAccount i zachowaj tylko właściwości oraz metody bezpośrednio związane z kontem użytkownika.

namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    // rozdzielam na klasy
    internal class AuthenticationService
    {
        public void Login(string username, string password)
        {
            Console.WriteLine("User logged in.");
        }

        public void Logout()
        {
            Console.WriteLine("User logged out.");
        }
    }

    internal class UserReportGenerator
    {
        public void GenerateReport()
        {
            Console.WriteLine("Generating user report.");
        }
    }

    internal class UserAccount
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}


