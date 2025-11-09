namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    internal class ShippingDetails
    {
        public string ShippingMethod { get; set; } = string.Empty;
        public string Destination { get; set; } = string.Empty;

        public decimal CalculateShippingCost(decimal amount)
        {
            if (ShippingMethod == "Air")
            {
                return amount * 0.2m;
            }
            else if (ShippingMethod == "Sea")
            {
                return amount * 0.1m;
            }
            return amount * 0.15m;
        }
    }

    internal class Order
    {
        public ShippingDetails ShippingDetails { get; set; } = new ShippingDetails();
        public decimal Amount { get; set; }
    }
}