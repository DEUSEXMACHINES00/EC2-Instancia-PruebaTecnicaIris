import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class Ec2InstanciaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const miIp = '192.168.20.29/32';

    const vpc = new ec2.Vpc(this, 'MiVpc', { maxAzs: 1 }); 

    const securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: vpc,
      description: 'Permite acceso SSH desde mi Ip ',
      allowAllOutbound: true,
    });

    securityGroup.addIngressRule(
      ec2.Peer.ipv4(miIp),
      ec2.Port.tcp(22),
      'Allow SSH access'
    );

    new ec2.Instance(this, 'Instancia-para-prueba-tecnica', {
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: ec2.MachineImage.genericLinux({
        'us-east-1': 'ami-05c3e698bd0cffe7e' 
        
      }), 
      vpc: vpc,
      keyName: 'my-key-pair',
      securityGroup: securityGroup
    });
  }
}
