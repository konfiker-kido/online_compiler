const defautCodeProvider = {

  cpp: `#include<iostream>
      using namespace std;

      int main() {

          cout<<"Hello";  
          
          return 0;
      }
      `,
 
  java: `import java.util.*;
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`,

  python: `print("Hello World")`,

  nodejs: `console.log("Hello World")`,

  typescript: `console.log("Hello World")`,

  go: `fmt.Println("Hello World")`,

  csharp: `Console.WriteLine("Hello World");`,

  c: `printf("Hello World");`
}

export default defautCodeProvider
