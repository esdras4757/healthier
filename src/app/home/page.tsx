"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="layout">
        <div className="flex flex-col gap-11 w-full">
          <div className="flex flex-col gap-3">
            <i className="fas text-2xl text-primary fa-chevron-left cursor-pointer"></i>
            <h2 className="text-primary text-3xl w-full text-center">
              Crear cuenta
            </h2>
          </div>
          <div className="w-full">
            <div className="flex w-full flex-col gap-6">
              <div className="w-full">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" type="email" />
              </div>
              <div className="w-full">
                <Label htmlFor="apellido">Apellido</Label>
                <Input id="apellido" type="email" />
              </div>
              <div className="w-full">
                <Label htmlFor="correo">Correo</Label>
                <Input id="correo" type="email" />
              </div>
              <div className="w-100 relative">
                <Label htmlFor="contraseña">Contraseña</Label>
                <Input id="contraseña" type="password" />
                <i
                  className="far text-xl fa-eye absolute right-4 cursor-pointer"
                  style={{ top: "54%" }}
                ></i>
                {/* <i className="far text-xl fa-eye-slash absolute right-4 cursor-pointer" style={{top:'54%'}}></i> */}
              </div>
              <div className="w-full">
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <div className="flex align-middle items-center">
                  <Input className="w-64" id="fechaNacimiento" type="email" />
                  <i className="far w-20 text-2xl text-center text-primary fa-circle-question cursor-pointer"></i>
                </div>
              </div>

              <Button className="w-full align-bottom mt-20">
                Crear cuenta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 4%;
  padding: 15px;
  margin: 20px auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  .layout {
    background: transparent;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 45px;
  }

  .gbutton {
    display: flex;
    height: 40px;
    padding: 8px 53.5px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 6px;
    background: var(--Slate-200, #e2e8f0);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08),
      0px 2px 3px 0px rgba(0, 0, 0, 0.17);
    transition: all 200ms;
    cursor: pointer;
    .text {
      color: rgba(0, 0, 0, 0.54);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &:hover {
      background-color: #e2e8f0e4;
    }
    &:active {
      background-color: #e2e8f0b8;
    }
  }

  .fbutton {
    display: flex;
    height: 40px;
    padding: 8px 53.5px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 6px;
    background: var(--Slate-200, #1877f2);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08),
      0px 2px 3px 0px rgba(0, 0, 0, 0.17);
    transition: all 200ms;
    cursor: pointer;
    .text {
      color: #f2f2f2;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &:hover {
      background-color: #1876f2e4;
    }
    &:active {
      background-color: #1876f2b8;
    }
  }
`;
