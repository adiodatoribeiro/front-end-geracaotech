const Section = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Coleções em destaque</h1>
      <div className="flex gap-2">
        <img className="hover:scale-110" src="/public/coletion-camiseta.png" alt="camiseta" />
        <img className="hover:scale-110" src="/public/coletion-tenis.png" alt="tenis" />
        <img className="hover:scale-110" src="/public/coletion-fone.png" alt="fone" />
      </div>
    </div>
  )
}

export default Section