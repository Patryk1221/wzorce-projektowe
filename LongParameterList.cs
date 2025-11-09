using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    internal class LongParameterList
    {
        // Zastepuje parametr
        internal void RegisterProduct(ProductInfo productInfo)
        {
            // Rejestracja produktu
            Console.WriteLine($"Product: {productInfo.Name}, Category: {productInfo.Category}, Price: {productInfo.Price}, Stock: {productInfo.Stock}, Supplier: {productInfo.SupplierName}, Contact: {productInfo.SupplierContact}");
        }
    }

    // Grupuje w nowej klasie
    internal class ProductInfo
    {
        internal required string Name { get; set; }
        internal required string Category { get; set; }
        internal decimal Price { get; set; }
        internal int Stock { get; set; }
        internal required string SupplierName { get; set; }
        internal required string SupplierContact { get; set; }
    }
}
