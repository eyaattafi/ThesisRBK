import Image from 'next/image';
import logo from '../../public/logo.png'

export default function Header(){

   

    return (
        <div>
            <header className="bg-orange-950  p-3">
                <div className="container mx-auto">
                <Image src={logo} alt='logo' width={175} />
                </div>
            </header>
        </div> 
    )
}
