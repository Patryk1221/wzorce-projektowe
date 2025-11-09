namespace RefactoringToDesignPatterns.CH01_CodeSmells.CodeSmellTasks
{
    internal interface ILogger
    {
        void LogMessage();
    }

    internal class FileLogger : ILogger
    {
        public void LogMessage()
        {
        }
    }

    internal class DatabaseLogger : ILogger
    {
        public void LogMessage()
        {
        }
    }

    internal interface IExporter
    {
        void ExportData();
    }

    internal class XmlExporter : IExporter
    {
        public void ExportData()
        {
        }
    }

    internal class JsonExporter : IExporter
    {
        public void ExportData()
        {
        }
    }
}


