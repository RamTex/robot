# Planning
## Entities
Main loop - The main loop will parse from stdin and process each line.
Robot - The  main entity
World - Although the world is pretty simple and boundary logic could easily be implemented in other modules, it helps imagination. Also this is most likely the domain, a potential customer might have new requirements. The world is pretty simple and has only dimensions. The robot interacts with the world, not the other wway round.

## Planning
The direction is somehow represented by a numerical value (0-3). To avoid cluttering the program logic with that break from 3 to 0 or vice versa an extra class `rotation` will be introduced.

Taking advantage of functional programming, I consider an elegant approach of mapping the commands to functions. These functions will be developed in a test driven manner.


My approach is to directly mapping the command to a function to validate and process it.
I also inject the world into the robot and not vice versa. This is to be interpreted as 'the robot sees the world' instead of 'the robot is in the world'.

## Design helper classes 
Some functionality is required independently of the structure of the main program


## Starting
There are two ways to start the application
1) Interactive

     cd robot
     node index

2) Automatic

     cd robot
     node index < example_c.txt

Bonus: In both cases you can pipe the stdout to .\app\gui for a character based representation of the robot in the field. Works interactively and automatically.

    node index -a < example_c.txt | node .\app\gui

## Bonus
For demonstration and fun purposes a sleek visual representation has been added. It does not interfere with the main program but parses the reports written to the standard output. 

In order to provide a fluent experience there is a command line option to generate a report after each interaction automatically.

