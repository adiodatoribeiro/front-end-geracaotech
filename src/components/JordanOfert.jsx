import LoginButton from "./header/LoginButton";

const JordanOfert = () => {
    return (
        <div className="flex gap-8 pt-20">
            <img src="/public/jordan.png" alt="" />
            <div className="">
                <h6 className="py-6 text-primary text-xl font-bold">Oferta especial</h6>
                <h1 className="font-bold text-5xl pb-6">Air Jordan edição de colecionador</h1>
                <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta minus tenetur amet suscipit vel. Voluptates eum magnam aliquam iste voluptate fuga minima sint quas, ut omnis similique ducimus ratione!</p>
                <button className="font-semibold text-white bg-primary rounded-md px-10 py-2 hover:bg-black">Ver ofertas</button>
            </div>
        </div>
    );
}
 
export default JordanOfert;