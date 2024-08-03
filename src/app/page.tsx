'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
    <div className="layout">
      <div className="flex flex-col gap-5 w-full">
      <img className="mx-auto mb-6" src="images/Healthier.png" height={126} width={226} alt="Logo" />
      <h2 className="text-primary w-full text-center text-3xl">Iniciar sesión</h2>
      <div className="w-full">
      <div className="flex w-full flex-col gap-6">
        <div className="w-full">
        <Label htmlFor="correo">Correo</Label>
      <Input id="correo" type="email" />
        </div>
        <div className="w-100 relative">
        <Label htmlFor="contraseña">Contraseña</Label>
      <Input id="contraseña" type="password" />
      <i className="far text-xl fa-eye absolute right-4 cursor-pointer" style={{top:'54%'}}></i>
      {/* <i className="far text-xl fa-eye-slash absolute right-4 cursor-pointer" style={{top:'54%'}}></i> */}
        </div>
        <Button className="w-full mb-3">
        Iniciar sesión
      </Button>
      </div>
      <div className="text-center text-xs w-full">¿Olvidaste la contraseña?</div>
      </div>

      <div style={{alignItems:'center'}} className="flex w-full justify-center align-middle">
      <hr className="w-6/12"/> <span className="text-center w-1/12">o</span> <hr className="w-6/12"/>
      </div>
      <div>
     <div className="gbutton mb-3">
      <img width={24} height={24} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
      <div className="text ml-4">Continua con Google</div>
     </div>

     <div className="fbutton mb-5">
      <img width={24} height={24} src="images/faceboook.png" alt="" />
      <div className="text ml-4">Continua con Facebook </div>
     </div>

     <div className="text-center text-xs">¿Aun no tienes cuenta? <span className="text-primary cursor-pointer">Registrate</span></div>
     </div>
      </div>
    </div>
    </Container>
  );
}

const Container = styled.div`
padding: 4%;
padding: 15px;
margin: auto;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
.layout {
  background: transparent;
  display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 45px;
}


.gbutton{
  display: flex;
height: 40px;
padding: 8px 53.5px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 6px;
background: var(--Slate-200, #E2E8F0);
box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08), 0px 2px 3px 0px rgba(0, 0, 0, 0.17);
transition: all 200ms;
cursor: pointer;
.text{
  color: rgba(0, 0, 0, 0.54);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
&:hover{
  background-color: #e2e8f0e4;
}
&:active{
  background-color: #E2E8F0b8;
}
}

.fbutton{
  display: flex;
height: 40px;
padding: 8px 53.5px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 6px;
background: var(--Slate-200, #1877F2);
box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08), 0px 2px 3px 0px rgba(0, 0, 0, 0.17);
transition: all 200ms;
cursor: pointer;
.text{
  color: #f2f2f2;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

&:hover{
  background-color: #1876f2e4;
}
&:active{
  background-color: #1876f2b8;
}
}
`
