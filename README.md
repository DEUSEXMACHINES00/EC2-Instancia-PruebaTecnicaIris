# Instancia Ec2 con AWS CDK  

## Requisitos Previos
- Tener node js
- Tener aws cdk y cli
- Congurar aws cli(tener cuenta con acces key) y ingresar en el equipo local
- Tener una clave ssh y agregarla a la consola de EC2 mediante aws cli 

## Pasos para ejecutar proyecto
- Clonar el repositorio completo y navegar a la raíz de ec2-instancia
- Instalar las dependencias: npm install
- En el archivo lib/ec2-instancia-stack.ts cambiar la variable miIP por la ip del equipo local
- Construir el proyecto: npm run build
- Desplegar el stack: cdk deploy