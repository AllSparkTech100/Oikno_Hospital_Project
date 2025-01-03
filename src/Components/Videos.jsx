import { abuja } from '/bgvideo.mp4';
// import { abuja } from '../lib/Vids.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Videos() {
    const videoSet = [
        {
            title: "Abuja Therapy",
            video: { abuja },
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore impedit voluptatibus totam in sapiente, quod distinctio quam itaque blanditiis veniam soluta nihil necessitatibus voluptas repellendus quia alias? Repellat, quod facere."
        },
    ]
    return (
        <>
            {videoSet.map((items, index) => {
                return (
                    <div key={index} className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                            <div className="rounded-lg overflow-hidden border">
                                <Card className='bg-gray-700 '>
                                    <CardActionArea>
                                        <CardMedia>
                                            <video className='w-full' src={items.video} muted controls type='mp4' ></video>
                                        </CardMedia>
                                        <div className="p-2">
                                            <CardContent>
                                                <h3 className="font-bold -mt-3 mb-3 text-lg">
                                                    {items.title}
                                                </h3>
                                                <Typography variant="body2" className='text-justify text-lg'>
                                                    {items.text}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </div>
                )
            })}


        </>

    )
}

export default Videos