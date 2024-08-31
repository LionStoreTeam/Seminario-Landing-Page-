import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="bg-slate-50 flex flex-row py-2 justify-around items-center">
            <Link href="/">
                <Image src="/lg.jpg" alt='first logo from navbar' width={50} height={50} />
            </Link>
            <h1 className='font-semibold hover:scale-110 transition-all ease-in duration-300'>📱 + 52 777-2222-916</h1>
        </div>
    );
}

export default Navbar;