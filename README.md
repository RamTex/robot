# Toy Robot Simulator

    ╔══════════╗ 3, 3, NORTH
    ║          ║
    ║      ☻↑  ║
    ║          ║
    ║          ║
    ║          ║
    ╚══════════╝


# Planning
### Identify Entities
- `World`: Bundles data and functions related to position-checking of the robot.  
- `Robot`: The  main entity. Must be able to execute all required actions as outlined in the requirement document and keep track of its state. 

  Although in a physical world the robot is part of a world, in my approach the imagination is robot-centric. The world will be injected into the robot and not vice versa.
  'The robot sees the world' instead of 'the robot is in the world'.
- `Main`: The main loop will process steps from stdin and must execute them accordingly. 
  The input is the only point of failure, if execution at any stage fails, this is ideally related to user input, hence wrapping the user input in try catch must be sufficient.
- `Rotation`: The direction is somehow represented by a numerical value (0-3). To avoid cluttering the program logic with that break from 3 to 0 or vice versa an extra 
  class `rotation` will be introduced to cater for underlying logic of turning. This helper class is the ideal place to start TDD.

### Architecture
 - Taking advantage of functional programming, I consider an elegant approach of mapping the input commands to functions. Wrap in try catch to cater for invalid user input.
 - I decided for two styles of entities: 
   If an entity consists mainly of properties and one-liners (arrow-functions), the traditional `function`-style approach is choosed, otherwise if the class features more complex business logic a `ES6`-class is used.

### Improvements
 - In case of further requirements I would: Avoid direct writing to stdout from other classes than the main loop. Inject output streams to classes. This allows a cleaner dataflow and does not clutter unit test output. At the current stage it would be overengineered.
 - Improve detail level of errors related to input parsing errors. 
 - Get the graphical output approved by project manager or remove from project.

## Bonus
For demonstration and fun purposes a sleek visual representation has been added. It does not interfere with business logic of the main program. It parses the reports written to the standard output. 

In order to provide a fluent experience there is a command line option to generate a report after each interaction automatically.



## Starting
There are two ways to start the application.
1) Interactive
   
   Parsing the user input. The program is very strict and cares about uppercase and lowercase. 

    ```
    cd robot
    node index
    ````

2) Automatic

   Parses the input commands from a file using input redirection.

    ```
    cd robot
    node index < example_c.txt
    ```

**Bonus**: In both cases you can pipe the stdout to `gui` for a character based representation of the robot in the field.
This works in interactive and automatic mode. Specify the `-a` or `--automatic` flag to advise the main loop to report every action to allow consistent representation.

    node index -a < example_c.txt | node gui


