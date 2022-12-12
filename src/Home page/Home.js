import React from "react";
import Propes from "./Propes";

export class Home extends React.Component{

    state={
        count:10
      }

    handlecount=()=>{
        this.setState({count:this.state.count+1})
    }
     handlecounte=()=>{
        this.setState({count:this.state.count-1})
     }
    render(){
        return(
        <div>   
            <h1>count{this.state.count}</h1>

            <button className="" onClick={this.handlecount}>Count Inc</button>  <button className="" onClick={this.handlecounte}>Count Dec</button>

            <div className="row">
            <div className="col-3">   
            <Propes title="Dell" text="Laptops combine many of the input/output components and capabilities of a desktop computer, including the display screen, small speakers, a keyboard, data storage device, pointing devices (such as a touch pad or pointing stick), with an operating system, a processor (Central processing unit (CPU)) and memory into a" img="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/computer/l/4/y/na-notebook-dell-original-imagfy6adtf9apuh.jpeg?q=70" button="btn btn-info" bname="Dell"/>
            </div>
            <div className="col-3">
            <Propes title="Tv" text="If you are looking for a brand-new second TV for your bedroom or your holiday home, you should consider getting a basic one that promises a good viewing experience. Buy Croma 80cm (32 Inch) HD Ready TV, a sleek TV set that lets you enjoy your favorite movies, shows, and content from your phone or PC in high-quality. Aesthetically designed with a slender and elegant profile, this 32-inch TV not only saves wall space but also adds to the style factor of your home. Whether you have a minimalist, modern, transitional, or classic decor set up, this LED TV will seamlessly blend in. This HD-ready TV promises crisp and clear visuals, thanks to its A+ grade" img="https://rukminim1.flixcart.com/image/312/312/xif0q/television/w/a/3/-original-imagg48gk4gzgsag.jpeg?q=70" button="btn btn-primary" bname="Tv"/>
            </div>
            <div className="col-3">
            <Propes title="Canon" text="Seize the best of videography and photography with the EOS R6 Mark II. Capable of recording up to 6K 60p 10-bit RAW movies with HDMI output, this game changer provides you with the highest image quality and flexibility for post-processing. The highly accurate 40 frames per" img="https://rukminim1.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70" button="btn btn-success" bname="Canon"/>
            </div>
            <div className="col-3">
            <Propes title="Iphone" text="The all-new iPhone 14 Pro and iPhone 14. Buy now. Your photo. Your font. Your widgets. Your iPhone. iOS 16. Ceramic Shield. All-day battery life. Accessibility features. Services: No-contact free delivery, EMI available, Shop with Specialists." img="https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fhzhzzh5s.jpeg?q=70" button="btn btn-danger" bname="Iphone"/>
            </div>
            </div> 
        </div> 
        )
    }
}

export default Home;