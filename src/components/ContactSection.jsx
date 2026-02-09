import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";

export const ContactSection =()=>{
    const hundleSubmit=(e)=>{
     e.preventDefualt()
     setTimeout(()=>{

     },1500)  
    }
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In<span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                 Have a project in mind or want to collaborate?Feel free to reach out.
                 I'm always open to discussing new opportunity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary"/>
                          </div>
                          <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:fasikayayeh3@gmail.com"
                             className="text-muted-foreground hover:text-primary transition-colors">
                               hello@gmail.com
                            </a>

                          </div>
                        </div>

                         <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                          <Phone className="h-6 w-6 text-primary"/>
                          </div>
                          <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:251939682457" className="text-muted-foreground hover:text-primary transition-colors">
                               +251 939 682 457<br/>
                               +251 704 672 457
                            </a>

                          </div>
                        </div>
                         <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary"/>
                          </div>
                          <div>
                            <h4 className="font-medium">location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                               Bahir Dar, Ethiopia
                            </a>

                          </div>
                        </div>

                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me </h4>
                     <div className="flex items-center space-x-4 justify-center">
                        <a href="#" target="_blank">
                            <Linkedin/>
                        </a>
                        <a href="#" target="_blank">
                            <Twitter/>
                        </a>
                        <a href="#" target="_blank">
                            <Send/>
                        </a>
                        <a href="#" target="_blank">
                            <Instagram/>
                        </a>
                     </div>
                    </div>

                 </div>
                  
                 <div className="bg-card p-8 rounded-lg shadow-xs  ">
                  <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
      <form>
  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium mb-2"
    >
      Your Name
    </label>

    <input
      type="text"
      id="name"
      name="name"
      required
      placeholder="Fasika Yayeh"
      className="w-full px-4 py-2 rounded-md border border-input bg-background
                 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
   <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium mb-2"
    >
      Your Email
    </label>

    <input
      type="email"
      id="email"
      name="email"
      required
      placeholder="fasikayayeh3@gmail.com"
      className="w-full px-4 py-2 rounded-md border border-input bg-background
                 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
   <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium mb-2"
    >
      Your Message
    </label>

    <textarea
      type="text"
      id="message"
      name="message"
      required
      placeholder="comment"
      className="w-full px-4 py-2 rounded-md border border-input bg-background
                 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    />
  </div>
  <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
   Send Message <Send size={16}/>
  </button>
</form>

                 </div>
                </div>
            </div>
           
        </section>
    )
}