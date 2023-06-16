export default class UnityBuildScriptHelper
{
    static GenerateUnityBuildScript()
    {
        return `namespace unity_empty_command_github_action
{
    using UnityEditor;
    using UnityEngine;

    public class UnityBuildScript
    {
        static void PerformBuild()
            => EditorApplication.Exit(0);
    }
}`;
    }
}