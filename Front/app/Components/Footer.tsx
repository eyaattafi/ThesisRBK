import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Footer(){


    return (
        <footer className="bg-orange-950  p-3 ">
            <div className="container mx-auto">
                <div className='w-full h-14 bg-orange-950 flex flex-r justify-end '>
                     <div className='p-4 justify-center items-center '>
                        <Link href="/GeneralConditions" className='text-white mr-9' > General Conditions</Link>
                    <Link href="/Confidentiality" className='text-white mr-9' > Confidentiality </Link>
                    <Link href=''><FacebookIcon className='bg-white mr-9 rounded'  /></Link>
                    <Link href=''><InstagramIcon  className='bg-white mr-9 rounded'/></Link>
                    </div></div>
                </div>
        </footer>
    )
}