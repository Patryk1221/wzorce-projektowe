using System;
using System.Threading;

namespace SingletonVault
{
	public sealed class Vault
	{
		private static readonly Lazy<Vault> _instance = new(() => new Vault());
		public static Vault Instance => _instance.Value;

		private string? _key;

		private Vault()
		{
			_key = Guid.NewGuid().ToString("N");
		}

		public string GetKey()
		{
			var key = Interlocked.Exchange(ref _key, null);
			if (key is null)
				throw new InvalidOperationException("Klucz został już wydany.");
			return key;
		}
	}
}