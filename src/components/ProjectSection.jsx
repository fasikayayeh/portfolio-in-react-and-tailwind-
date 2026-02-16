import { Linkedin } from "lucide-react"
import { ExternalLink, Github,ArrowRight } from "lucide-react"

const project = [
{
   id:1,
   title:"AI Generetor",
   description:"beautiful AI image generator using react",
   Image:"./projects/p2.png",
   tags:["React","Html"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/AI-Image-generator",
},


{
   id:2,
   title:"Degree Convertor",
   description:"recive from the user and and convert to another measurment",
   Image:"./projects/p3.png",
   tags:["javaScript","Html/css"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/Degree-Convertor",
},



{
   id:3,
   title:"Car Model",
   description:"it show the car canpony theiir model",
   Image:"./projects/p1.png",
   tags:["React","Html/css"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/car-model",
},
{
   id:4,
   title:"To-Do-List",
   description:"it show the day to day activity",
   Image:"./projects/p6.png",
   tags:["React","Html/css", "javascript"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/to-do-list",
},
{
   id:5,
   title:"E-commerce",
   description:"This is used to buy 'Asbeza'online from market ",
   Image:"./projects/p5.png",
   tags:["React","Html/css","Tailwind"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/E-commerce",
},
{
   id:6,
   title:"Real Estate",
   description:"it show the model of house to to live within family or itselfe",
   Image:"./projects/p4.png",
   tags:["React","Html/css","Tailwind"],
   demoUrl:"#",
   githubUrl:"https://github.com/fasikayayeh/Real-Estate",
},
]



export const ProjectSection = ()=>{
    return(
        <section id="project"className="py-24 px-4 relative"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl
 md:text-4xl font-bold mb-4 text-center">Featured
                    <span className="text-primary">Projects
                    </span>
                    
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                 Here are aome of my recent project, 
                 Each projects was carefully crafted
                  with attention to detial, performance, 
                  and user experiance. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((project, key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                            <div className="h-48 overflow-hidden">
                                <img src={ project.Image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground

                                         ">
                                            {tag}
                                        </span>
                                    ))}

                                </div>

                            </div>


                        <h3 className="text-x1 font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground"></p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                href={project.demoUrl} 
                                target="_blank"
rel="noopener noreferrer"

                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                  <ExternalLink size={20}/> 
                                </a>
                                <a 
                                href={project.githubUrl}
                                target="_blank"
rel="noopener noreferrer"

                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                  <Github size={20}/> 
                                </a>
                                

                            </div>

                        </div>

                        </div>
                    ))}
                    

                </div>
                <div className="text-center mt-12">
                   <a className="cosmic-button w-fit flex items-center mx-auto gap-2 "href="https://github.com/fasikayayeh">
                    Check My Github<ArrowRight size={16}/>
                   </a>
                </div>

            </div>

        </section>
   
    )
}