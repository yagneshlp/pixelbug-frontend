import React , {useState , useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { production, awsKeys } from '../var/Variables';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
var Minio = require('minio');

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    790: 2,
    500: 1
  };

function FetchGallery(props){
    useEffect(()=>{      
        fetchGallery();
    },[props]);   

    const [items, setItems] = useState([]);

    const fetchGallery = async () => {

        var s3Client = new Minio.Client({
            endPoint:  's3.amazonaws.com',
            accessKey: awsKeys.access,
            secretKey: awsKeys.secret,
            region: production.region
        })
        var objects = [];
        var moreobj = {
            name: "View Gallery",
            skip: true
        }
        var query; 
        var page = props.page;
        if(page == "gallery")
            query = new RegExp( `(gallery\/${props.year}\/)[a-zA-Z0-9_]+`);  
        else if (page == "aurora")
            query = new RegExp( `(aurora\/)[a-zA-Z0-9_]+`);
        else if(page == "home")
            query = new RegExp( `(works\/)[a-zA-Z0-9_]+`);
        else if(page == "homeAurora")
            query = new RegExp( `(aurora\/homepage\/)[a-zA-Z0-9_]+`);
         
        var stream = s3Client.listObjects(production.bucketName,'', true)
        stream.on('data', function(obj) {

             if(query.test(obj.name)) {
                   // console.log("matched :: " + obj.name );
                   if(props.page === "home") objects.pop();
                    objects.push(obj);
                    if(props.page === "home")objects.push(moreobj);
                    setItems([...objects]);  
                }    
            //setItems(objects);               
            })
        stream.on('error', function(err) { console.log(err) } )

    };

    return( props.page === "homeAurora" ?    
    <OwlCarousel
    className="brand_active"
    autoplay={true}
    loop={true}
    items={2}
    dots={false}
    autoplaySpeed={200}
    animateOut={'fadeOut'}
    animateIn= {'fadeIn'}>
        {
                items.map( obj =>{
                    return <div className="single_brand text-center">
                                {obj.skip && props.page === "home" ? <Link to="/gallery"><div className="viewGallery"><h2>{obj.name}</h2></div></Link>: <img src= {`https://pixelbug-website.s3.ap-south-1.amazonaws.com/${obj.name}`}/> }
                                
                            </div> 

                }) 
        }
    </OwlCarousel>

    :    
    <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    items.map( obj =>{
                        return <div>
                                    {obj.skip && props.page === "home" ? <Link to="/gallery"><div className="viewGallery"><h2>{obj.name}</h2></div></Link>: <img src= {`https://pixelbug-website.s3.ap-south-1.amazonaws.com/${obj.name}`}/> }
                                    
                                </div> 

                    })                   
                } 
                </Masonry>
    );


}

export default withRouter(FetchGallery);