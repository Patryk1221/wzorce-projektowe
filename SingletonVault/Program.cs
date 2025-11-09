using System;
using SingletonVault;

try
{
	var key1 = Vault.Instance.GetKey();
	Console.WriteLine($"Klucz: {key1}");
}
catch (InvalidOperationException ex)
{
	Console.WriteLine(ex.Message);
}
