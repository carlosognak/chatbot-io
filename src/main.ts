import { ChatApp } from './components/ChatApp.js';
import { Paylaod } from './core/bots/Bot.js';


const botData: Paylaod[] =   [
  {
    "name":"weatherbot", 
    "avatar":"https://img.freepik.com/premium-vector/robot-head-icon-circle-vector-illustration_418020-198.jpg?w=826", 
    "actions":[
      {"command":"weather", "description":"Get the weather", "execute": async () => "The weather is sunny"}, 
      {"command":"temperature", "description":"Get the temperature", "execute": async () => "The temperature is 25 degrees"}
    ]},
  { "name":"jokebot", 
    "avatar":"https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=sph",
    "actions":[
      {"command":"joke", "description":"Get a joke", "execute": async () => "Why did the scarecrow win an award? Because he was outstanding in his field"},
      {"command":"weather", "description":"Get the weather", "execute": async () => "The weather is rainy"}
    ]},
  { "name":"timebot",
    "avatar":"https://img.freepik.com/free-vector/robot-technology-logo_78532-1.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=sph",
    "actions":[
      {"command":"time", "description":"Get the time", "execute": async () => `The time is ${new Date().toLocaleTimeString()}`},
      {"command":"date", "description":"Get the date", "execute": async () => `The date is ${new Date().toLocaleDateString()}`},
      {"command":"weather", "description":"Get the weather", "execute": async () => "The weather is sunny"}
    ]}
  ];

  

document.addEventListener('DOMContentLoaded', () => {
  const app = ChatApp(botData);
  document.getElementById('app')!.appendChild(app);
});