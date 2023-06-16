import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nesciunt expedita explicabo praesentium? Ex esse eveniet enim porro, eius modi, explicabo necessitatibus commodi culpa ipsum impedit obcaecati cum, dolorum assumenda dolores quod alias repellat! Quam tenetur omnis voluptate neque delectus voluptas atque temporibus nostrum, consequuntur ipsum vitae eum mollitia dicta.

                </p>
                <p>© EVOGYM All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa Orci Senectus</p>
                <p className="my-5">Ipsum Massa Orci Senectus lorem </p>
                <p>UllaCorper Vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem ipsum dolor sit Lorem, ipsum.</p>
                <p>(333)425-3122134</p>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer