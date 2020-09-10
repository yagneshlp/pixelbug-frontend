import React , {useState , useEffect} from 'react';
import { withRouter } from 'react-router-dom';
var Minio = require('minio');

//const mode = (props)

function FetchGallery(props){
    useEffect(()=>{      
        fetchGallery();
    },[props]);
    

    const [items, setItems] = useState([]);

    const fetchGallery = async () => {

        var s3Client = new Minio.Client({
            endPoint:  's3.amazonaws.com',
            accessKey: 'AKIAJTRW6SORHT47MQIQ',
            secretKey: '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',
            region: "ap-south-1"
        })
         var objects = [];
         var year = props.year;        
         
        var stream = s3Client.listObjects('pixelbug-website','', true)
        stream.on('data', function(obj) {
             //console.log(obj.name) 
             var regex = new RegExp( `(gallery\/${year}\/)[a-zA-Z0-9_]+`);
             //console.log(regex);
             if(regex.test(obj.name)) {
                   // console.log("matched :: " + obj.name );
                    objects.push(obj);
                    setItems([...objects]);  
                }    
            //setItems(objects);               
            })
        stream.on('error', function(err) { console.log(err) } )

    };

    return(
        <div className="row gallery-item">
        {
            items.map( obj =>{
                return <div className="col-md-4">
                            <a href={"https://pixelbug-website.s3.ap-south-1.amazonaws.com/" + obj.name} className="img-pop-up">
                                <div className="single-gallery-image" style={{background: `url(https://pixelbug-website.s3.ap-south-1.amazonaws.com/${obj.name})`}}></div>
                            </a>
                        </div>
            })
        }
        </div>
    );


}

export default withRouter(FetchGallery);