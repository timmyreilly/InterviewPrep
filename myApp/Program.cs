using System;

namespace myApp
{
    class Program
    {
        static void MainA(string[] args)
        {
            Console.WriteLine("Hello World!");
            Action a = GiveMeAction(); 
            Action b = GiveMeAction(); 

            a(); 
            b();
            a(); 
            b(); 
            a(); 
        }

        static Action GiveMeAction() {
            Action ret = null;
            int i = 0; 
            ret += () => {
                Console.WriteLine("First method " + i++); 
            };

            ret += () => {
                Console.WriteLine("Second Method: " + i++); 
            };

            return ret; 
        }
    }


}
