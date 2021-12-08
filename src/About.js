import { projects } from "./Projects"

import myPic from './Images/me.jpeg'

function About() {

    const me = {
        name: "Abrar Fahim",
        bio: "I'm a Final Year Computer Science undergraduate student and a Software Engineer.",
        description: "I'm a motivated and fast-learner looking to enter Machine Learning research in the fields of Computer Vision and NLP. I have 1-year experience with ML basics and developing novel learning algorithms. Over the last year, I gained experience as a software engineer developing an in-house infrustructure to process and serve data to analyst team and as a Unity game developer improving game mechanics and graphics. I also got my first taste in research, developing an unsupervised machine learning algorithm to create partitions of datasets to solve approximate similarity search queries.",
        pic: myPic
    }

    const skills = [
        {
            title: "Programming Languages",
            items: [
                {
                    subtype: null,
                    items: ["C", "C++", "Python", "Java", "JavaScript"]
                }

            ]
        },
        {
            title: "Framework and tools",
            items: [
                {
                    subtype: "Frontend",
                    items: ["React.js", "React Native", "Angular 2"]
                },
                {
                    subtype: "Backend",
                    items: ["Node.js"]
                },
                {
                    subtype: "Database",
                    items: ["MySQL", "PostgreSQL", "MongoDB"]
                },
                {
                    subtype: "Machine Learning",
                    items: ["Numpy", "scikit-learn", "PyTorch"]
                },
                {
                    subtype: "Others",
                    items: ["Unity Editor", "Git"]
                }

            ]
        }

    ]


    const experiences = [
        {
            jobTitle: "Junior Software Engineer",
            location: "Free Pixel Games Ltd",
            dates: "Dec 2020 - Jul 2021",
            tasks: [
                `Created in-house infrastructure to process and serve data to analysts. Made company game data significantly more accessible (previously only accessible to two through proprietary software) by building a web app and writing complex SQL queries to generate charts from the company game database based on input parameters`,
                `Reduced response data access times for fetching data from large company database (millions of records) from minutes to seconds by pinging the database for results and maintaining client response states in the backend, and by caching third party API data into company database`,
                `Reduced data analysis team’s time taken to go through revenue data by about 75% consolidating data from 4 providers’ APIs into a single web app`,
                `Improved visuals of 3 games by working with graphics team and experimenting with custom shaders, a technology never explored by the company before`
            ]
        }
    ]

    const research = [
        {
            title: "Undergraduate Thesis on Approximate High Dimensional Similarity Search",
            description: `<li>I'm working on this problem under the supervision of <a href="https://cse.buet.ac.bd/faculty_list/detail/eunus">Prof. Eunus Ali</a>.

            <li>We are developing a machine learning algorithm that learns a partition of a dataset into several bins. For a query point, the algorithm returns the bin that contains the nearest neighbors of the query point to speed up similarity search.</li>
            <li>We created a custom, fully vectorized optimization function in PyTorch and made loss function memory-compatible using complex tensor operations to run under 4GB GPU memory for ~ 1000 dimensional datasets with millions of points, learning high-quality partitions in under 10 minutes.</li>
            <li>We improved on baseline approach (that uses supervised learning) by designing an algorithm to learn partitions of the dataset without using labels from existing indexes in an unsupervised setting using model-boosting (improving Nearest Neighbors accuracy by at least 5-10% using an ensemble of 2 models)</li>
            <li>We are Currently conducting experiments to compare model’s performance with more datasets and state-of-the-art similarity search algorithms</li>`,
        }
    ]

    const academics = [
        {
            title: "B.Sc. in Computer Science and Engineering (CSE), present",
            school: "Bangladesh University of Engineering and Technology (BUET)",
            location: "Dhaka, Bangladesh",

        },

        {
            title: "Cambridge International A Levels, 2016",
            school: "Merryland International School",
            location: "Abu Dhabi, UAE",
            description: "Highest marks in the country in Physics, Chemistry, Physics and Maths"
        },

    ]

    const highlightedProjects = projects.slice(1, 3)


    return (
        <div className="page-container">

            <div className="grid">
                <img className="pic" src={me.pic}></img>
                <div className="grid-item">
                    <div>
                        <h1>Hi! <br /><i className="p-decor">I'm</i> <h1 className="name">{me.name}</h1></h1>
                        <h4>{me.bio}</h4>
                        <p>{me.description}</p>
                    </div>


                </div>



            </div>



            <h2>The tech I use</h2>
            <div className="grid">
                {skills.map(s => {
                    return (
                        <div className="grid-item-container">
                            <h4 className="grid-item-title">{s.title}</h4>
                            <div class="grid-item">


                                {s.items.map(si => {
                                    return (
                                        <div>
                                            <h5>{si.subtype?.toUpperCase()}</h5>
                                            <ul>
                                                {si.items.map(i => (
                                                    <li>{i}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>



                    )



                })}

            </div>

            <h2>My Academic Background</h2>
            <div className="grid">
                {

                    academics.map((a, i) =>
                        <div className="grid-item-container">
                            <h4>{a.title}</h4>
                            <h6>{a.school}</h6>
                            <h6>{a.location}</h6>
                            <h7><i>{a?.description}</i></h7>
                        </div>
                    )
                }
            </div>



            <h2>Where I've worked</h2>
            {experiences.map(e => (
                <div>

                    <h4>{e.jobTitle} at {e.location}</h4>
                    <p>{e.dates}</p>
                    <ul>
                        {e.tasks.map(t => <li>{t}</li>)}
                    </ul>
                </div>
            ))}


            <h2>My Research</h2>

            {research.map((r, i) =>
                <div>
                    <h4>
                        {r.title}
                    </h4>
                    <ul dangerouslySetInnerHTML={{ __html: r.description }}></ul>

                </div>
            )}


            <h2>Some of my Projects</h2>

            {
                highlightedProjects.map((p, i) => {

                    return <div className={i % 2 == 0 ? "project-container" : "project-container-reverse"}>
                        <img width={500} src={p.image} />
                        <div className="project-description">
                            <h3>{('0' + (i + 1)).slice(-2)}</h3>
                            <h4>
                                {p.title}
                            </h4>
                            <p>{p.description}</p>
                            <div className="project-tech-container">
                                {p.tech.map(t => <p className="project-tech">{t}</p>)}
                            </div>

                            {p.link ? <a className="project-link" href={p.link}>
                                PROJECT LINK
                            </a> : null}
                        </div>

                    </div>

                })
            }
            <a className="project-link" href="projects">
                SEE ALL MY PROJECTS
            </a>

            <div className="centered">
                <h1>Contact Me</h1>
                <a className="project-link" href="mailto:abrar9597@gmail.com">LET'S TALK</a>
            </div>






        </div>
    )
}

export default About