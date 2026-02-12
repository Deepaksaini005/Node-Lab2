const appConfig = {
    name : "MyApp",
    version : "1.0.0",
    author : "Developer",
    settings : {
        theme : "dark",
        language : "en"
    }
};
  const displaymessage = (user)=>{
    return `Welcome ${user} to ${appConfig.name} version ${appConfig.version}`;
  };

module .exports={
    config : appConfig,
    greetUser : displaymessage  
};