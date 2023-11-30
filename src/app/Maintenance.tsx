import Image from "next/image";

export default function Maintenance() {
    return (
        <div className="items-center bg-white">
            <div className="flex justify-center  bg-white">
                <Image src={"/logo-soraya.jpg"} alt="logo-soraya" width={150} height={150}/>
            </div>
            <div className="text-center mt-10 bg-white">
                <h1 className="font-bold text-2xl">Le site est actuellement en maintenance.</h1>
                <p className="mt-2">Nous travaillons activement pour améliorer votre expérience. Merci de revenir plus tard.</p>
            </div>
        </div>
    )
}