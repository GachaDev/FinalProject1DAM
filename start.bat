start cmd /k startReact.bat
start cmd /k startElectron.bat
cd Project1
dotnet restore
dotnet build
dotnet run
cd..
