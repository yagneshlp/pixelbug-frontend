import React , {useState , useEffect} from 'react';

//const mode = (props)

function FetchMembers(props){
    useEffect(()=>{      
        fetchMembers();
    },[]);

    const [items, setItems] = useState([]);

    const fetchMembers = async () => {
        const data = await fetch(
            "https://spreadsheets.google.com/feeds/cells/1A_fAFbjEjJnsOQOVbpSIR2ivOw3pIxHqlAE5XaD2r20/1/public/full?alt=json"
            );

        const videos = await data.json();
        console.log(videos);
        var videoGallery = [];
        var offset = { id: 1, title : 2, desc : 3, crew : 4};
        for (var i=1;i<(videos.feed.entry.length/6);i++) {
            videoGallery.splice(i,0,videoBuilder(videos.feed,i));
        }
        function videoBuilder(feed,seed){
            var member =  {
                "id": feed.entry[(4*seed) + offset.id].content.$t,
                "title": feed.entry[(4*seed) + offset.title].content.$t,
                "desc": feed.entry[(4*seed) + offset.desc].content.$t,
                "crew": feed.entry[(4*seed) + offset.crew].content.$t
            }        
            //console.log(member);
            return member;
        }

        setItems(videoGallery);
    };

    return(
        <div className="blog_left_sidebar">
            {   
                items.map( video =>{
                    return <article className="blog_item">
                                <div className="blog_item_img">
                                    <iframe  width="100%" height="400px" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>                                  
                                </div>

                                <div className="blog_details">
                                    <a className="d-inline-block" href="single-blog.html">
                                        <h2>{video.title}</h2>
                                    </a>
                                    <p>{video.desc}</p>
                                    <ul className="blog-info-link">
                                        <li><i className="fa fa-user"></i> Crew: {video.crew} </li>                                        
                                    </ul>
                                </div>
                            </article>;
                    
                })
            }
        </div>
    );


}

export default FetchMembers;