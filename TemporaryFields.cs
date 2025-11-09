using System;

namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    internal class InvoiceGenerator
    {
        public void GenerateInvoice()
        {
            int invoiceNumber = 12345;
            var writer = new PdfWriter($"Invoice_{invoiceNumber}.pdf");

            writer.Write("Invoice Content");
            writer.Close();
        }

        public void OtherMethod()
        {
        }
    }
}