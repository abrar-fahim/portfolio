import arm from './Images/robotic-arm.jpg'
import teamApp from './Images/team.png'
import alfred from './Images/alfred.jpg'
import raytrace from './Images/ray-tracing.jpg'
import compiler from './Images/compiler.jpg'
import hanoi from './Images/hanoi.png'
import megaman from './Images/megaman.png'
import loa from './Images/lines-of-action.jpg'


export const projects = [
    {
        title: 'Approximate High Dimensional Similarity Search (Undergraduate Thesis Topic)',
        description: `A machine learning algorithm that learns a partition of a dataset into several bins. For a query point, the algorithm returns the bin that contains the nearest neighbors of the query point to speed up similarity search.
        I'm developing this approach under the supervision of Prof. Eunus Ali
        We created a custom, fully vectorized optimization function in PyTorch and made loss function memory-compatible using complex tensor operations to run under 4GB GPU memory for ~ 1000 dimensional datasets with millions of points, learning high-quality partitions in under 10 minutes.
        We improved on baseline approach (that uses supervised learning) by designing an algorithm to learn partitions of the dataset without using labels from existing indexes in an unsupervised setting using model-boosting (improving Nearest Neighbors accuracy by at least 5-10% using an ensemble of 2 models)
        We are Currently conducting experiments to compare model’s performance with more datasets and state-of-the-art similarity search algorithms`,
        include: false,



    },
    {
        title: 'Motion Controlled Robotic Arm',
        description: `A robotic arm made using ATMega32 microcontrollers that
        shadows the movements of its controller.
        It also has a training mode to save movements for playing
        back later
        I mapped the movements of individual servos to the motion of
        the controller to make it smooth and intuitive
        I also worked on efficient Bluetooth communication between
        the arm and the controller
        I was also responsible for making the gyroscope work reliably,
        calibrating it on startup, and processing the outputs to feed to
        the servos`,
        image: arm,
        link: 'https://github.com/abrar-fahim/Robo-Arm-Gyro-Mimic-ATMega',
        include: true,
        tech: [
            "ATMega32",
            "C"
        ]


    },
    {
        title: "Team Collaboration App",
        description: `A web app that allows large teams to collaborate on and keep
        track of tasks, chat, and share files
        Made using Go, React.JS, and MongoDB
        I was responsible for designing database schema, writing
        CRUD queries for all app functionalities, integrating backend
        API calls in UI, and polishing UI and app navigation.`,
        image: teamApp,
        link: 'https://github.com/nafiz6/team-collaboration-app',
        include: true,
        tech: [
            "Go", "React.js", "MongoDB"
        ]
    },
    {
        title: "Alfred: A personal assistant for the office",
        description: `Alfred is a messenger chatbot, a personal assistant catered to the needs of every office employee. Alfred can help make a manager’s life much easier, allowing them to focus on getting work done leading the team rather than focusing on mundane tasks such as setting up meetings according to everyone’s schedules, collecting daily stats from everyone, and coordinating with IT to fix everyone’s malfunctioning printers, for instance.
        I led a team of 3 for this project, assigning work based on everyone’s strengths and weaknesses, conducting extensive requirement analysis, designing chat flows for the bot, and documenting all the features present.
        `,
        image: alfred,
        link: 'https://devpost.com/software/bizbot',
        include: true,
        tech: ["Wit.ai", "Node.js", "Facebook Messenger API"]
    },
    {
        title: "Megaman: A 2D Multiplayer Fighting Game",
        description: `A 2D retro (Megaman!) themed platform shooting game, with LAN multiplayer, collectible shields and health items, and fire and melee fighting options.
        I was responsible for the animations, game physics, level, and fight design. The entire game was coded from scratch using Java and Java FX.`,
        image: megaman,
        link: 'https://github.com/abrar-fahim/mega-man',
        include: true,
        tech: ["Java", "JavaFX"]
    },
    {
        title: "Lines of Action",
        description: `A Project on designing game AI using adversarial search. This project consists of an AI that can play the board game Lines of Action. Coded game logic and UI in Python for two-player or human-AI gameplays. Coded AI in Java using minimax algorithm with alpha-beta pruning and experimented to find the best heuristic`,
        image: loa,
        link: 'https://github.com/abrar-fahim/lines-of-action',
        include: true,
        tech: ["Python", "Arcade", "Java"]

    },
    {
        title: "Ray Traced OpenGL Scene",
        description: `A C++ program that takes a “Screenshot’ of an OpenGL scene and generates a ray-traced version, complete with configurable cameras, lights, and object positions
        This was a solo project.
        `,
        image: raytrace,
        link: 'https://github.com/abrar-fahim/opengl-ray-tracing',
        include: true,
        tech: ["OpenGL", "C++"]

    },
    {
        title: "Tower of Hanoi",
        description: `Solver coded in C that animates the solution to the tower of Hanoi puzzle entirely in the console.
        Can solve for a variable number of discs.
        This was one of my first programming exercises. I will be always be proud of how simulated and animated a solution to the Tower of Hanoi problem on a windows console, keeping the number of discs variable. 
        `,
        image: hanoi,
        link: 'https://github.com/abrar-fahim/tower-of-hanoi-console',
        include: true,
        tech: ["C"]
    },
    {
        title: "Basic C Compiler",
        description: `C compiler with basic peephole optimization, built using Unix text processing tools Flex and Bison.`,
        image: compiler,
        link: 'https://github.com/abrar-fahim/Compiler',
        include: true,
        tech: ["C", "Flex", "Bison"]

    }


]
function Projects() {




    return (
        <div className="page-container">
            <h1>
                My Projects
            </h1>
            {

                projects.slice(1).map((p, i) => {

                    if (p.include) {

                        return <div className={i % 2 == 0 ? "project-container" : "project-container-reverse"}>
                            =<img width={500} src={p.image} /> =
                            <div className="project-description">
                                <h3>{('0' + (i + 1)).slice(-2)}</h3>
                                <h2>
                                    {p.title}
                                </h2>
                                <p>{p.description}</p>
                                <div className="project-tech-container">
                                    {p.tech.map(t => <p className="project-tech">{t}</p>)}
                                </div>


                                {p.link ? <a className="project-link" href={p.link}>
                                    PROJECT LINK
                                </a> : null}
                            </div>


                        </div>

                    }



                }

                )
            }

        </div>


    )

}

export default Projects
