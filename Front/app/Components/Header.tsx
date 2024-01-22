import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';

export default function Header(){

   

    return (
        <div>
            <header className="bg-orange-950  p-3">
                <div className="container mx-auto">
             <Link href='/home'>
             <Image src={logo} alt='logo' width={175} /></Link>   
                </div>
            </header>
        </div> 
    )
}
